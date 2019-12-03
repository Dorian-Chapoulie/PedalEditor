declare name "freeverb";
declare version "0.0";
declare author "RM";
declare description "Freeverb demo application.";

import("stdfaust.lib");

freeverb = dm.freeverb_demo;
process = ba.bypass_fade(ma.SR/10, checkbox("bypass"), freeverb);