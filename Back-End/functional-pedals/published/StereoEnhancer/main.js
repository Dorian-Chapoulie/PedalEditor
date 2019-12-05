
/*
Code generated with Faust version 2.20.1
Compilation options: -lang wasm-ib -scal -ftz 2
*/

function getJSONStereoEnhancer() {
	return '{"name": "StereoEnhancer","filename": "StereoEnhancer.dsp","version": "2.20.1","compile_options": "-lang wasm-ib -scal -ftz 2","include_pathnames": ["/usr/local/share/faust","/usr/local/share/faust","/usr/share/faust",".","/tmp/sessions/296EFE9263336EFE632EE241BF7AC594AB568AB2/web/wap"],"size": 1049296,"inputs": 2,"outputs": 2,"meta": [ { "basics_lib_name": "Faust Basic Element Library" },{ "basics_lib_version": "0.1" },{ "category": "Misc" },{ "compilation_options": "-single -scal -I libraries/ -I project/ -lang wasm" },{ "delays_lib_name": "Faust Delay Library" },{ "delays_lib_version": "0.1" },{ "filename": "StereoEnhancer.dsp" },{ "filters_lib_fir_author": "Julius O. Smith III" },{ "filters_lib_fir_copyright": "Copyright (C) 2003-2019 by Julius O. Smith III <jos@ccrma.stanford.edu>" },{ "filters_lib_fir_license": "MIT-style STK-4.3 license" },{ "filters_lib_highpass_author": "Julius O. Smith III" },{ "filters_lib_highpass_copyright": "Copyright (C) 2003-2019 by Julius O. Smith III <jos@ccrma.stanford.edu>" },{ "filters_lib_iir_author": "Julius O. Smith III" },{ "filters_lib_iir_copyright": "Copyright (C) 2003-2019 by Julius O. Smith III <jos@ccrma.stanford.edu>" },{ "filters_lib_iir_license": "MIT-style STK-4.3 license" },{ "filters_lib_lowpass0_highpass1": "Copyright (C) 2003-2019 by Julius O. Smith III <jos@ccrma.stanford.edu>" },{ "filters_lib_lowpass0_highpass1_author": "Julius O. Smith III" },{ "filters_lib_lowpass_author": "Julius O. Smith III" },{ "filters_lib_lowpass_copyright": "Copyright (C) 2003-2019 by Julius O. Smith III <jos@ccrma.stanford.edu>" },{ "filters_lib_lowpass_license": "MIT-style STK-4.3 license" },{ "filters_lib_name": "Faust Filters Library" },{ "filters_lib_tf2_author": "Julius O. Smith III" },{ "filters_lib_tf2_copyright": "Copyright (C) 2003-2019 by Julius O. Smith III <jos@ccrma.stanford.edu>" },{ "filters_lib_tf2_license": "MIT-style STK-4.3 license" },{ "filters_lib_tf2s_author": "Julius O. Smith III" },{ "filters_lib_tf2s_copyright": "Copyright (C) 2003-2019 by Julius O. Smith III <jos@ccrma.stanford.edu>" },{ "filters_lib_tf2s_license": "MIT-style STK-4.3 license" },{ "id": "panoram_enhancer" },{ "library_path": "FaustDSP" },{ "maths_lib_author": "GRAME" },{ "maths_lib_copyright": "GRAME" },{ "maths_lib_license": "LGPL with exception" },{ "maths_lib_name": "Faust Math Library" },{ "maths_lib_version": "2.1" },{ "name": "StereoEnhancer" },{ "shortname": "Panoram" },{ "signals_lib_name": "Faust Signal Routing Library" },{ "signals_lib_version": "0.0" }],"ui": [ {"type": "vgroup","label": "StereoEnhancer","items": [ {"type": "hslider","label": "Delay width","address": "/StereoEnhancer/Delay_width","index": 524372,"meta": [{ "name": "Delay" },{ "style": "knob" },{ "tooltip": "Delay Width" }],"init": 0,"min": 0,"max": 1,"step": 0.01},{"type": "hslider","label": "Frequency width","address": "/StereoEnhancer/Frequency_width","index": 36,"meta": [{ "name": "Frequency" },{ "style": "knob" },{ "tooltip": "Frequency Width" }],"init": 0,"min": 0,"max": 1,"step": 0.01},{"type": "checkbox","label": "bypass","address": "/StereoEnhancer/bypass","index": 12}]}]}';
}
function getBase64CodeStereoEnhancer() { return "AGFzbQEAAAAB5YCAgAATYAJ/fwBgBH9/f38AYAF9AX1gAX8Bf2ABfwF/YAJ/fwF9YAF/AX9gAn9/AGABfwBgAn9/AGACf38AYAF/AGABfQF9YAJ/fwF/YAJ/fwF/YAJ9fQF9YAN/f30AYAF9AX1gAX0BfQK/gICAAAUDZW52BV9jb3NmAAIDZW52B19sb2cxMGYADANlbnYFX3Bvd2YADwNlbnYFX3NpbmYAEQNlbnYFX3RhbmYAEgOPgICAAA4AAQMEBQYHCAkKCw0OEAWMgICAAAEBoICAgACIiICAAAe6gYCAAAwHY29tcHV0ZQAGDGdldE51bUlucHV0cwAHDWdldE51bU91dHB1dHMACA1nZXRQYXJhbVZhbHVlAAkNZ2V0U2FtcGxlUmF0ZQAKBGluaXQACw1pbnN0YW5jZUNsZWFyAAwRaW5zdGFuY2VDb25zdGFudHMADQxpbnN0YW5jZUluaXQADhppbnN0YW5jZVJlc2V0VXNlckludGVyZmFjZQAPDXNldFBhcmFtVmFsdWUAEgZtZW1vcnkCAAqc34CAAA6CgICAAAALpcCAgAACG394fUEAIQRBACEFQQAhBkEAIQdDAAAAACEfQwAAAAAhIEMAAAAAISFDAAAAACEiQwAAAAAhI0MAAAAAISRDAAAAACElQwAAAAAhJkMAAAAAISdDAAAAACEoQwAAAAAhKUMAAAAAISpDAAAAACErQwAAAAAhLEMAAAAAIS1DAAAAACEuQwAAAAAhL0MAAAAAITBDAAAAACExQwAAAAAhMkMAAAAAITNDAAAAACE0QwAAAAAhNUMAAAAAITZDAAAAACE3QwAAAAAhOEMAAAAAITlDAAAAACE6QwAAAAAhO0MAAAAAITxDAAAAACE9QwAAAAAhPkMAAAAAIT9DAAAAACFAQwAAAAAhQUMAAAAAIUJDAAAAACFDQwAAAAAhREMAAAAAIUVDAAAAACFGQwAAAAAhR0MAAAAAIUhDAAAAACFJQwAAAAAhSkMAAAAAIUtDAAAAACFMQwAAAAAhTUMAAAAAIU5DAAAAACFPQwAAAAAhUEMAAAAAIVFDAAAAACFSQwAAAAAhU0MAAAAAIVRDAAAAACFVQwAAAAAhVkMAAAAAIVdDAAAAACFYQwAAAAAhWUMAAAAAIVpBACEIQwAAAAAhW0MAAAAAIVxDAAAAACFdQwAAAAAhXkMAAAAAIV9DAAAAACFgQwAAAAAhYUMAAAAAIWJBACEJQQAhCkEAIQtDAAAAACFjQwAAAAAhZEMAAAAAIWVBACEMQQAhDUEAIQ5DAAAAACFmQwAAAAAhZ0MAAAAAIWhDAAAAACFpQwAAAAAhakMAAAAAIWtDAAAAACFsQQAhD0MAAAAAIW1BACEQQQAhEUEAIRJDAAAAACFuQwAAAAAhb0MAAAAAIXBDAAAAACFxQwAAAAAhckMAAAAAIXNDAAAAACF0QQAhE0MAAAAAIXVBACEUQQAhFUEAIRZDAAAAACF2QwAAAAAhd0MAAAAAIXhDAAAAACF5QwAAAAAhekMAAAAAIXtDAAAAACF8QwAAAAAhfUMAAAAAIX5DAAAAACF/QwAAAAAhgAFDAAAAACGBAUEAIRdDAAAAACGCAUEAIRhBACEZQQAhGkMAAAAAIYMBQwAAAAAhhAFDAAAAACGFAUMAAAAAIYYBQwAAAAAhhwFDAAAAACGIAUMAAAAAIYkBQwAAAAAhigFDAAAAACGLAUMAAAAAIYwBQwAAAAAhjQFDAAAAACGOAUMAAAAAIY8BQQAhG0MAAAAAIZABQQAhHEEAIR1BACEeQwAAAAAhkQFDAAAAACGSAUMAAAAAIZMBQwAAAAAhlAFDAAAAACGVAUMAAAAAIZYBIAJBAGooAgAhBCACQQRqKAIAIQUgA0EAaigCACEGIANBBGooAgAhB0EAKgIMIR9BACoCJCEgQQAqAiBDzczMPkOkcJ0/ICCUEACUQ5qZGT+SlCEhQ28SgzpBACoC1IAglCEiQylcjz4gIJRDmpkZP5IhI0EAKgLcgSAgI5QhJEPNzMw+Q8P1SEAgIJQQA5RDmpkZP5IhJUEAKgLYgiAgJZQhJkMAgLtEICCUISdBACoC7IMgQwBAnEYgJ5OUEAQhKEMAAIA/ICiVISkgKUPugwQ/kiAolUMAAIA/kiEqICMgKpUhK0MAAIA/IClD8wS1P5IgKJVDAACAP5KVISxDAACAPyApQ+pG9z+SICiVQwAAgD+SlSEtQQAqAuyDIEMAAMhFICeTlBAEIS5DAACAPyAulSEvIC9D7oMEP5IgLpVDAACAP5IhMEMAAIA/IDCVITEgLkMAAABAEAIhMkMAAIA/IDKVITNDAACAPyAvQ/MEtT+SIC6VQwAAgD+SlSE0QwAAgD8gL0PqRvc/kiAulUMAAIA/kpUhNSAvQ+pG97+SIC6VQwAAgD+SITZDAAAAQEMAAIA/IDOTlCE3QwAAAABDAAAAQCAylZMhOCAvQ/MEtb+SIC6VQwAAgD+SITkgL0PugwS/kiAulUMAAIA/kiE6IClD6kb3v5IgKJVDAACAP5IhO0MAAABAQwAAgD9DAACAPyAoQwAAAEAQApWTlCE8IClD8wS1v5IgKJVDAACAP5IhPUMAAIA/ICqVIT4gKUPugwS/kiAolUMAAIA/kiE/ICUgMJUhQEEAKgLsgyBDAABhRSAnk5QQBCFBQwAAgD8gQZUhQiBCQ+6DBD+SIEGVQwAAgD+SIUNDAACAPyBDlSFEIEFDAAAAQBACIUVDAACAPyBFlSFGQwAAgD8gQkPzBLU/kiBBlUMAAIA/kpUhR0MAAIA/IEJD6kb3P5IgQZVDAACAP5KVIUggQkPqRve/kiBBlUMAAIA/kiFJQwAAAEBDAACAPyBGk5QhSkMAAAAAQwAAAEAgRZWTIUsgQkPzBLW/kiBBlUMAAIA/kiFMIEJD7oMEv5IgQZVDAACAP5IhTUPNzMw+ICBDmpmZPpKRlEOamRk/kiBDlSFOQQAqAuyDIEMAAOFEICeTlBAEIU9DAACAPyBPlSFQQwAAgD8gUEPugwQ/kiBPlUMAAIA/kpUhUSBPQwAAAEAQAiFSQwAAgD8gUpUhU0MAAIA/IFBD8wS1P5IgT5VDAACAP5KVIVRDAACAPyBQQ+pG9z+SIE+VQwAAgD+SlSFVIFBD6kb3v5IgT5VDAACAP5IhVkMAAABAQwAAgD8gU5OUIVdDAAAAAEMAAABAIFKVkyFYIFBD8wS1v5IgT5VDAACAP5IhWSBQQ+6DBL+SIE+VQwAAgD+SIVpBACEIA0ACQCAEIAhqKgIAIVtBACoCCEEAKgIUkiFcQQAqAhRBACoCCJMhXSBcIB9dBH0gXAUgXSAfXgR9IF0FIB8LCyFeQQAgXrxBgICA/AdxBH0gXgVDAAAAAAs4AhBDAACAP0EAKgIQkyFfIFsgX5QhYEHQAEEAKAJMQf//B3FBAnRqIGA4AgAgIkN3vn8/QQAqAtyAIJSSIWFBACBhvEGAgID8B3EEfSBhBUMAAAAACzgC2IAgQQAqAtCAIEEAKgLYgCCUIWIgYqghCUEAIAlIBH8gCQVBAAshCkGBgAQgCkgEf0GBgAQFIAoLIQsgYo4hYyBjQwAAgD8gYpOSIWQgYiBjkyFlIAlBAWohDEEAIAxIBH8gDAVBAAshDUGBgAQgDUgEf0GBgAQFIA0LIQ5B0ABBACgCTCALa0H//wdxQQJ0aioCACBklCBlQdAAQQAoAkwgDmtB//8HcUECdGoqAgCUkkEAKgJIQQAqAuCAIEEAKgLwgCCUQQAqAuSAIEEAKgLsgCCUkpSTIWZBACBmvEGAgID8B3EEfSBmBUMAAAAACzgC6IAgQQAqAkhBACoCQEEAKgLogCCUQQAqAvSAIEEAKgLsgCCUkkEAKgJAQQAqAvCAIJSSlEEAKgJEQQAqAviAIEEAKgKEgSCUQQAqAuSAIEEAKgKAgSCUkpSTIWdBACBnvEGAgID8B3EEfSBnBUMAAAAACzgC/IAgQQAqAkRBACoCQEEAKgL8gCCUQQAqAvSAIEEAKgKAgSCUkkEAKgJAQQAqAoSBIJSSlEEAKgI4QQAqAoiBIEEAKgKUgSCUQQAqAuSAIEEAKgKQgSCUkpSTIWhBACBovEGAgID8B3EEfSBoBUMAAAAACzgCjIEgQQAqAjhBACoCQEEAKgKMgSCUQQAqAvSAIEEAKgKQgSCUkkEAKgJAQQAqApSBIJSSlEEAKgIsQQAqApiBIEEAKgKwgSCUQQAqAqSBIEEAKgKsgSCUkpSTIWlBACBpvEGAgID8B3EEfSBpBUMAAAAACzgCqIEgQQAqAixBACoCsIEgQQAqAqiBIEMAAABAQQAqAqyBIJSSkpRBACoCKEEAKgK0gSBBACoCwIEglEEAKgKkgSBBACoCvIEglJKUkyFqQQAgarxBgICA/AdxBH0gagVDAAAAAAs4AriBIEEAKgIoQQAqAsCBIEEAKgK4gSBDAAAAQEEAKgK8gSCUkpKUQQAqAiBBACoCxIEgQQAqAtCBIJRBACoCpIEgQQAqAsyBIJSSlJMha0EAIGu8QYCAgPwHcQR9IGsFQwAAAAALOALIgSBBACoC6IEgQQAqAtiAIJQhbCBsqCEPIGyOIW0gD0EBaiEQQQAgD0gEfyAPBUEACyERQQAgEEgEfyAQBUEACyESQdAAQQAoAkxBgYAEIBFIBH9BgYAEBSARC2tB//8HcUECdGoqAgAgbUMAAIA/IGyTkpQgbCBtk0HQAEEAKAJMQYGABCASSAR/QYGABAUgEgtrQf//B3FBAnRqKgIAlJJBACoCLEEAKgKYgSBBACoC9IEglEEAKgKkgSBBACoC8IEglJKUkyFuQQAgbrxBgICA/AdxBH0gbgVDAAAAAAs4AuyBIEEAKgIsQQAqAqCBIEEAKgLsgSCUQQAqAviBIEEAKgLwgSCUkkEAKgKggSBBACoC9IEglJKUQQAqAihBACoCtIEgQQAqAoSCIJRBACoCpIEgQQAqAoCCIJSSlJMhb0EAIG+8QYCAgPwHcQR9IG8FQwAAAAALOAL8gSBBACoCKEEAKgKggSBBACoC/IEglEEAKgL4gSBBACoCgIIglJJBACoCoIEgQQAqAoSCIJSSlEEAKgIgQQAqAsSBIEEAKgKQgiCUQQAqAqSBIEEAKgKMgiCUkpSTIXBBACBwvEGAgID8B3EEfSBwBUMAAAAACzgCiIIgQQAqAiBBACoCoIEgQQAqAoiCIJRBACoC+IEgQQAqAoyCIJSSQQAqAqCBIEEAKgKQgiCUkpRBACoC5IEgQQAqApSCIEEAKgKsgiCUQQAqAqCCIEEAKgKogiCUkpSTIXFBACBxvEGAgID8B3EEfSBxBUMAAAAACzgCpIIgQQAqAuSBIEEAKgKsgiBBACoCpIIgQwAAAEBBACoCqIIglJKSlEEAKgLggSBBACoCsIIgQQAqAryCIJRBACoCoIIgQQAqAriCIJSSlJMhckEAIHK8QYCAgPwHcQR9IHIFQwAAAAALOAK0giBBACoC4IEgQQAqAryCIEEAKgK0giBDAAAAQEEAKgK4giCUkpKUQQAqAtyBIEEAKgLAgiBBACoCzIIglEEAKgKggiBBACoCyIIglJKUkyFzQQAgc7xBgICA/AdxBH0gcwVDAAAAAAs4AsSCIEEAKgLkgiBBACoC2IAglCF0IHSoIRMgdI4hdSATQQFqIRRBACATSAR/IBMFQQALIRVBACAUSAR/IBQFQQALIRZB0ABBACgCTEGBgAQgFUgEf0GBgAQFIBULa0H//wdxQQJ0aioCACB1QwAAgD8gdJOSlCB0IHWTQdAAQQAoAkxBgYAEIBZIBH9BgYAEBSAWC2tB//8HcUECdGoqAgCUkkEAKgLkgSBBACoClIIgQQAqAvCCIJRBACoCoIIgQQAqAuyCIJSSlJMhdkEAIHa8QYCAgPwHcQR9IHYFQwAAAAALOALogiBBACoC5IEgQQAqApyCIEEAKgLogiCUQQAqAvSCIEEAKgLsgiCUkkEAKgKcgiBBACoC8IIglJKUQQAqAuCBIEEAKgKwgiBBACoCgIMglEEAKgKggiBBACoC/IIglJKUkyF3QQAgd7xBgICA/AdxBH0gdwVDAAAAAAs4AviCIEEAKgLggSBBACoCnIIgQQAqAviCIJRBACoC9IIgQQAqAvyCIJSSQQAqApyCIEEAKgKAgyCUkpRBACoC3IEgQQAqAsCCIEEAKgKMgyCUQQAqAqCCIEEAKgKIgyCUkpSTIXhBACB4vEGAgID8B3EEfSB4BUMAAAAACzgChIMgQQAqAtyBIEEAKgKcgiBBACoChIMglEEAKgL0giBBACoCiIMglJJBACoCnIIgQQAqAoyDIJSSlEEAKgLggiBBACoCkIMgQQAqAqCDIJRBACoClIMgQQAqApyDIJSSlJMheUEAIHm8QYCAgPwHcQR9IHkFQwAAAAALOAKYgyBBACoC4IIgQQAqAqCDIEEAKgKYgyBDAAAAQEEAKgKcgyCUkpKUQQAqAtyCIEEAKgKkgyBBACoCsIMglEEAKgKUgyBBACoCrIMglJKUkyF6QQAgerxBgICA/AdxBH0gegVDAAAAAAs4AqiDIEEAKgLcgiBBACoCsIMgQQAqAqiDIEMAAABAQQAqAqyDIJSSkpRBACoC2IIgQQAqArSDIEEAKgLAgyCUQQAqApSDIEEAKgK8gyCUkpSTIXtBACB7vEGAgID8B3EEfSB7BUMAAAAACzgCuIMgIAUgCGoqAgAhfEMAAAA/IF8gWyB8kpSUQQAqAsiDIEEAKgLMgyBBACoC2IMglEEAKgLkgCBBACoC1IMglJKUkyF9QQAgfbxBgICA/AdxBH0gfQVDAAAAAAs4AtCDIEEAKgLIgyBBACoC2IMgQQAqAtCDIEMAAABAQQAqAtSDIJSSkpRBACoCxIMgQQAqAtyDIEEAKgLogyCUQQAqAuSAIEEAKgLkgyCUkpSTIX5BACB+vEGAgID8B3EEfSB+BUMAAAAACzgC4IMgQQAqAsSDIEEAKgLogyBBACoC4IMgQwAAAEBBACoC5IMglJKSlCF/IAYgCGogW0EAKgIQlCBfICFBACoC0IEgQQAqAsiBIEMAAABAQQAqAsyBIJSSkpQgJEEAKgLMgiBBACoCxIIgQwAAAEBBACoCyIIglJKSlJIgJkEAKgLAgyBBACoCuIMgQwAAAEBBACoCvIMglJKSlJIgf5KUkjgCACB8IF+UIYABQfCDIEEAKAJMQf//B3FBAnRqIIABOAIAQQAqAvCDQEEAKgLYgCCUIYEBIIEBqCEXIIEBjiGCASAXQQFqIRhBACAXSAR/IBcFQQALIRlBACAYSAR/IBgFQQALIRpB8IMgQQAoAkxBgYAEIBlIBH9BgYAEBSAZC2tB//8HcUECdGoqAgAgggFDAACAPyCBAZOSlCCBASCCAZNB8IMgQQAoAkxBgYAEIBpIBH9BgYAEBSAaC2tB//8HcUECdGoqAgCUkiA1IDZBACoC/INAlCA3QQAqAviDQJSSlJMhgwFBACCDAbxBgICA/AdxBH0ggwEFQwAAAAALOAL0g0AgNSAzQQAqAvSDQJQgOEEAKgL4g0CUkiAzQQAqAvyDQJSSlCA0IDlBACoCiIRAlCA3QQAqAoSEQJSSlJMhhAFBACCEAbxBgICA/AdxBH0ghAEFQwAAAAALOAKAhEAgNCAzQQAqAoCEQJQgOEEAKgKEhECUkiAzQQAqAoiEQJSSlCAxIDpBACoClIRAlCA3QQAqApCEQJSSlJMhhQFBACCFAbxBgICA/AdxBH0ghQEFQwAAAAALOAKMhEAgMSAzQQAqAoyEQJQgOEEAKgKQhECUkiAzQQAqApSEQJSSlCAtIDtBACoCoIRAlCA8QQAqApyEQJSSlJMhhgFBACCGAbxBgICA/AdxBH0ghgEFQwAAAAALOAKYhEAgLUEAKgKghEBBACoCmIRAQwAAAEBBACoCnIRAlJKSlCAsID1BACoCrIRAlCA8QQAqAqiEQJSSlJMhhwFBACCHAbxBgICA/AdxBH0ghwEFQwAAAAALOAKkhEAgLEEAKgKshEBBACoCpIRAQwAAAEBBACoCqIRAlJKSlCA+ID9BACoCuIRAlCA8QQAqArSEQJSSlJMhiAFBACCIAbxBgICA/AdxBH0giAEFQwAAAAALOAKwhEBB8IMgQQAoAkwgC2tB//8HcUECdGoqAgAgZJQgZUHwgyBBACgCTCAOa0H//wdxQQJ0aioCAJSSIEggSUEAKgLEhECUIEpBACoCwIRAlJKUkyGJAUEAIIkBvEGAgID8B3EEfSCJAQVDAAAAAAs4AryEQCBIIEZBACoCvIRAlCBLQQAqAsCEQJSSIEZBACoCxIRAlJKUIEcgTEEAKgLQhECUIEpBACoCzIRAlJKUkyGKAUEAIIoBvEGAgID8B3EEfSCKAQVDAAAAAAs4AsiEQCBHIEZBACoCyIRAlCBLQQAqAsyEQJSSIEZBACoC0IRAlJKUIEQgTUEAKgLchECUIEpBACoC2IRAlJKUkyGLAUEAIIsBvEGAgID8B3EEfSCLAQVDAAAAAAs4AtSEQCBEIEZBACoC1IRAlCBLQQAqAtiEQJSSIEZBACoC3IRAlJKUIDUgNkEAKgLohECUIDdBACoC5IRAlJKUkyGMAUEAIIwBvEGAgID8B3EEfSCMAQVDAAAAAAs4AuCEQCA1QQAqAuiEQEEAKgLghEBDAAAAQEEAKgLkhECUkpKUIDQgOUEAKgL0hECUIDdBACoC8IRAlJKUkyGNAUEAII0BvEGAgID8B3EEfSCNAQVDAAAAAAs4AuyEQCA0QQAqAvSEQEEAKgLshEBDAAAAQEEAKgLwhECUkpKUIDEgOkEAKgKAhUCUIDdBACoC/IRAlJKUkyGOAUEAII4BvEGAgID8B3EEfSCOAQVDAAAAAAs4AviEQEEAKgKEhUBBACoC2IAglCGPASCPAaghGyCPAY4hkAEgG0EBaiEcQQAgG0gEfyAbBUEACyEdQQAgHEgEfyAcBUEACyEeQfCDIEEAKAJMQYGABCAdSAR/QYGABAUgHQtrQf//B3FBAnRqKgIAIJABQwAAgD8gjwGTkpQgjwEgkAGTQfCDIEEAKAJMQYGABCAeSAR/QYGABAUgHgtrQf//B3FBAnRqKgIAlJIgVSBWQQAqApCFQJQgV0EAKgKMhUCUkpSTIZEBQQAgkQG8QYCAgPwHcQR9IJEBBUMAAAAACzgCiIVAIFUgU0EAKgKIhUCUIFhBACoCjIVAlJIgU0EAKgKQhUCUkpQgVCBZQQAqApyFQJQgV0EAKgKYhUCUkpSTIZIBQQAgkgG8QYCAgPwHcQR9IJIBBUMAAAAACzgClIVAIFQgU0EAKgKUhUCUIFhBACoCmIVAlJIgU0EAKgKchUCUkpQgUSBaQQAqAqiFQJQgV0EAKgKkhUCUkpSTIZMBQQAgkwG8QYCAgPwHcQR9IJMBBUMAAAAACzgCoIVAIFEgU0EAKgKghUCUIFhBACoCpIVAlJIgU0EAKgKohUCUkpQgSCBJQQAqArSFQJQgSkEAKgKwhUCUkpSTIZQBQQAglAG8QYCAgPwHcQR9IJQBBUMAAAAACzgCrIVAIEhBACoCtIVAQQAqAqyFQEMAAABAQQAqArCFQJSSkpQgRyBMQQAqAsCFQJQgSkEAKgK8hUCUkpSTIZUBQQAglQG8QYCAgPwHcQR9IJUBBUMAAAAACzgCuIVAIEdBACoCwIVAQQAqAriFQEMAAABAQQAqAryFQJSSkpQgRCBNQQAqAsyFQJQgSkEAKgLIhUCUkpSTIZYBQQAglgG8QYCAgPwHcQR9IJYBBUMAAAAACzgCxIVAIAcgCGogfEEAKgIQlCBfICtBACoCuIRAQQAqArCEQEMAAABAQQAqArSEQJSSkpQgQEEAKgKAhUBBACoC+IRAQwAAAEBBACoC/IRAlJKSlCB/IE5BACoCzIVAQQAqAsSFQEMAAABAQQAqAsiFQJSSkpSSkpKUkjgCAEEAQQAqAhA4AhRBAEEAKAJMQQFqNgJMQQBBACoC2IAgOALcgCBBAEEAKgLsgCA4AvCAIEEAQQAqAuiAIDgC7IAgQQBBACoCgIEgOAKEgSBBAEEAKgL8gCA4AoCBIEEAQQAqApCBIDgClIEgQQBBACoCjIEgOAKQgSBBAEEAKgKsgSA4ArCBIEEAQQAqAqiBIDgCrIEgQQBBACoCvIEgOALAgSBBAEEAKgK4gSA4AryBIEEAQQAqAsyBIDgC0IEgQQBBACoCyIEgOALMgSBBAEEAKgLwgSA4AvSBIEEAQQAqAuyBIDgC8IEgQQBBACoCgIIgOAKEgiBBAEEAKgL8gSA4AoCCIEEAQQAqAoyCIDgCkIIgQQBBACoCiIIgOAKMgiBBAEEAKgKogiA4AqyCIEEAQQAqAqSCIDgCqIIgQQBBACoCuIIgOAK8giBBAEEAKgK0giA4AriCIEEAQQAqAsiCIDgCzIIgQQBBACoCxIIgOALIgiBBAEEAKgLsgiA4AvCCIEEAQQAqAuiCIDgC7IIgQQBBACoC/IIgOAKAgyBBAEEAKgL4giA4AvyCIEEAQQAqAoiDIDgCjIMgQQBBACoChIMgOAKIgyBBAEEAKgKcgyA4AqCDIEEAQQAqApiDIDgCnIMgQQBBACoCrIMgOAKwgyBBAEEAKgKogyA4AqyDIEEAQQAqAryDIDgCwIMgQQBBACoCuIMgOAK8gyBBAEEAKgLUgyA4AtiDIEEAQQAqAtCDIDgC1IMgQQBBACoC5IMgOALogyBBAEEAKgLggyA4AuSDIEEAQQAqAviDQDgC/INAQQBBACoC9INAOAL4g0BBAEEAKgKEhEA4AoiEQEEAQQAqAoCEQDgChIRAQQBBACoCkIRAOAKUhEBBAEEAKgKMhEA4ApCEQEEAQQAqApyEQDgCoIRAQQBBACoCmIRAOAKchEBBAEEAKgKohEA4AqyEQEEAQQAqAqSEQDgCqIRAQQBBACoCtIRAOAK4hEBBAEEAKgKwhEA4ArSEQEEAQQAqAsCEQDgCxIRAQQBBACoCvIRAOALAhEBBAEEAKgLMhEA4AtCEQEEAQQAqAsiEQDgCzIRAQQBBACoC2IRAOALchEBBAEEAKgLUhEA4AtiEQEEAQQAqAuSEQDgC6IRAQQBBACoC4IRAOALkhEBBAEEAKgLwhEA4AvSEQEEAQQAqAuyEQDgC8IRAQQBBACoC/IRAOAKAhUBBAEEAKgL4hEA4AvyEQEEAQQAqAoyFQDgCkIVAQQBBACoCiIVAOAKMhUBBAEEAKgKYhUA4ApyFQEEAQQAqApSFQDgCmIVAQQBBACoCpIVAOAKohUBBAEEAKgKghUA4AqSFQEEAQQAqArCFQDgCtIVAQQBBACoCrIVAOAKwhUBBAEEAKgK8hUA4AsCFQEEAQQAqAriFQDgCvIVAQQBBACoCyIVAOALMhUBBAEEAKgLEhUA4AsiFQCAIQQRqIQggCEEEIAFsSARADAIMAQsLCwuFgICAAABBAg8LhYCAgAAAQQIPC4uAgIAAACAAIAFqKgIADwuIgICAAABBACgCAA8LjoCAgAAAIAAgARAFIAAgARAOC/yQgIAAASp/QQAhAUEAIQJBACEDQQAhBEEAIQVBACEGQQAhB0EAIQhBACEJQQAhCkEAIQtBACEMQQAhDUEAIQ5BACEPQQAhEEEAIRFBACESQQAhE0EAIRRBACEVQQAhFkEAIRdBACEYQQAhGUEAIRpBACEbQQAhHEEAIR1BACEeQQAhH0EAISBBACEhQQAhIkEAISNBACEkQQAhJUEAISZBACEnQQAhKEEAISlBACEqQQAhAQNAAkBBECABQQJ0akMAAAAAOAIAIAFBAWohASABQQJIBEAMAgwBCwsLQQBBADYCTEEAIQIDQAJAQdAAIAJBAnRqQwAAAAA4AgAgAkEBaiECIAJBgIAISARADAIMAQsLC0EAIQMDQAJAQdiAICADQQJ0akMAAAAAOAIAIANBAWohAyADQQJIBEAMAgwBCwsLQQAhBANAAkBB6IAgIARBAnRqQwAAAAA4AgAgBEEBaiEEIARBA0gEQAwCDAELCwtBACEFA0ACQEH8gCAgBUECdGpDAAAAADgCACAFQQFqIQUgBUEDSARADAIMAQsLC0EAIQYDQAJAQYyBICAGQQJ0akMAAAAAOAIAIAZBAWohBiAGQQNIBEAMAgwBCwsLQQAhBwNAAkBBqIEgIAdBAnRqQwAAAAA4AgAgB0EBaiEHIAdBA0gEQAwCDAELCwtBACEIA0ACQEG4gSAgCEECdGpDAAAAADgCACAIQQFqIQggCEEDSARADAIMAQsLC0EAIQkDQAJAQciBICAJQQJ0akMAAAAAOAIAIAlBAWohCSAJQQNIBEAMAgwBCwsLQQAhCgNAAkBB7IEgIApBAnRqQwAAAAA4AgAgCkEBaiEKIApBA0gEQAwCDAELCwtBACELA0ACQEH8gSAgC0ECdGpDAAAAADgCACALQQFqIQsgC0EDSARADAIMAQsLC0EAIQwDQAJAQYiCICAMQQJ0akMAAAAAOAIAIAxBAWohDCAMQQNIBEAMAgwBCwsLQQAhDQNAAkBBpIIgIA1BAnRqQwAAAAA4AgAgDUEBaiENIA1BA0gEQAwCDAELCwtBACEOA0ACQEG0giAgDkECdGpDAAAAADgCACAOQQFqIQ4gDkEDSARADAIMAQsLC0EAIQ8DQAJAQcSCICAPQQJ0akMAAAAAOAIAIA9BAWohDyAPQQNIBEAMAgwBCwsLQQAhEANAAkBB6IIgIBBBAnRqQwAAAAA4AgAgEEEBaiEQIBBBA0gEQAwCDAELCwtBACERA0ACQEH4giAgEUECdGpDAAAAADgCACARQQFqIREgEUEDSARADAIMAQsLC0EAIRIDQAJAQYSDICASQQJ0akMAAAAAOAIAIBJBAWohEiASQQNIBEAMAgwBCwsLQQAhEwNAAkBBmIMgIBNBAnRqQwAAAAA4AgAgE0EBaiETIBNBA0gEQAwCDAELCwtBACEUA0ACQEGogyAgFEECdGpDAAAAADgCACAUQQFqIRQgFEEDSARADAIMAQsLC0EAIRUDQAJAQbiDICAVQQJ0akMAAAAAOAIAIBVBAWohFSAVQQNIBEAMAgwBCwsLQQAhFgNAAkBB0IMgIBZBAnRqQwAAAAA4AgAgFkEBaiEWIBZBA0gEQAwCDAELCwtBACEXA0ACQEHggyAgF0ECdGpDAAAAADgCACAXQQFqIRcgF0EDSARADAIMAQsLC0EAIRgDQAJAQfCDICAYQQJ0akMAAAAAOAIAIBhBAWohGCAYQYCACEgEQAwCDAELCwtBACEZA0ACQEH0g8AAIBlBAnRqQwAAAAA4AgAgGUEBaiEZIBlBA0gEQAwCDAELCwtBACEaA0ACQEGAhMAAIBpBAnRqQwAAAAA4AgAgGkEBaiEaIBpBA0gEQAwCDAELCwtBACEbA0ACQEGMhMAAIBtBAnRqQwAAAAA4AgAgG0EBaiEbIBtBA0gEQAwCDAELCwtBACEcA0ACQEGYhMAAIBxBAnRqQwAAAAA4AgAgHEEBaiEcIBxBA0gEQAwCDAELCwtBACEdA0ACQEGkhMAAIB1BAnRqQwAAAAA4AgAgHUEBaiEdIB1BA0gEQAwCDAELCwtBACEeA0ACQEGwhMAAIB5BAnRqQwAAAAA4AgAgHkEBaiEeIB5BA0gEQAwCDAELCwtBACEfA0ACQEG8hMAAIB9BAnRqQwAAAAA4AgAgH0EBaiEfIB9BA0gEQAwCDAELCwtBACEgA0ACQEHIhMAAICBBAnRqQwAAAAA4AgAgIEEBaiEgICBBA0gEQAwCDAELCwtBACEhA0ACQEHUhMAAICFBAnRqQwAAAAA4AgAgIUEBaiEhICFBA0gEQAwCDAELCwtBACEiA0ACQEHghMAAICJBAnRqQwAAAAA4AgAgIkEBaiEiICJBA0gEQAwCDAELCwtBACEjA0ACQEHshMAAICNBAnRqQwAAAAA4AgAgI0EBaiEjICNBA0gEQAwCDAELCwtBACEkA0ACQEH4hMAAICRBAnRqQwAAAAA4AgAgJEEBaiEkICRBA0gEQAwCDAELCwtBACElA0ACQEGIhcAAICVBAnRqQwAAAAA4AgAgJUEBaiElICVBA0gEQAwCDAELCwtBACEmA0ACQEGUhcAAICZBAnRqQwAAAAA4AgAgJkEBaiEmICZBA0gEQAwCDAELCwtBACEnA0ACQEGghcAAICdBAnRqQwAAAAA4AgAgJ0EBaiEnICdBA0gEQAwCDAELCwtBACEoA0ACQEGshcAAIChBAnRqQwAAAAA4AgAgKEEBaiEoIChBA0gEQAwCDAELCwtBACEpA0ACQEG4hcAAIClBAnRqQwAAAAA4AgAgKUEBaiEpIClBA0gEQAwCDAELCwtBACEqA0ACQEHEhcAAICpBAnRqQwAAAAA4AgAgKkEBaiEqICpBA0gEQAwCDAELCwsLqYyAgAAAQQAgATYCAEEAQwCAO0hDAACAP0EAKAIAspeWOAIEQQBDAAAgQUEAKgIElTgCCEEAQ++2MEZBACoCBJUQBDgCGEEAQwAAgD9BACoCGJU4AhxBAEMAAIA/QQAqAhxD7oMEP5JBACoCGJVDAACAP5KVOAIgQQBDAACAP0EAKgIcQ/MEtT+SQQAqAhiVQwAAgD+SlTgCKEEAQwAAgD9BACoCHEPqRvc/kkEAKgIYlUMAAIA/kpU4AixBAEPvtrBFQQAqAgSVEAQ4AjBBAEMAAIA/QQAqAjCVOAI0QQBDAACAP0EAKgI0Q+6DBD+SQQAqAjCVQwAAgD+SlTgCOEEAQQAqAjBDAAAAQBACOAI8QQBDAACAP0EAKgI8lTgCQEEAQwAAgD9BACoCNEPzBLU/kkEAKgIwlUMAAIA/kpU4AkRBAEMAAIA/QQAqAjRD6kb3P5JBACoCMJVDAACAP5KVOAJIQQBDzcxMPkEAKgIElDgC0IAgQQBBACoCNEPqRve/kkEAKgIwlUMAAIA/kjgC4IAgQQBDAAAAQEMAAIA/QQAqAkCTlDgC5IAgQQBDAAAAAEMAAABAQQAqAjyVkzgC9IAgQQBBACoCNEPzBLW/kkEAKgIwlUMAAIA/kjgC+IAgQQBBACoCNEPugwS/kkEAKgIwlUMAAIA/kjgCiIEgQQBBACoCHEPqRve/kkEAKgIYlUMAAIA/kjgCmIEgQQBBACoCGEMAAABAEAI4ApyBIEEAQwAAgD9BACoCnIEglTgCoIEgQQBDAAAAQEMAAIA/QQAqAqCBIJOUOAKkgSBBAEEAKgIcQ/MEtb+SQQAqAhiVQwAAgD+SOAK0gSBBAEEAKgIcQ+6DBL+SQQAqAhiVQwAAgD+SOALEgSBBAENjFJ1GQQAqAgSVEAQ4AtSBIEEAQwAAgD9BACoC1IEglTgC2IEgQQBDAACAP0EAKgLYgSBD7oMEP5JBACoC1IEglUMAAIA/kpU4AtyBIEEAQwAAgD9BACoC2IEgQ/MEtT+SQQAqAtSBIJVDAACAP5KVOALggSBBAEMAAIA/QQAqAtiBIEPqRvc/kkEAKgLUgSCVQwAAgD+SlTgC5IEgQQBBACoC0IAgQ5qZmT6SkTgC6IEgQQBDAAAAAEMAAABAQQAqApyBIJWTOAL4gSBBAEEAKgLYgSBD6kb3v5JBACoC1IEglUMAAIA/kjgClIIgQQBBACoC1IEgQwAAAEAQAjgCmIIgQQBDAACAP0EAKgKYgiCVOAKcgiBBAEMAAABAQwAAgD9BACoCnIIgk5Q4AqCCIEEAQQAqAtiBIEPzBLW/kkEAKgLUgSCVQwAAgD+SOAKwgiBBAEEAKgLYgSBD7oMEv5JBACoC1IEglUMAAIA/kjgCwIIgQQBD2m91R0EAKgIElRAEOALQgiBBAEMAAIA/QQAqAtCCIJU4AtSCIEEAQwAAgD9BACoC1IIgQ+6DBD+SQQAqAtCCIJVDAACAP5KVOALYgiBBAEMAAIA/QQAqAtSCIEPzBLU/kkEAKgLQgiCVQwAAgD+SlTgC3IIgQQBDAACAP0EAKgLUgiBD6kb3P5JBACoC0IIglUMAAIA/kpU4AuCCIEEAQylcDz5BACoCBJQ4AuSCIEEAQwAAAABDAAAAQEEAKgKYgiCVkzgC9IIgQQBBACoC1IIgQ+pG97+SQQAqAtCCIJVDAACAP5I4ApCDIEEAQwAAAEBDAACAP0MAAIA/QQAqAtCCIEMAAABAEAKVk5Q4ApSDIEEAQQAqAtSCIEPzBLW/kkEAKgLQgiCVQwAAgD+SOAKkgyBBAEEAKgLUgiBD7oMEv5JBACoC0IIglUMAAIA/kjgCtIMgQQBDAACAP0EAKgI0QxXvQz+SQQAqAjCVQwAAgD+SlTgCxIMgQQBDAACAP0EAKgI0Q16D7D+SQQAqAjCVQwAAgD+SlTgCyIMgQQBBACoCNENeg+y/kkEAKgIwlUMAAIA/kjgCzIMgQQBBACoCNEMV70O/kkEAKgIwlUMAAIA/kjgC3IMgQQBD2w9JQEEAKgIElTgC7IMgQQBBACoC0IAgQwAAEEGSEAE4AvCDQEEAQ23nez5BACoCBJQQADgChIVAC5CAgIAAACAAIAEQDSAAEA8gABAMC6KAgIAAAEEAQwAAAAA4AgxBAEMAAAAAOAIkQQBDAAAAADgC1IAgC5CAgIAAACAAIAFIBH8gAQUgAAsPC5CAgIAAACAAIAFIBH8gAAUgAQsPC4yAgIAAACAAIAFqIAI4AgALC8uYgIAAAQBBAAvEGHsibmFtZSI6ICJTdGVyZW9FbmhhbmNlciIsImZpbGVuYW1lIjogIlN0ZXJlb0VuaGFuY2VyLmRzcCIsInZlcnNpb24iOiAiMi4yMC4xIiwiY29tcGlsZV9vcHRpb25zIjogIi1sYW5nIHdhc20taWIgLXNjYWwgLWZ0eiAyIiwiaW5jbHVkZV9wYXRobmFtZXMiOiBbIi91c3IvbG9jYWwvc2hhcmUvZmF1c3QiLCIvdXNyL2xvY2FsL3NoYXJlL2ZhdXN0IiwiL3Vzci9zaGFyZS9mYXVzdCIsIi4iLCIvdG1wL3Nlc3Npb25zLzI5NkVGRTkyNjMzMzZFRkU2MzJFRTI0MUJGN0FDNTk0QUI1NjhBQjIvd2ViL3dhcCJdLCJzaXplIjogMTA0OTI5NiwiaW5wdXRzIjogMiwib3V0cHV0cyI6IDIsIm1ldGEiOiBbIHsgImJhc2ljc19saWJfbmFtZSI6ICJGYXVzdCBCYXNpYyBFbGVtZW50IExpYnJhcnkiIH0seyAiYmFzaWNzX2xpYl92ZXJzaW9uIjogIjAuMSIgfSx7ICJjYXRlZ29yeSI6ICJNaXNjIiB9LHsgImNvbXBpbGF0aW9uX29wdGlvbnMiOiAiLXNpbmdsZSAtc2NhbCAtSSBsaWJyYXJpZXMvIC1JIHByb2plY3QvIC1sYW5nIHdhc20iIH0seyAiZGVsYXlzX2xpYl9uYW1lIjogIkZhdXN0IERlbGF5IExpYnJhcnkiIH0seyAiZGVsYXlzX2xpYl92ZXJzaW9uIjogIjAuMSIgfSx7ICJmaWxlbmFtZSI6ICJTdGVyZW9FbmhhbmNlci5kc3AiIH0seyAiZmlsdGVyc19saWJfZmlyX2F1dGhvciI6ICJKdWxpdXMgTy4gU21pdGggSUlJIiB9LHsgImZpbHRlcnNfbGliX2Zpcl9jb3B5cmlnaHQiOiAiQ29weXJpZ2h0IChDKSAyMDAzLTIwMTkgYnkgSnVsaXVzIE8uIFNtaXRoIElJSSA8am9zQGNjcm1hLnN0YW5mb3JkLmVkdT4iIH0seyAiZmlsdGVyc19saWJfZmlyX2xpY2Vuc2UiOiAiTUlULXN0eWxlIFNUSy00LjMgbGljZW5zZSIgfSx7ICJmaWx0ZXJzX2xpYl9oaWdocGFzc19hdXRob3IiOiAiSnVsaXVzIE8uIFNtaXRoIElJSSIgfSx7ICJmaWx0ZXJzX2xpYl9oaWdocGFzc19jb3B5cmlnaHQiOiAiQ29weXJpZ2h0IChDKSAyMDAzLTIwMTkgYnkgSnVsaXVzIE8uIFNtaXRoIElJSSA8am9zQGNjcm1hLnN0YW5mb3JkLmVkdT4iIH0seyAiZmlsdGVyc19saWJfaWlyX2F1dGhvciI6ICJKdWxpdXMgTy4gU21pdGggSUlJIiB9LHsgImZpbHRlcnNfbGliX2lpcl9jb3B5cmlnaHQiOiAiQ29weXJpZ2h0IChDKSAyMDAzLTIwMTkgYnkgSnVsaXVzIE8uIFNtaXRoIElJSSA8am9zQGNjcm1hLnN0YW5mb3JkLmVkdT4iIH0seyAiZmlsdGVyc19saWJfaWlyX2xpY2Vuc2UiOiAiTUlULXN0eWxlIFNUSy00LjMgbGljZW5zZSIgfSx7ICJmaWx0ZXJzX2xpYl9sb3dwYXNzMF9oaWdocGFzczEiOiAiQ29weXJpZ2h0IChDKSAyMDAzLTIwMTkgYnkgSnVsaXVzIE8uIFNtaXRoIElJSSA8am9zQGNjcm1hLnN0YW5mb3JkLmVkdT4iIH0seyAiZmlsdGVyc19saWJfbG93cGFzczBfaGlnaHBhc3MxX2F1dGhvciI6ICJKdWxpdXMgTy4gU21pdGggSUlJIiB9LHsgImZpbHRlcnNfbGliX2xvd3Bhc3NfYXV0aG9yIjogIkp1bGl1cyBPLiBTbWl0aCBJSUkiIH0seyAiZmlsdGVyc19saWJfbG93cGFzc19jb3B5cmlnaHQiOiAiQ29weXJpZ2h0IChDKSAyMDAzLTIwMTkgYnkgSnVsaXVzIE8uIFNtaXRoIElJSSA8am9zQGNjcm1hLnN0YW5mb3JkLmVkdT4iIH0seyAiZmlsdGVyc19saWJfbG93cGFzc19saWNlbnNlIjogIk1JVC1zdHlsZSBTVEstNC4zIGxpY2Vuc2UiIH0seyAiZmlsdGVyc19saWJfbmFtZSI6ICJGYXVzdCBGaWx0ZXJzIExpYnJhcnkiIH0seyAiZmlsdGVyc19saWJfdGYyX2F1dGhvciI6ICJKdWxpdXMgTy4gU21pdGggSUlJIiB9LHsgImZpbHRlcnNfbGliX3RmMl9jb3B5cmlnaHQiOiAiQ29weXJpZ2h0IChDKSAyMDAzLTIwMTkgYnkgSnVsaXVzIE8uIFNtaXRoIElJSSA8am9zQGNjcm1hLnN0YW5mb3JkLmVkdT4iIH0seyAiZmlsdGVyc19saWJfdGYyX2xpY2Vuc2UiOiAiTUlULXN0eWxlIFNUSy00LjMgbGljZW5zZSIgfSx7ICJmaWx0ZXJzX2xpYl90ZjJzX2F1dGhvciI6ICJKdWxpdXMgTy4gU21pdGggSUlJIiB9LHsgImZpbHRlcnNfbGliX3RmMnNfY29weXJpZ2h0IjogIkNvcHlyaWdodCAoQykgMjAwMy0yMDE5IGJ5IEp1bGl1cyBPLiBTbWl0aCBJSUkgPGpvc0BjY3JtYS5zdGFuZm9yZC5lZHU+IiB9LHsgImZpbHRlcnNfbGliX3RmMnNfbGljZW5zZSI6ICJNSVQtc3R5bGUgU1RLLTQuMyBsaWNlbnNlIiB9LHsgImlkIjogInBhbm9yYW1fZW5oYW5jZXIiIH0seyAibGlicmFyeV9wYXRoIjogIkZhdXN0RFNQIiB9LHsgIm1hdGhzX2xpYl9hdXRob3IiOiAiR1JBTUUiIH0seyAibWF0aHNfbGliX2NvcHlyaWdodCI6ICJHUkFNRSIgfSx7ICJtYXRoc19saWJfbGljZW5zZSI6ICJMR1BMIHdpdGggZXhjZXB0aW9uIiB9LHsgIm1hdGhzX2xpYl9uYW1lIjogIkZhdXN0IE1hdGggTGlicmFyeSIgfSx7ICJtYXRoc19saWJfdmVyc2lvbiI6ICIyLjEiIH0seyAibmFtZSI6ICJTdGVyZW9FbmhhbmNlciIgfSx7ICJzaG9ydG5hbWUiOiAiUGFub3JhbSIgfSx7ICJzaWduYWxzX2xpYl9uYW1lIjogIkZhdXN0IFNpZ25hbCBSb3V0aW5nIExpYnJhcnkiIH0seyAic2lnbmFsc19saWJfdmVyc2lvbiI6ICIwLjAiIH1dLCJ1aSI6IFsgeyJ0eXBlIjogInZncm91cCIsImxhYmVsIjogIlN0ZXJlb0VuaGFuY2VyIiwiaXRlbXMiOiBbIHsidHlwZSI6ICJoc2xpZGVyIiwibGFiZWwiOiAiRGVsYXkgd2lkdGgiLCJhZGRyZXNzIjogIi9TdGVyZW9FbmhhbmNlci9EZWxheV93aWR0aCIsImluZGV4IjogNTI0MzcyLCJtZXRhIjogW3sgIm5hbWUiOiAiRGVsYXkiIH0seyAic3R5bGUiOiAia25vYiIgfSx7ICJ0b29sdGlwIjogIkRlbGF5IFdpZHRoIiB9XSwiaW5pdCI6IDAsIm1pbiI6IDAsIm1heCI6IDEsInN0ZXAiOiAwLjAxfSx7InR5cGUiOiAiaHNsaWRlciIsImxhYmVsIjogIkZyZXF1ZW5jeSB3aWR0aCIsImFkZHJlc3MiOiAiL1N0ZXJlb0VuaGFuY2VyL0ZyZXF1ZW5jeV93aWR0aCIsImluZGV4IjogMzYsIm1ldGEiOiBbeyAibmFtZSI6ICJGcmVxdWVuY3kiIH0seyAic3R5bGUiOiAia25vYiIgfSx7ICJ0b29sdGlwIjogIkZyZXF1ZW5jeSBXaWR0aCIgfV0sImluaXQiOiAwLCJtaW4iOiAwLCJtYXgiOiAxLCJzdGVwIjogMC4wMX0seyJ0eXBlIjogImNoZWNrYm94IiwibGFiZWwiOiAiYnlwYXNzIiwiYWRkcmVzcyI6ICIvU3RlcmVvRW5oYW5jZXIvYnlwYXNzIiwiaW5kZXgiOiAxMn1dfV19"; }

