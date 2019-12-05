// generated automatically
// DO NOT MODIFY!
declare id "dallaswah";
declare name "Dallas Wah";
declare category "Guitar Effects";
declare shortname "Dallas  Wah";
declare description "Dallas Arbiter Wah";

import("stdfaust.lib");
/* -*- faust -*- */
/****************************************************************
** helper definitions
*/
bypass(switch, block) = _ <: select2(switch, _, block);
BP(block) = bypass(checkbox("ON"), block);

copysign = ffunction(float copysign(float,float), <math.h>, "");

anti_denormal = pow(10,-20);
//add_dc = +(anti_denormal);
add_dc = +(anti_denormal);
anti_denormal_ac = 1 - 1' : *(anti_denormal) : + ~ *(-1);

smoothi(c) = *(1-c) : +~*(c);

clip(lo,hi) = min(hi) : max(lo);
sym_clip(thr) = clip(-thr,thr);

balance(b) = *(1 - max(0, b)), *(1 - max(0, -b));
wet_dry_mix(w, Fx) = _ <: _, Fx : balance(w) : +;

/****************************************************************
** nonlinear functions
*/

// from thesis of Ragnar Bendiksen (used in swh ladspa valve plugin)

valve = environment {
    ex(x) = (1 - exp(-x));
    nlim = 50; // exp(-nlim)+1 == 1, exp(nlim)/(exp(nlim)+1) == 1

    /* 2 exp() */
    tr(x) = select2(abs(x) > eps, tr_taylor(x), tr_func(max(-600,x))) with
    {
        eps = pow(10,-4);
        tr_func(x) = select2(x < -nlim, x / ex(x), -x*exp(x));
        tr_taylor(x) = 1 + x/2 + x*x/12;
    };

    df(x) = select2(abs(x) > eps, df_taylor(x), df_func(max(-600,x))) with
    {
        eps = pow(10,-4);
        df_func(x) = select2(x < -nlim, 1/ex(x) - (x * exp(-x)) / (ex(x)*ex(x)), -x*exp(x));
        df_taylor(x) = 0.5 + x/6 - x*x*x/180;
    };

    qd(dist, q, x) = dist * (x - q);

    /* 4 exp() because contains 2 valve.tr */
    vt(dist, q, x) = (tr(qd(dist, q, x)) - tr(qd(dist, q, 0))) / dist;

    vt_scaled(dist, q, x) = select2(dist*q > nlim, vt(dist, q, x) / df(qd(dist, q, 0)), vt_lim(dist, q, x)) with
    {
        bigval = pow(10,10);
        f(dist, q, x) = (qd(dist, q, x)/(1 - exp(-qd(dist, q, x)))*exp(dist*q) - dist*q)/(dist*dist*q);
        vt_lim(dist, q, x) = select2(dist*x > nlim, select2(dist*x < -nlim, f(dist, q, x), -1/dist), bigval);
    };
    vts(dist, q, x) = abs(x) : ma.neg : vt_scaled(dist, q) : copysign(_, x);
    vtu(dist, q, g) = vt_scaled(dist, q) : *(g) : ma.neg : vt(dist, q) : ma.neg;
    vtu_(dist, q, g) = vt_scaled(dist, q) :ma.neg :  *(g) : vt_scaled(dist, q) : /(g) : ma.neg;
};

saturate(t, x) = select2(abs(x) < t, x, v)
with {
  sigmoid(x) = x * (1.5 - 0.5 * x * x);
  sat(x) = t + (1 - t)*sigmoid((abs(x)-t)/((1-t)*1.5));
  v = copysign(x, sat(x));
};

nonlin(a,b,c,x) = ((a * x - b * abs(x) * x) - x) * c;
nonlin1 = nonlin(2,1,0.5);

// simple triode circuit emulation

Ftube = ffunction(float Ftube(int,float), "valve.h", "");

