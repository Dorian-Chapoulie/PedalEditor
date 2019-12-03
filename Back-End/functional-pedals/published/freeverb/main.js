
/*
Code generated with Faust version 2.20.1
Compilation options: -lang wasm-ib -scal -ftz 2
*/

function getJSONfreeverb() {
	return '{"name": "freeverb","filename": "freeverb.dsp","version": "2.20.1","compile_options": "-lang wasm-ib -scal -ftz 2","include_pathnames": ["/usr/local/share/faust","/usr/local/share/faust","/usr/share/faust",".","/tmp/sessions/82C0F79568A18AD65B08B93F3913E1AE02BF06CD/web/wap"],"size": 586168,"inputs": 2,"outputs": 2,"meta": [ { "author": "RM" },{ "basics_lib_name": "Faust Basic Element Library" },{ "basics_lib_version": "0.1" },{ "compilation_options": "-single -scal -I libraries/ -I project/ -lang wasm" },{ "delays_lib_name": "Faust Delay Library" },{ "delays_lib_version": "0.1" },{ "description": "Freeverb demo application." },{ "filename": "freeverb.dsp" },{ "filters_lib_allpass_comb_author": "Julius O. Smith III" },{ "filters_lib_allpass_comb_copyright": "Copyright (C) 2003-2019 by Julius O. Smith III <jos@ccrma.stanford.edu>" },{ "filters_lib_allpass_comb_license": "MIT-style STK-4.3 license" },{ "filters_lib_lowpass0_highpass1": "Copyright (C) 2003-2019 by Julius O. Smith III <jos@ccrma.stanford.edu>" },{ "filters_lib_name": "Faust Filters Library" },{ "library_path": "FaustDSP" },{ "maths_lib_author": "GRAME" },{ "maths_lib_copyright": "GRAME" },{ "maths_lib_license": "LGPL with exception" },{ "maths_lib_name": "Faust Math Library" },{ "maths_lib_version": "2.1" },{ "name": "freeverb" },{ "reverbs_lib_name": "Faust Reverb Library" },{ "reverbs_lib_version": "0.0" },{ "version": "0.0" }],"ui": [ {"type": "vgroup","label": "freeverb","items": [ {"type": "hgroup","label": "Freeverb","items": [ {"type": "vgroup","label": "0x00","meta": [{ "0": "" }],"items": [ {"type": "vslider","label": "Damp","address": "/freeverb/Freeverb/0x00/Damp","index": 36,"meta": [{ "0": "" },{ "style": "knob" },{ "tooltip": "Somehow control the   density of the reverb." }],"init": 0.5,"min": 0,"max": 1,"step": 0.025},{"type": "vslider","label": "RoomSize","address": "/freeverb/Freeverb/0x00/RoomSize","index": 28,"meta": [{ "1": "" },{ "style": "knob" },{ "tooltip": "The room size   between 0 and 1 with 1 for the largest room." }],"init": 0.5,"min": 0,"max": 1,"step": 0.025},{"type": "vslider","label": "Stereo Spread","address": "/freeverb/Freeverb/0x00/Stereo_Spread","index": 323868,"meta": [{ "2": "" },{ "style": "knob" },{ "tooltip": "Spatial   spread between 0 and 1 with 1 for maximum spread." }],"init": 0.5,"min": 0,"max": 1,"step": 0.01}]},{"type": "vslider","label": "Wet","address": "/freeverb/Freeverb/Wet","index": 48,"meta": [{ "1": "" },{ "tooltip": "The amount of reverb applied to the signal   between 0 and 1 with 1 for the maximum amount of reverb." }],"init": 0.3333,"min": 0,"max": 1,"step": 0.025}]},{"type": "checkbox","label": "bypass","address": "/freeverb/bypass","index": 12}]}]}';
}
function getBase64Codefreeverb() { return "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b3V0cHV0cyI6IDIsIm1ldGEiOiBbIHsgImF1dGhvciI6ICJSTSIgfSx7ICJiYXNpY3NfbGliX25hbWUiOiAiRmF1c3QgQmFzaWMgRWxlbWVudCBMaWJyYXJ5IiB9LHsgImJhc2ljc19saWJfdmVyc2lvbiI6ICIwLjEiIH0seyAiY29tcGlsYXRpb25fb3B0aW9ucyI6ICItc2luZ2xlIC1zY2FsIC1JIGxpYnJhcmllcy8gLUkgcHJvamVjdC8gLWxhbmcgd2FzbSIgfSx7ICJkZWxheXNfbGliX25hbWUiOiAiRmF1c3QgRGVsYXkgTGlicmFyeSIgfSx7ICJkZWxheXNfbGliX3ZlcnNpb24iOiAiMC4xIiB9LHsgImRlc2NyaXB0aW9uIjogIkZyZWV2ZXJiIGRlbW8gYXBwbGljYXRpb24uIiB9LHsgImZpbGVuYW1lIjogImZyZWV2ZXJiLmRzcCIgfSx7ICJmaWx0ZXJzX2xpYl9hbGxwYXNzX2NvbWJfYXV0aG9yIjogIkp1bGl1cyBPLiBTbWl0aCBJSUkiIH0seyAiZmlsdGVyc19saWJfYWxscGFzc19jb21iX2NvcHlyaWdodCI6ICJDb3B5cmlnaHQgKEMpIDIwMDMtMjAxOSBieSBKdWxpdXMgTy4gU21pdGggSUlJIDxqb3NAY2NybWEuc3RhbmZvcmQuZWR1PiIgfSx7ICJmaWx0ZXJzX2xpYl9hbGxwYXNzX2NvbWJfbGljZW5zZSI6ICJNSVQtc3R5bGUgU1RLLTQuMyBsaWNlbnNlIiB9LHsgImZpbHRlcnNfbGliX2xvd3Bhc3MwX2hpZ2hwYXNzMSI6ICJDb3B5cmlnaHQgKEMpIDIwMDMtMjAxOSBieSBKdWxpdXMgTy4gU21pdGggSUlJIDxqb3NAY2NybWEuc3RhbmZvcmQuZWR1PiIgfSx7ICJmaWx0ZXJzX2xpYl9uYW1lIjogIkZhdXN0IEZpbHRlcnMgTGlicmFyeSIgfSx7ICJsaWJyYXJ5X3BhdGgiOiAiRmF1c3REU1AiIH0seyAibWF0aHNfbGliX2F1dGhvciI6ICJHUkFNRSIgfSx7ICJtYXRoc19saWJfY29weXJpZ2h0IjogIkdSQU1FIiB9LHsgIm1hdGhzX2xpYl9saWNlbnNlIjogIkxHUEwgd2l0aCBleGNlcHRpb24iIH0seyAibWF0aHNfbGliX25hbWUiOiAiRmF1c3QgTWF0aCBMaWJyYXJ5IiB9LHsgIm1hdGhzX2xpYl92ZXJzaW9uIjogIjIuMSIgfSx7ICJuYW1lIjogImZyZWV2ZXJiIiB9LHsgInJldmVyYnNfbGliX25hbWUiOiAiRmF1c3QgUmV2ZXJiIExpYnJhcnkiIH0seyAicmV2ZXJic19saWJfdmVyc2lvbiI6ICIwLjAiIH0seyAidmVyc2lvbiI6ICIwLjAiIH1dLCJ1aSI6IFsgeyJ0eXBlIjogInZncm91cCIsImxhYmVsIjogImZyZWV2ZXJiIiwiaXRlbXMiOiBbIHsidHlwZSI6ICJoZ3JvdXAiLCJsYWJlbCI6ICJGcmVldmVyYiIsIml0ZW1zIjogWyB7InR5cGUiOiAidmdyb3VwIiwibGFiZWwiOiAiMHgwMCIsIm1ldGEiOiBbeyAiMCI6ICIiIH1dLCJpdGVtcyI6IFsgeyJ0eXBlIjogInZzbGlkZXIiLCJsYWJlbCI6ICJEYW1wIiwiYWRkcmVzcyI6ICIvZnJlZXZlcmIvRnJlZXZlcmIvMHgwMC9EYW1wIiwiaW5kZXgiOiAzNiwibWV0YSI6IFt7ICIwIjogIiIgfSx7ICJzdHlsZSI6ICJrbm9iIiB9LHsgInRvb2x0aXAiOiAiU29tZWhvdyBjb250cm9sIHRoZSAgIGRlbnNpdHkgb2YgdGhlIHJldmVyYi4iIH1dLCJpbml0IjogMC41LCJtaW4iOiAwLCJtYXgiOiAxLCJzdGVwIjogMC4wMjV9LHsidHlwZSI6ICJ2c2xpZGVyIiwibGFiZWwiOiAiUm9vbVNpemUiLCJhZGRyZXNzIjogIi9mcmVldmVyYi9GcmVldmVyYi8weDAwL1Jvb21TaXplIiwiaW5kZXgiOiAyOCwibWV0YSI6IFt7ICIxIjogIiIgfSx7ICJzdHlsZSI6ICJrbm9iIiB9LHsgInRvb2x0aXAiOiAiVGhlIHJvb20gc2l6ZSAgIGJldHdlZW4gMCBhbmQgMSB3aXRoIDEgZm9yIHRoZSBsYXJnZXN0IHJvb20uIiB9XSwiaW5pdCI6IDAuNSwibWluIjogMCwibWF4IjogMSwic3RlcCI6IDAuMDI1fSx7InR5cGUiOiAidnNsaWRlciIsImxhYmVsIjogIlN0ZXJlbyBTcHJlYWQiLCJhZGRyZXNzIjogIi9mcmVldmVyYi9GcmVldmVyYi8weDAwL1N0ZXJlb19TcHJlYWQiLCJpbmRleCI6IDMyMzg2OCwibWV0YSI6IFt7ICIyIjogIiIgfSx7ICJzdHlsZSI6ICJrbm9iIiB9LHsgInRvb2x0aXAiOiAiU3BhdGlhbCAgIHNwcmVhZCBiZXR3ZWVuIDAgYW5kIDEgd2l0aCAxIGZvciBtYXhpbXVtIHNwcmVhZC4iIH1dLCJpbml0IjogMC41LCJtaW4iOiAwLCJtYXgiOiAxLCJzdGVwIjogMC4wMX1dfSx7InR5cGUiOiAidnNsaWRlciIsImxhYmVsIjogIldldCIsImFkZHJlc3MiOiAiL2ZyZWV2ZXJiL0ZyZWV2ZXJiL1dldCIsImluZGV4IjogNDgsIm1ldGEiOiBbeyAiMSI6ICIiIH0seyAidG9vbHRpcCI6ICJUaGUgYW1vdW50IG9mIHJldmVyYiBhcHBsaWVkIHRvIHRoZSBzaWduYWwgICBiZXR3ZWVuIDAgYW5kIDEgd2l0aCAxIGZvciB0aGUgbWF4aW11bSBhbW91bnQgb2YgcmV2ZXJiLiIgfV0sImluaXQiOiAwLjMzMzMsIm1pbiI6IDAsIm1heCI6IDEsInN0ZXAiOiAwLjAyNX1dfSx7InR5cGUiOiAiY2hlY2tib3giLCJsYWJlbCI6ICJieXBhc3MiLCJhZGRyZXNzIjogIi9mcmVldmVyYi9ieXBhc3MiLCJpbmRleCI6IDEyfV19XX0="; }