/*
 faust2wasm: GRAME 2017-2019
*/

'use strict';

if (typeof (AudioWorkletNode) === "undefined") {
	alert("AudioWorklet is not supported in this browser !")
}

class StereoEnhancerNode extends AudioWorkletNode {

    constructor(context, baseURL, options)
    {
        super(context, 'StereoEnhancer', options);
        
        this.baseURL = baseURL;
        this.json = options.processorOptions.json;
        this.json_object = JSON.parse(this.json);
     
        // JSON parsing functions
        this.parse_ui = function(ui, obj)
        {
            for (var i = 0; i < ui.length; i++) {
                this.parse_group(ui[i], obj);
            }
        }

        this.parse_group = function(group, obj)
        {
            if (group.items) {
                this.parse_items(group.items, obj);
            }
        }

        this.parse_items = function(items, obj)
        {
            for (var i = 0; i < items.length; i++) {
            	this.parse_item(items[i], obj);
            }
        }

        this.parse_item = function(item, obj)
        {
            if (item.type === "vgroup"
                || item.type === "hgroup"
                || item.type === "tgroup") {
                this.parse_items(item.items, obj);
            } else if (item.type === "hbargraph"
                       || item.type === "vbargraph") {
                // Keep bargraph adresses
                obj.outputs_items.push(item.address);
            } else if (item.type === "vslider"
                       || item.type === "hslider"
                       || item.type === "button"
                       || item.type === "checkbox"
                       || item.type === "nentry") {
                // Keep inputs adresses
                obj.inputs_items.push(item.address);
                obj.descriptor.push(item);
                // Decode MIDI
                if (item.meta !== undefined) {
                    for (var i = 0; i < item.meta.length; i++) {
                        if (item.meta[i].midi !== undefined) {
                            if (item.meta[i].midi.trim() === "pitchwheel") {
                                obj.fPitchwheelLabel.push({ path:item.address,
                                      min:parseFloat(item.min),
                                      max:parseFloat(item.max) });
                            } else if (item.meta[i].midi.trim().split(" ")[0] === "ctrl") {
                                obj.fCtrlLabel[parseInt(item.meta[i].midi.trim().split(" ")[1])]
                                .push({ path:item.address,
                                      min:parseFloat(item.min),
                                      max:parseFloat(item.max) });
                            }
                        }
                    }
                }      
                // Define setXXX/getXXX, replacing '/c' with 'C' everywhere in the string
                var set_name = "set" + item.address;
                var get_name = "get" + item.address;
                set_name = set_name.replace(/\/./g, (x) => { return x.substr(1,1).toUpperCase(); });     
                get_name = get_name.replace(/\/./g, (x) => { return x.substr(1,1).toUpperCase(); });
                obj[set_name] = (val) => { obj.setParamValue(item.address, val); };
                obj[get_name] = () => { return obj.getParamValue(item.address); };
                //console.log(set_name);
                //console.log(get_name);
            }
        }

        this.output_handler = null;

        // input/output items
        this.inputs_items = [];
        this.outputs_items = [];
        this.descriptor = [];
        
        // MIDI
        this.fPitchwheelLabel = [];
        this.fCtrlLabel = new Array(128);
        for (var i = 0; i < this.fCtrlLabel.length; i++) { this.fCtrlLabel[i] = []; }

        // Parse UI
        this.parse_ui(this.json_object.ui, this);

        // Set message handler
        this.port.onmessage = this.handleMessage.bind(this);
    }