TB_12AX7_68k  = fconstant(int TUBE_TABLE_12AX7_68k,  "valve.h");
TB_12AX7_250k = fconstant(int TUBE_TABLE_12AX7_250k, "valve.h");
TB_6V6_68k    = fconstant(int TUBE_TABLE_6V6_68k,    "valve.h");
TB_6V6_250k   = fconstant(int TUBE_TABLE_6V6_250k,   "valve.h");
TB_12AU7_68k  = fconstant(int TUBE_TABLE_12AU7_68k,  "valve.h");
TB_12AU7_250k = fconstant(int TUBE_TABLE_12AU7_250k, "valve.h");
TB_6DJ8_68k   = fconstant(int TUBE_TABLE_6DJ8_68k,   "valve.h");
TB_6DJ8_250k  = fconstant(int TUBE_TABLE_6DJ8_250k,  "valve.h");
TB_12AT7_68k  = fconstant(int TUBE_TABLE_12AT7_68k,  "valve.h");
TB_12AT7_250k = fconstant(int TUBE_TABLE_12AT7_250k, "valve.h");
TB_6C16_68k   = fconstant(int TUBE_TABLE_6C16_68k,   "valve.h");
TB_6C16_250k  = fconstant(int TUBE_TABLE_6C16_250k,  "valve.h");

tubestageF(tb,vplus,divider,fck,Rk,Vk0) = anti_aliase : tube : hpf with {
    lpfk = fi.lowpass(1,fck);
    anti_aliase = fi.lowpass(3,ma.SR/2.1);
    Rp = 100.0e3;
    VkC = Vk0 * (Rp/Rk);
    tube = (+ : -(Vk0) : Ftube(tb) : +(VkC-vplus)) ~ (*(Rk/Rp) : lpfk) : /(divider);
    hpf = fi.highpass(1,31.0);
};

tubestage(tb,fck,Rk,Vk0)  = tubestageF(tb,250.0,40.0,fck,Rk,Vk0);
tubestage130_10(tb,fck,Rk,Vk0) = tubestageF(tb,130.0,10.0,fck,Rk,Vk0);
tubestage130_20(tb,fck,Rk,Vk0) = tubestageF(tb,130.0,20.0,fck,Rk,Vk0);

/****************************************************************
** filter
*/

//---------------------second order Parametric Equalizer---------
// filter(Q,F,G)
//  			Q : quality factor [1..100]
//				F :	frequency (Hz)
//				G : gain [0..1]
//---------------------------------------------------------------
// from "bandfilter.dsp" in the faust2pd distribution 
// which was released under the BSD license.

eqfilter(Q,F,G)	= fi.TF2(  (1 +  K/Q + K*K) 	/ D,
						 2 * (K*K - 1) 		/ D,
						(1 - K/Q + K*K) 	/ D,
						 2 * (K*K - 1) 		/ D,
						(1 - G*K/Q + K*K) 	/ D
					 )
		with {
				K = tan(ma.PI*F/ma.SR);
				D = 1 + G*K/Q + K*K;
		};

ifilter(Q,F,G) = eqfilter(Q,F,1/G);

/****************************************************************
** backward compatible faust library definitions, may removed when
** the good versions in wafscript where updated
*/

//----- Flanging effect renamed in faust-0.9.27 from
//----- flangermono -> pf.flanger_mono
//----- flangerstereo -> pf.flanger_stereo

flangermonoN(dmax,curdel,depth,fb,invert)
  = _ <: _, (-:de.fdelay(dmax,curdel)) ~ *(fb) : _, 
  *(select2(invert,depth,0-depth)) 
  : + : *(0.5);

flangerstereoN(dmax,curdel1,curdel2,depth,fb,invert)
  =  flangermonoN(dmax,curdel1,depth,fb,invert),
     flangermonoN(dmax,curdel2,depth,fb,invert);

//----- Moog "Voltage Controlled Filter" (VCF)
//----- filter renamed in faust-0.9.27 from
//----- moogvcf -> ve.moog_vcf

import("stdfaust.lib");

moogvcfN(Q,fr)  = (+ : fi.pole(p) : fi.pole(p) 
                   : fi.pole(p) : fi.pole(p) : *(scale(p))) ~ *(mk)
with {
     p = 1.0 - fr * 2.0 * ma.PI / ma.SR; // approx for fr << ma.SR
     scale(p) = pow(1-p,4);
     mk = 0-Q;
};

/****************************************************************
** building blocks
*/
fuzzy_tube(a,b,c,fuzzy) = _ <: _ + nonlin(a,b,c) * fuzzy * 0.5 : sym_clip(0.7);

/****************************************************************
** parameter definitions for use in alternative module
*/

ampctrl = environment {
    drive = vslider(".gxdistortion.drive[alias]",0.35, 0, 1, 0.01);
    wet_dry = vslider(".gxdistortion.wet_dry[alias]",  100, 0, 100, 1) : /(100) : smoothi(0.999);
    preamp =  vslider(".amp2.stage1.Pregain[alias]",-6,-20,20,0.1) : ba.db2linear : smoothi(0.999);
    gain1 = vslider(".amp2.stage2.gain1[alias]", -6, -20.0, 20.0, 0.1) : ba.db2linear : smoothi(0.999);
};