/*
 faust2wasm: GRAME 2017-2019
*/

'use strict';

if (typeof (AudioWorkletNode) === "undefined") {
	alert("AudioWorklet is not supported in this browser !")
}

class freeverbNode extends AudioWorkletNode {

    constructor(context, baseURL, options)
    {
        super(context, 'freeverb', options);
        
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
                this.setParamValue(path, freeverbNode.remap(value, 0, 127, this.fCtrlLabel[ctrl][i].min, this.fCtrlLabel[ctrl][i].max));
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
            this.setParamValue(pw.path, freeverbNode.remap(wheel, 0, 16383, pw.min, pw.max));
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
class freeverb {

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

            let real_url = (this.baseURL === "") ? "freeverb.wasm" : (this.baseURL + "/freeverb.wasm");
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
                let freeverbProcessorString1 = freeverbProcessorString.replace(re, json);
                let real_url = window.URL.createObjectURL(new Blob([freeverbProcessorString1], { type: 'text/javascript' }));
                
                this.context.audioWorklet.addModule(real_url).then(() => {
                    this.node = new freeverbNode(this.context, this.baseURL, 
                                        { numberOfInputs: (parseInt(json_object.inputs) > 0) ? 1 : 0,
                                        numberOfOutputs: (parseInt(json_object.outputs) > 0) ? 1 : 0,
                                        channelCount: Math.max(1, parseInt(json_object.inputs)),
                                        outputChannelCount: [parseInt(json_object.outputs)],
                                        channelCountMode: "explicit",
                                        channelInterpretation: "speakers",
                                        processorOptions: options });
                    this.node.onprocessorerror = () => { console.log('An error from freeverb-processor was detected.');}
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
                        var element = createfreeverbGUI(this.node);
                        resolve(element);
                    }
                } else {
                    // LINK EXIST, WE AT LEAST CREATED ONE INSTANCE PREVIOUSLY
                    // so we can create another instance
                    var element = createfreeverbGUI(this.node);
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

let freeverbProcessorString = `

    'use strict';

    // Monophonic Faust DSP
    class freeverbProcessor extends AudioWorkletProcessor {
        
        // JSON parsing functions
        static parse_ui(ui, obj, callback)
        {
            for (var i = 0; i < ui.length; i++) {
                freeverbProcessor.parse_group(ui[i], obj, callback);
            }
        }
        
        static parse_group(group, obj, callback)
        {
            if (group.items) {
                freeverbProcessor.parse_items(group.items, obj, callback);
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
                freeverbProcessor.parse_items(item.items, obj, callback);
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
                freeverbProcessor.parse_items(item.items, obj, callback);
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
            freeverbProcessor.parse_ui(JSON.parse(\`JSON_STR\`).ui, params, freeverbProcessor.parse_item1);
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
            
            this.freeverb_instance = new WebAssembly.Instance(options.processorOptions.wasm_module, importObject);
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
            
            this.factory = this.freeverb_instance.exports;
            this.HEAP = this.freeverb_instance.exports.memory.buffer;
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
                freeverbProcessor.parse_ui(this.json_object.ui, this, freeverbProcessor.parse_item2);
                
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
        registerProcessor('freeverb', freeverbProcessor);
    } catch (error) {
        console.warn(error);
    }
`;

// WAP factory or npm package module
if (typeof module === "undefined") {
    window.freeverb = freeverb;
    window.Faustfreeverb = freeverb;
} else {
    module.exports = { freeverb };
}