    // To be called by the message port with messages coming from the processor
    handleMessage(event)
    {
        var msg = event.data;
        if (this.output_handler) {
            this.output_handler(msg.path, msg.value);
        }
    }

    // Public API

    /**
     *  Returns a full JSON description of the DSP.
     */
    getJSON()
    {
        return this.json;
    }
    
    // For WAP
    async getMetadata() 
    {
        return new Promise(resolve => {
            let real_url = (this.baseURL === "") ? "main.json" : (this.baseURL + "/main.json");
            fetch(real_url).then(responseJSON => {
            	return responseJSON.json();
        	}).then(json => {
        		resolve(json);
        	})
    	});
    }

    /**
     *  Set the control value at a given path.
     *
     * @param path - a path to the control
     * @param val - the value to be set
     */
    setParamValue(path, val)
    {
        // Needed for sample accurate control
        this.parameters.get(path).setValueAtTime(val, 0);
    }
    
    // For WAP
    setParam(path, val)
    {
        // Needed for sample accurate control
        this.parameters.get(path).setValueAtTime(val, 0);
    }

    /**
     *  Get the control value at a given path.
     *
     * @return the current control value
     */
    getParamValue(path)
    {
        return this.parameters.get(path).value;
    }
    
    // For WAP
    getParam(path) 
    {
        return this.parameters.get(path).value;
    }