crybaby_ctrl = environment {
    level = vslider("level[alias]", 0.1, 0, 1, 0.01);
    wah = vslider("wah[alias]", 0, 0, 1, 0.01);
    wet_dry = vslider("mix[name:dry/wet][alias]",  100, 0, 100, 1) : /(100);
};

wah_ctrl = environment {
    mode = vslider("Mode[enum:manual|auto|alien][alias] [style:knob]", 0, 0, 2, 1);
    wah = vslider("Wah[alias]", 0, 0, 1, 0.01);
    freq = vslider("Freq[name:Alien Freq][tooltip:LFO in Beats per Minute][alias] [style:knob]",24,24,360,1)/60;
    wet_dry = vslider("Mix[name:dry/wet][alias][style:knob]",  100, 0, 100, 1) : /(100);
};

balance_ctrl = environment {
    bal = vslider(".amp.balance[name:Balance][alias]", 0, -1, 1, 0.1) : smoothi(0.999);
};

vibe_lfo_ctrl = environment {
    freq = vslider(".univibe.freq[name:Tempo][tooltip:LFO frequency (Hz)][alias]", 4.4, 0.1, 10, 0.1) * 16;
    phase = vslider(".univibe.stereo[name:Phase][tooltip:LFO phase shift between left and right channels][alias]", 0.11, -0.5, 0.5, 0.01) * 2 * ma.PI;
};

vibe_mono_lfo_ctrl = environment {
    freq = vslider(".univibe_mono.freq[name:Tempo][tooltip:LFO frequency (Hz)][alias]", 4.4, 0.1, 10, 0.1) * 16;
};

/****************************************************************
** reverb building blocks
*/

opf(a) = (_+_*(1-a)~@(1)*a);

// BEWARE: This is not allpass filter.
allpass(dt,fb) = (_,_ <: (*(fb),_:+:@(dt)), -) ~ _ : (!,_);

// This is true allpass below.
allpass_filter(dt,fb) = (+ <:(@(dt):_),*(fb)) ~ *(-fb) : mem,_ : + ;

allpass_with_fdelay(dt1,coef,dt2,dt2pos) = 
	(_,_ <: (*(coef),_:+:@(dt1):de.fdelay(dt2,dt2pos)), -) ~ _ : (!,_);

comb(dt, fb, damp) = (+:@(dt)) ~ (*(1-damp) : (+ ~ *(damp)) : *(fb));

