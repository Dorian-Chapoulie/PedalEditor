declare name 		"pitchShifter";
declare version 	"1.0";
declare author 		"Grame";
declare license 	"BSD";
declare copyright 	"(c)GRAME 2006";

 //--------------------------------------
 // very simple real time pitch shifter
 //--------------------------------------
 
import("stdfaust.lib");
tsmooth = si.smooth(ba.tau2pole(t)) with { t = 100e-3; };

pitchshifter = vgroup("Pitch Shifter", ef.transpose(
									hslider("window [style:knob]", 1000, 50, 10000, 1):tsmooth,
									hslider("xfade [style:knob]", 10, 1, 10000, 1):tsmooth,
									hslider("shift [style:knob]", 0, -12, +12, 0.1):tsmooth
								  )
				);

    process = ba.bypass_fade(ma.SR/10, checkbox("bypass"), pitchshifter);