    /**
     * Setup a control output handler with a function of type (path, value)
     * to be used on each generated output value. This handler will be called
     * each audio cycle at the end of the 'compute' method.
     *
     * @param handler - a function of type function(path, value)
     */
    setOutputParamHandler(handler)
    {
        this.output_handler = handler;
    }

    /**
     * Get the current output handler.
     */
    getOutputParamHandler()
    {
        return this.output_handler;
    }

    getNumInputs()
    {
        return parseInt(this.json_object.inputs);
    }

    getNumOutputs()
    {
        return parseInt(this.json_object.outputs);
    }
    
    // For WAP
    inputChannelCount() 
    {
        return parseInt(this.json_object.inputs);
    }

    outputChannelCount() 
    {
        return parseInt(this.json_object.outputs);
    }

    /**
     * Returns an array of all input paths (to be used with setParamValue/getParamValue)
     */
    getParams()
    {
        return this.inputs_items;
    }
    
    // For WAP
    getDescriptor() 
    {
        var desc = {};
        for (const item in this.descriptor) {
            if (this.descriptor.hasOwnProperty(item)) {
                if (this.descriptor[item].label != "bypass") {
                    desc = Object.assign({ [this.descriptor[item].label]: { minValue: this.descriptor[item].min, maxValue: this.descriptor[item].max, defaultValue: this.descriptor[item].init } }, desc);
                }
            }
        }
        return desc;
    }