dallas(x) = x  : _<:*(dry),(*(wet) : pre : fi.iir((b0/a0,b1/a0,b2/a0,b3/a0,b4/a0),(a1/a0,a2/a0,a3/a0,a4/a0))):>_ with {
    LogPot(a, x) = ba.if(a, (exp(a * x) - 1) / (exp(a) - 1), x);
    Inverted(b, x) = ba.if(b, 1 - x, x);
    s = 0.993;
    fs = float(ma.SR);
    pre = fi.dcblockerat(583.714419367);
    
    wet = wah_ctrl.wet_dry;
    dry = 1 - wet;

    Wah1 = (x : an.amp_follower_ud(0.01,0.1) : min(1) : max(0.02) ) : si.smooth(s);

    Wah2 = wah_ctrl.wah : max(0.01) : Inverted(1) : LogPot(5) : si.smooth(s);
 
    sl = wah_ctrl.mode;

    Wah3 = (os.oscs(freq) + 1) / 2 : min(0.98) : max(0.02) : Inverted(1) with {
        freq = wah_ctrl.freq;
    }; 

    Wah = select3(sl, Wah2, Wah1, Wah3);
    
    b0 = Wah*(Wah*fs*(fs*(fs*(2.83510090714092e-21*fs + 1.04896968320146e-16) + 1.59534818623044e-13) - 1.53357283072645e-26) + fs*(fs*(fs*(-2.32347860461171e-21*fs - 8.64108311643329e-17) - 1.33575525905195e-13) - 3.41675778537176e-12)) + fs*(fs*(fs*(-7.07917432005204e-21*fs - 5.52389028989215e-16) - 8.63117119019868e-13) - 5.62135356398181e-12);

    b1 = Wah*(Wah*fs*(pow(fs,2)*(-1.13404036285637e-20*fs - 2.09793936640293e-16) - 3.06714566145289e-26) + fs*(pow(fs,2)*(9.29391441844685e-21*fs + 1.72821662328666e-16) - 6.83351557074351e-12)) + fs*(pow(fs,2)*(2.83166972802082e-20*fs + 1.10477805797843e-15) - 1.12427071279636e-11);

    b2 = Wah*(Wah*pow(fs,2)*(1.70106054428455e-20*pow(fs,2) - 3.19069637246088e-13) + pow(fs,2)*(-1.39408716276703e-20*pow(fs,2) + 2.6715105181039e-13)) + pow(fs,2)*(-4.24750459203123e-20*pow(fs,2) + 1.72623423803974e-12);

    b3 = Wah*(Wah*fs*(pow(fs,2)*(-1.13404036285637e-20*fs + 2.09793936640293e-16) + 3.06714566145289e-26) + fs*(pow(fs,2)*(9.29391441844685e-21*fs - 1.72821662328666e-16) + 6.83351557074351e-12)) + fs*(pow(fs,2)*(2.83166972802082e-20*fs - 1.10477805797843e-15) + 1.12427071279636e-11);

    b4 = Wah*(Wah*fs*(fs*(fs*(2.83510090714092e-21*fs - 1.04896968320146e-16) + 1.59534818623044e-13) + 1.53357283072645e-26) + fs*(fs*(fs*(-2.32347860461171e-21*fs + 8.64108311643329e-17) - 1.33575525905195e-13) + 3.41675778537176e-12)) + fs*(fs*(fs*(-7.07917432005204e-21*fs + 5.52389028989215e-16) - 8.63117119019868e-13) + 5.62135356398181e-12);

    a0 = Wah*(Wah*fs*(fs*(fs*(-4.47972527031659e-20*fs - 1.0922674147551e-17) - 2.09610231217262e-13) + 2.01493666656321e-26) + fs*(fs*(fs*(2.74906060407121e-19*fs + 2.45407810123387e-17) + 1.4198849343527e-13) + 5.60455163682517e-12) - 5.38753119401928e-25) + fs*(fs*(fs*(6.05097478328861e-20*fs + 3.86741226880994e-17) + 1.39111781189056e-12) + 3.46679367777423e-11) + 1.49854321840248e-10;

    a1 = Wah*(Wah*fs*(pow(fs,2)*(1.79189010812664e-19*fs + 2.18453482951021e-17) + 4.02987333312642e-26) + fs*(pow(fs,2)*(-1.09962424162848e-18*fs - 4.90815620246775e-17) + 1.12091032736503e-11) - 2.15501247760771e-24) + fs*(pow(fs,2)*(-2.42038991331544e-19*fs - 7.73482453761989e-17) + 6.93358735554846e-11) + 5.99417287360993e-10;

    a2 = Wah*(Wah*pow(fs,2)*(-2.68783516218996e-19*pow(fs,2) + 4.19220462434524e-13) + pow(fs,2)*(1.64943636244273e-18*pow(fs,2) - 2.8397698687054e-13) - 3.23251871641157e-24) + pow(fs,2)*(3.63058486997317e-19*pow(fs,2) - 2.78223562378113e-12) + 8.99125931041489e-10;

    a3 = Wah*(Wah*fs*(pow(fs,2)*(1.79189010812664e-19*fs - 2.18453482951021e-17) - 4.02987333312642e-26) + fs*(pow(fs,2)*(-1.09962424162848e-18*fs + 4.90815620246775e-17) - 1.12091032736503e-11) - 2.15501247760771e-24) + fs*(pow(fs,2)*(-2.42038991331544e-19*fs + 7.73482453761989e-17) - 6.93358735554846e-11) + 5.99417287360993e-10;

    a4 = Wah*(Wah*fs*(fs*(fs*(-4.47972527031659e-20*fs + 1.0922674147551e-17) - 2.09610231217262e-13) - 2.01493666656321e-26) + fs*(fs*(fs*(2.74906060407121e-19*fs - 2.45407810123387e-17) + 1.4198849343527e-13) - 5.60455163682517e-12) - 5.38753119401928e-25) + fs*(fs*(fs*(6.05097478328861e-20*fs - 3.86741226880994e-17) + 1.39111781189056e-12) - 3.46679367777423e-11) + 1.49854321840248e-10;
};

process = ba.bypass_fade(ma.SR/10, checkbox("bypass"), dallas);
