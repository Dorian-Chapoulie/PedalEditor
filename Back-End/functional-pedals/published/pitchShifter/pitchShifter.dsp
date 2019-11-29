declare name 		"pitchShifter";
declare version 	"1.0";
declare author 		"Grame";
declare license 	"BSD";
declare copyright 	"(c)GRAME 2006";

 //--------------------------------------
 // very simple real time pitch shifter
 //--------------------------------------
 
import("stdfaust.lib");

pitchshifter = vgroup("Pitch Shifter", ef.transpose(
									hslider("window  [style:knob]", 1000, 50, 10000, 1),
									hslider("xfade  [style:knob]", 10, 1, 10000, 1),
									hslider("shift  [style:knob]", 0, -12, +12, 0.1)
								  )
				);

process = pitchshifter;