    /**
     * Control change
     *
     * @param channel - the MIDI channel (0..15, not used for now)
     * @param ctrl - the MIDI controller number (0..127)
     * @param value - the MIDI controller value (0..127)
     */
    ctrlChange(channel, ctrl, value)
    {
        if (this.fCtrlLabel[ctrl] !== []) {
            for (var i = 0; i < this.fCtrlLabel[ctrl].length; i++) {
                var path = this.fCtrlLabel[ctrl][i].path;
                this.setParamValue(path, StereoEnhancerNode.remap(value, 0, 127, this.fCtrlLabel[ctrl][i].min, this.fCtrlLabel[ctrl][i].max));
                if (this.output_handler) {
                    this.output_handler(path, this.getParamValue(path));
                }
            }
        }
    }

    /**
     * PitchWeel
     *
     * @param channel - the MIDI channel (0..15, not used for now)
     * @param value - the MIDI controller value (-1..1)
     */
    pitchWheel(channel, wheel)
    {
        for (var i = 0; i < this.fPitchwheelLabel.length; i++) {
            var pw = this.fPitchwheelLabel[i];
            this.setParamValue(pw.path, StereoEnhancerNode.remap(wheel, 0, 16383, pw.min, pw.max));
            if (this.output_handler) {
                this.output_handler(pw.path, this.getParamValue(pw.path));
            }
        }
    }

    /**
     * Generic MIDI message handler.
     */
    midiMessage(data)
    {
        var cmd = data[0] >> 4;
        var channel = data[0] & 0xf;
        var data1 = data[1];
        var data2 = data[2];
        
        if (channel === 9) {
            return;
        } else if (cmd === 11) {
            this.ctrlChange(channel, data1, data2);
        } else if (cmd === 14) {
            this.pitchWheel(channel, (data2 * 128.0 + data1));
        }
    }
    
    // For WAP
    onMidi(data) 
    {
     	midiMessage(data);
    }
    
    /**
     * @returns {Object} describes the path for each available param and its current value
     */
    async getState() 
    {
        var params = new Object();
        for (let i = 0; i < this.getParams().length; i++) {
            Object.assign(params, { [this.getParams()[i]]: `${this.getParam(this.getParams()[i])}` });
        }
        return new Promise(resolve => { resolve(params) });
    }

    /**
     * Sets each params with the value indicated in the state object
     * @param {Object} state 
     */
    async setState(state) 
    {
        return new Promise(resolve => {
            for (const param in state) {
                if (state.hasOwnProperty(param)) this.setParam(param, state[param]);
            }
            try {
                this.gui.setAttribute('state', JSON.stringify(state));
            } catch (error) {
                console.warn("Plugin without gui or GUI not defined", error);
            }
            resolve(state);
        })
    }
    
    /**
     * A different call closer to the preset management
     * @param {Object} patch to assign as a preset to the node
     */
    setPatch(patch) 
    {
        this.setState(this.presets[patch])
    }
    
    static remap(v, mn0, mx0, mn1, mx1)
    {
        return (1.0 * (v - mn0) / (mx0 - mn0)) * (mx1 - mn1) + mn1;
    }
    
}

// Factory class
class StereoEnhancer {

    /**
     * Factory constructor.
     *
     * @param context - the audio context
     * @param baseURL - the baseURL of the plugin folder
     */
    constructor(context, baseURL = "")
    {
    	console.log("baseLatency " + context.baseLatency);
    	console.log("outputLatency " + context.outputLatency);
    	console.log("sampleRate " + context.sampleRate);
    	
        this.context = context;
        this.baseURL = baseURL;
        this.pathTable = [];
    }

    heap2Str(buf)
    {
        let str = "";
        let i = 0;
        while (buf[i] !== 0) {
            str += String.fromCharCode(buf[i++]);
        }
        return str;
    }
    
    /**
     * Load additionnal resources to prepare the custom AudioWorkletNode. Returns a promise to be used with the created node.
     */
    async load()
    {
        try {
            const importObject = {
                env: {
                    memoryBase: 0,
                    tableBase: 0,
                    _abs: Math.abs,
                        
                    // Float version
                    _acosf: Math.acos,
                    _asinf: Math.asin,
                    _atanf: Math.atan,
                    _atan2f: Math.atan2,
                    _ceilf: Math.ceil,
                    _cosf: Math.cos,
                    _expf: Math.exp,
                    _floorf: Math.floor,
                    _fmodf: (x, y) => x % y,
                    _logf: Math.log,
                    _log10f: Math.log10,
                    _max_f: Math.max,
                    _min_f: Math.min,
                    _remainderf: (x, y) => x - Math.round(x / y) * y,
                    _powf: Math.pow,
                    _roundf: Math.fround,
                    _sinf: Math.sin,
                    _sqrtf: Math.sqrt,
                    _tanf: Math.tan,
                    _acoshf: Math.acosh,
                    _asinhf: Math.asinh,
                    _atanhf: Math.atanh,
                    _coshf: Math.cosh,
                    _sinhf: Math.sinh,
                    _tanhf: Math.tanh,
                        
                    // Double version
                    _acos: Math.acos,
                    _asin: Math.asin,
                    _atan: Math.atan,
                    _atan2: Math.atan2,
                    _ceil: Math.ceil,
                    _cos: Math.cos,
                    _exp: Math.exp,
                    _floor: Math.floor,
                    _fmod: (x, y) => x % y,
                    _log: Math.log,
                    _log10: Math.log10,
                    _max_: Math.max,
                    _min_: Math.min,
                    _remainder: (x, y) => x - Math.round(x / y) * y,
                    _pow: Math.pow,
                    _round: Math.fround,
                    _sin: Math.sin,
                    _sqrt: Math.sqrt,
                    _tan: Math.tan,
                    _acosh: Math.acosh,
                    _asinh: Math.asinh,
                    _atanh: Math.atanh,
                    _cosh: Math.cosh,
                    _sinh: Math.sinh,
                    _tanh: Math.tanh,
                    
                    table: new WebAssembly.Table({ initial: 0, element: "anyfunc" })
                }
            };

            let real_url = (this.baseURL === "") ? "StereoEnhancer.wasm" : (this.baseURL + "/StereoEnhancer.wasm");
            const dspFile = await fetch(real_url);
            const dspBuffer = await dspFile.arrayBuffer();
            const dspModule = await WebAssembly.compile(dspBuffer);
            const dspInstance = await WebAssembly.instantiate(dspModule, importObject);
            
            return new Promise((resolve, reject) => {   
            
                let HEAPU8 = new Uint8Array(dspInstance.exports.memory.buffer);
                let json = this.heap2Str(HEAPU8);
                let json_object = JSON.parse(json);  
                let options = { wasm_module: dspModule, json: json };
                
                let re = /JSON_STR/g;
                let StereoEnhancerProcessorString1 = StereoEnhancerProcessorString.replace(re, json);
                let real_url = window.URL.createObjectURL(new Blob([StereoEnhancerProcessorString1], { type: 'text/javascript' }));
                
                this.context.audioWorklet.addModule(real_url).then(() => {
                    this.node = new StereoEnhancerNode(this.context, this.baseURL, 
                                        { numberOfInputs: (parseInt(json_object.inputs) > 0) ? 1 : 0,
                                        numberOfOutputs: (parseInt(json_object.outputs) > 0) ? 1 : 0,
                                        channelCount: Math.max(1, parseInt(json_object.inputs)),
                                        outputChannelCount: [parseInt(json_object.outputs)],
                                        channelCountMode: "explicit",
                                        channelInterpretation: "speakers",
                                        processorOptions: options });
                    this.node.onprocessorerror = () => { console.log('An error from StereoEnhancer-processor was detected.');}
                    return (this.node);
                }).then((node) => {
                    resolve(node);
                }).catch((e) => {
                    reject(e);
                });
            });
            
        } catch (e) {
            this.error(e);
            this.error("Faust " + this.name + " cannot be loaded or compiled");
            return null;
        }
    	
    }
    
    async loadGui()
    {
        return new Promise((resolve, reject) => {
            try {
                // DO THIS ONLY ONCE. If another instance has already been added, do not add the html file again
                let real_url = (this.baseURL === "") ? "main.html" : (this.baseURL + "/main.html");
                if (!this.linkExists(real_url)) {
                    // LINK DOES NOT EXIST, let's add it to the document
                    var link = document.createElement('link');
                    link.rel = 'import';
                    link.href = real_url;
                    document.head.appendChild(link);
                    link.onload = (e) => {
                        // the file has been loaded, instanciate GUI
                        // and get back the HTML elem
                        // HERE WE COULD REMOVE THE HARD CODED NAME
                        var element = createStereoEnhancerGUI(this.node);
                        resolve(element);
                    }
                } else {
                    // LINK EXIST, WE AT LEAST CREATED ONE INSTANCE PREVIOUSLY
                    // so we can create another instance
                    var element = createStereoEnhancerGUI(this.node);
                    resolve(element);
                }
            } catch (e) {
                console.log(e);
                reject(e);
            }
        });
    };

	linkExists(url) 
	{
    	return document.querySelectorAll(`link[href="${url}"]`).length > 0;
   	}

}

// Template string for AudioWorkletProcessor

let StereoEnhancerProcessorString = `

    'use strict';

    // Monophonic Faust DSP
    class StereoEnhancerProcessor extends AudioWorkletProcessor {
        
        // JSON parsing functions
        static parse_ui(ui, obj, callback)
        {
            for (var i = 0; i < ui.length; i++) {
                StereoEnhancerProcessor.parse_group(ui[i], obj, callback);
            }
        }
        
        static parse_group(group, obj, callback)
        {
            if (group.items) {
                StereoEnhancerProcessor.parse_items(group.items, obj, callback);
            }
        }
        
        static parse_items(items, obj, callback)
        {
            for (var i = 0; i < items.length; i++) {
                callback(items[i], obj, callback);
            }
        }
        
        static parse_item1(item, obj, callback)
        {
            if (item.type === "vgroup"
                || item.type === "hgroup"
                || item.type === "tgroup") {
                StereoEnhancerProcessor.parse_items(item.items, obj, callback);
            } else if (item.type === "hbargraph"
                       || item.type === "vbargraph") {
                // Nothing
            } else if (item.type === "vslider"
                       || item.type === "hslider"
                       || item.type === "button"
                       || item.type === "checkbox"
                       || item.type === "nentry") {
                obj.push({ name: item.address,
                         defaultValue: item.init,
                         minValue: item.min,
                         maxValue: item.max });
            }
        }
        
        static parse_item2(item, obj, callback)
        {
            if (item.type === "vgroup"
                || item.type === "hgroup"
                || item.type === "tgroup") {
                StereoEnhancerProcessor.parse_items(item.items, obj, callback);
            } else if (item.type === "hbargraph"
                       || item.type === "vbargraph") {
                // Keep bargraph adresses
                obj.outputs_items.push(item.address);
                obj.pathTable[item.address] = parseInt(item.index);
            } else if (item.type === "vslider"
                       || item.type === "hslider"
                       || item.type === "button"
                       || item.type === "checkbox"
                       || item.type === "nentry") {
                // Keep inputs adresses
                obj.inputs_items.push(item.address);
                obj.pathTable[item.address] = parseInt(item.index);
            }
        }
     
        static get parameterDescriptors() 
        {
            // Analyse JSON to generate AudioParam parameters
            var params = [];
            StereoEnhancerProcessor.parse_ui(JSON.parse(\`JSON_STR\`).ui, params, StereoEnhancerProcessor.parse_item1);
            return params;
        }
       
        constructor(options)
        {
            super(options);
            
            const importObject = {
                    env: {
                        memoryBase: 0,
                        tableBase: 0,

                        // Integer version
                        _abs: Math.abs,

                        // Float version
                        _acosf: Math.acos,
                        _asinf: Math.asin,
                        _atanf: Math.atan,
                        _atan2f: Math.atan2,
                        _ceilf: Math.ceil,
                        _cosf: Math.cos,
                        _expf: Math.exp,
                        _floorf: Math.floor,
                        _fmodf: function(x, y) { return x % y; },
                        _logf: Math.log,
                        _log10f: Math.log10,
                        _max_f: Math.max,
                        _min_f: Math.min,
                        _remainderf: function(x, y) { return x - Math.round(x/y) * y; },
                        _powf: Math.pow,
                        _roundf: Math.fround,
                        _sinf: Math.sin,
                        _sqrtf: Math.sqrt,
                        _tanf: Math.tan,
                        _acoshf: Math.acosh,
                        _asinhf: Math.asinh,
                        _atanhf: Math.atanh,
                        _coshf: Math.cosh,
                        _sinhf: Math.sinh,
                        _tanhf: Math.tanh,

                        // Double version
                        _acos: Math.acos,
                        _asin: Math.asin,
                        _atan: Math.atan,
                        _atan2: Math.atan2,
                        _ceil: Math.ceil,
                        _cos: Math.cos,
                        _exp: Math.exp,
                        _floor: Math.floor,
                        _fmod: function(x, y) { return x % y; },
                        _log: Math.log,
                        _log10: Math.log10,
                        _max_: Math.max,
                        _min_: Math.min,
                        _remainder:function(x, y) { return x - Math.round(x/y) * y; },
                        _pow: Math.pow,
                        _round: Math.fround,
                        _sin: Math.sin,
                        _sqrt: Math.sqrt,
                        _tan: Math.tan,
                        _acosh: Math.acosh,
                        _asinh: Math.asinh,
                        _atanh: Math.atanh,
                        _cosh: Math.cosh,
                        _sinh: Math.sinh,
                        _tanh: Math.tanh,

                        table: new WebAssembly.Table({ initial: 0, element: 'anyfunc' })
                    }
            };
            
            this.StereoEnhancer_instance = new WebAssembly.Instance(options.processorOptions.wasm_module, importObject);
            this.json_object = JSON.parse(options.processorOptions.json);
         
            this.output_handler = function(path, value) { this.port.postMessage({ path: path, value: value }); };
            
            this.ins = null;
            this.outs = null;

            this.dspInChannnels = [];
            this.dspOutChannnels = [];

            this.numIn = parseInt(this.json_object.inputs);
            this.numOut = parseInt(this.json_object.outputs);

            // Memory allocator
            this.ptr_size = 4;
            this.sample_size = 4;
            this.integer_size = 4;
            
            this.factory = this.StereoEnhancer_instance.exports;
            this.HEAP = this.StereoEnhancer_instance.exports.memory.buffer;
            this.HEAP32 = new Int32Array(this.HEAP);
            this.HEAPF32 = new Float32Array(this.HEAP);

            //console.log(this.HEAP);
            //console.log(this.HEAP32);
            //console.log(this.HEAPF32);

            // bargraph
            this.outputs_timer = 5;
            this.outputs_items = [];

            // input items
            this.inputs_items = [];
        
            // Start of HEAP index

            // DSP is placed first with index 0. Audio buffer start at the end of DSP.
            this.audio_heap_ptr = parseInt(this.json_object.size);

            // Setup pointers offset
            this.audio_heap_ptr_inputs = this.audio_heap_ptr;
            this.audio_heap_ptr_outputs = this.audio_heap_ptr_inputs + (this.numIn * this.ptr_size);

            // Setup buffer offset
            this.audio_heap_inputs = this.audio_heap_ptr_outputs + (this.numOut * this.ptr_size);
            this.audio_heap_outputs = this.audio_heap_inputs + (this.numIn * NUM_FRAMES * this.sample_size);
            
            // Start of DSP memory : DSP is placed first with index 0
            this.dsp = 0;

            this.pathTable = [];
         
            // Send output values to the AudioNode
            this.update_outputs = function ()
            {
                if (this.outputs_items.length > 0 && this.output_handler && this.outputs_timer-- === 0) {
                    this.outputs_timer = 5;
                    for (var i = 0; i < this.outputs_items.length; i++) {
                        this.output_handler(this.outputs_items[i], this.HEAPF32[this.pathTable[this.outputs_items[i]] >> 2]);
                    }
                }
            }
            
            this.initAux = function ()
            {
                var i;
                
                if (this.numIn > 0) {
                    this.ins = this.audio_heap_ptr_inputs;
                    for (i = 0; i < this.numIn; i++) {
                        this.HEAP32[(this.ins >> 2) + i] = this.audio_heap_inputs + ((NUM_FRAMES * this.sample_size) * i);
                    }
                    
                    // Prepare Ins buffer tables
                    var dspInChans = this.HEAP32.subarray(this.ins >> 2, (this.ins + this.numIn * this.ptr_size) >> 2);
                    for (i = 0; i < this.numIn; i++) {
                        this.dspInChannnels[i] = this.HEAPF32.subarray(dspInChans[i] >> 2, (dspInChans[i] + NUM_FRAMES * this.sample_size) >> 2);
                    }
                }
                
                if (this.numOut > 0) {
                    this.outs = this.audio_heap_ptr_outputs;
                    for (i = 0; i < this.numOut; i++) {
                        this.HEAP32[(this.outs >> 2) + i] = this.audio_heap_outputs + ((NUM_FRAMES * this.sample_size) * i);
                    }
                    
                    // Prepare Out buffer tables
                    var dspOutChans = this.HEAP32.subarray(this.outs >> 2, (this.outs + this.numOut * this.ptr_size) >> 2);
                    for (i = 0; i < this.numOut; i++) {
                        this.dspOutChannnels[i] = this.HEAPF32.subarray(dspOutChans[i] >> 2, (dspOutChans[i] + NUM_FRAMES * this.sample_size) >> 2);
                    }
                }
                
                // Parse UI
                StereoEnhancerProcessor.parse_ui(this.json_object.ui, this, StereoEnhancerProcessor.parse_item2);
                
                // Init DSP
                this.factory.init(this.dsp, sampleRate); // 'sampleRate' is defined in AudioWorkletGlobalScope  
            }

            this.setParamValue = function (path, val)
            {
                this.HEAPF32[this.pathTable[path]] = val;
            }

            this.getParamValue = function (path)
            {
                return this.HEAPF32[this.pathTable[path]];
            }

            // Init resulting DSP
            this.initAux();
            
            console.log(this);
        }
        
        process(inputs, outputs, parameters) 
        {
            var input = inputs[0];
            var output = outputs[0];
            
            // Check inputs
            if (this.numIn > 0 && ((input === undefined) || (input[0].length === 0))) {
                //console.log("Process input error");
                return true;
            }
            // Check outputs
            if (this.numOut > 0 && ((output === undefined) || (output[0].length === 0))) {
                //console.log("Process output error");
                return true;
            }
            
            // Copy inputs
            if (input !== undefined) {
                for (var chan = 0; chan < Math.min(this.numIn, input.length) ; ++chan) {
                    var dspInput = this.dspInChannnels[chan];
                    dspInput.set(input[chan]);
                }
            }
            
            /*
            TODO: sample accurate control change is not yet handled
            When no automation occurs, params[i][1] has a length of 1,
            otherwise params[i][1] has a length of NUM_FRAMES with possible control change each sample
            */
            
            // Update controls
            var params = Object.entries(parameters);
            for (var i = 0; i < params.length; i++) {
                this.HEAPF32[this.pathTable[params[i][0]] >> 2] = params[i][1][0];
            }
            
          	// Compute
            try {
                this.factory.compute(this.dsp, NUM_FRAMES, this.ins, this.outs);
            } catch(e) {
                console.log("ERROR in compute (" + e + ")");
            }
            
            // Update bargraph
            this.update_outputs();
            
            // Copy outputs
            if (output !== undefined) {
                for (var chan = 0; chan < Math.min(this.numOut, output.length); ++chan) {
                    var dspOutput = this.dspOutChannnels[chan];
                    output[chan].set(dspOutput);
                }
            }
            
            return true;
        }
    }

    // Globals
    const NUM_FRAMES = 128;
    try {
        registerProcessor('StereoEnhancer', StereoEnhancerProcessor);
    } catch (error) {
        console.warn(error);
    }
`;

// WAP factory or npm package module
if (typeof module === "undefined") {
    window.StereoEnhancer = StereoEnhancer;
    window.FaustStereoEnhancer = StereoEnhancer;
} else {
    module.exports = { StereoEnhancer };
}
