
/*
Code generated with Faust version 2.18.0
Compilation options: -lang wasm-ib -scal -ftz 2
*/

function getJSONfreeverb3() {
	return "{\"name\": \"freeverb3\",\"filename\": \"freeverb3.dsp\",\"version\": \"2.18.0\",\"compile_options\": \"-lang wasm-ib -scal -ftz 2\",\"include_pathnames\": [\"/usr/local/share/faust\",\"/usr/local/share/faust\",\"/usr/share/faust\",\".\",\"/tmp/sessions/8AC784D49EFA633727AC132D90BE68FD28E4B21D/web/wap\"],\"size\": \"586152\",\"inputs\": \"2\",\"outputs\": \"2\",\"meta\": [ { \"author\": \"RM\" },{ \"compilation_options\": \"-single -scal -I libraries/ -I project/ -lang wasm\" },{ \"delays_lib_name\": \"Faust Delay Library\" },{ \"delays_lib_version\": \"0.1\" },{ \"description\": \"Freeverb demo application.\" },{ \"filename\": \"freeverb3.dsp\" },{ \"filters_lib_allpass_comb_author\": \"Julius O. Smith III\" },{ \"filters_lib_allpass_comb_copyright\": \"Copyright (C) 2003-2019 by Julius O. Smith III <jos@ccrma.stanford.edu>\" },{ \"filters_lib_allpass_comb_license\": \"MIT-style STK-4.3 license\" },{ \"filters_lib_lowpass0_highpass1\": \"Copyright (C) 2003-2019 by Julius O. Smith III <jos@ccrma.stanford.edu>\" },{ \"filters_lib_name\": \"Faust Filters Library\" },{ \"library_path\": \"FaustDSP\" },{ \"maths_lib_author\": \"GRAME\" },{ \"maths_lib_copyright\": \"GRAME\" },{ \"maths_lib_license\": \"LGPL with exception\" },{ \"maths_lib_name\": \"Faust Math Library\" },{ \"maths_lib_version\": \"2.1\" },{ \"name\": \"freeverb3\" },{ \"reverbs_lib_name\": \"Faust Reverb Library\" },{ \"reverbs_lib_version\": \"0.0\" },{ \"version\": \"0.0\" }],\"ui\": [ {\"type\": \"hgroup\",\"label\": \"Freeverb\",\"items\": [ {\"type\": \"vgroup\",\"label\": \"0x00\",\"meta\": [{ \"0\": \"\" }],\"items\": [ {\"type\": \"vslider\",\"label\": \"Damp\",\"address\": \"/Freeverb/0x00/Damp\",\"index\": \"20\",\"meta\": [{ \"0\": \"\" },{ \"style\": \"knob\" },{ \"tooltip\": \"Somehow control the   density of the reverb.\" }],\"init\": \"0.5\",\"min\": \"0\",\"max\": \"1\",\"step\": \"0.025\"},{\"type\": \"vslider\",\"label\": \"RoomSize\",\"address\": \"/Freeverb/0x00/RoomSize\",\"index\": \"12\",\"meta\": [{ \"1\": \"\" },{ \"style\": \"knob\" },{ \"tooltip\": \"The room size   between 0 and 1 with 1 for the largest room.\" }],\"init\": \"0.5\",\"min\": \"0\",\"max\": \"1\",\"step\": \"0.025\"},{\"type\": \"vslider\",\"label\": \"Stereo Spread\",\"address\": \"/Freeverb/0x00/Stereo_Spread\",\"index\": \"323852\",\"meta\": [{ \"2\": \"\" },{ \"style\": \"knob\" },{ \"tooltip\": \"Spatial   spread between 0 and 1 with 1 for maximum spread.\" }],\"init\": \"0.5\",\"min\": \"0\",\"max\": \"1\",\"step\": \"0.01\"}]},{\"type\": \"vslider\",\"label\": \"Wet\",\"address\": \"/Freeverb/Wet\",\"index\": \"32\",\"meta\": [{ \"1\": \"\" },{ \"tooltip\": \"The amount of reverb applied to the signal   between 0 and 1 with 1 for the maximum amount of reverb.\" }],\"init\": \"0.3333\",\"min\": \"0\",\"max\": \"1\",\"step\": \"0.025\"}]}]}";
}
function getBase64Codefreeverb3() { return "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pztBACoCBJSoNgLw4RFBAEGACEEAQQAoAvDhEUF/ahALEAw2AvThEUEAQxa4iDpBACoCBJQ4AojiEwuQgICAAAAgACABEAggABAKIAAQBwusgICAAABBAEMAAAA/OAIMQQBDAAAAPzgCFEEAQ0ymqj44AiBBAEMAAAA/OAKM4hMLjYCAgAAAIAEgACAAIAFIGw8LjYCAgAAAIAAgASAAIAFIGw8LjICAgAAAIAAgAWogAjgCAAsL3ZOAgAABAEEAC9YTeyJuYW1lIjogImZyZWV2ZXJiMyIsImZpbGVuYW1lIjogImZyZWV2ZXJiMy5kc3AiLCJ2ZXJzaW9uIjogIjIuMTguMCIsImNvbXBpbGVfb3B0aW9ucyI6ICItbGFuZyB3YXNtLWliIC1zY2FsIC1mdHogMiIsImluY2x1ZGVfcGF0aG5hbWVzIjogWyIvdXNyL2xvY2FsL3NoYXJlL2ZhdXN0IiwiL3Vzci9sb2NhbC9zaGFyZS9mYXVzdCIsIi91c3Ivc2hhcmUvZmF1c3QiLCIuIiwiL3RtcC9zZXNzaW9ucy84QUM3ODRENDlFRkE2MzM3MjdBQzEzMkQ5MEJFNjhGRDI4RTRCMjFEL3dlYi93YXAiXSwic2l6ZSI6ICI1ODYxNTIiLCJpbnB1dHMiOiAiMiIsIm91dHB1dHMiOiAiMiIsIm1ldGEiOiBbIHsgImF1dGhvciI6ICJSTSIgfSx7ICJjb21waWxhdGlvbl9vcHRpb25zIjogIi1zaW5nbGUgLXNjYWwgLUkgbGlicmFyaWVzLyAtSSBwcm9qZWN0LyAtbGFuZyB3YXNtIiB9LHsgImRlbGF5c19saWJfbmFtZSI6ICJGYXVzdCBEZWxheSBMaWJyYXJ5IiB9LHsgImRlbGF5c19saWJfdmVyc2lvbiI6ICIwLjEiIH0seyAiZGVzY3JpcHRpb24iOiAiRnJlZXZlcmIgZGVtbyBhcHBsaWNhdGlvbi4iIH0seyAiZmlsZW5hbWUiOiAiZnJlZXZlcmIzLmRzcCIgfSx7ICJmaWx0ZXJzX2xpYl9hbGxwYXNzX2NvbWJfYXV0aG9yIjogIkp1bGl1cyBPLiBTbWl0aCBJSUkiIH0seyAiZmlsdGVyc19saWJfYWxscGFzc19jb21iX2NvcHlyaWdodCI6ICJDb3B5cmlnaHQgKEMpIDIwMDMtMjAxOSBieSBKdWxpdXMgTy4gU21pdGggSUlJIDxqb3NAY2NybWEuc3RhbmZvcmQuZWR1PiIgfSx7ICJmaWx0ZXJzX2xpYl9hbGxwYXNzX2NvbWJfbGljZW5zZSI6ICJNSVQtc3R5bGUgU1RLLTQuMyBsaWNlbnNlIiB9LHsgImZpbHRlcnNfbGliX2xvd3Bhc3MwX2hpZ2hwYXNzMSI6ICJDb3B5cmlnaHQgKEMpIDIwMDMtMjAxOSBieSBKdWxpdXMgTy4gU21pdGggSUlJIDxqb3NAY2NybWEuc3RhbmZvcmQuZWR1PiIgfSx7ICJmaWx0ZXJzX2xpYl9uYW1lIjogIkZhdXN0IEZpbHRlcnMgTGlicmFyeSIgfSx7ICJsaWJyYXJ5X3BhdGgiOiAiRmF1c3REU1AiIH0seyAibWF0aHNfbGliX2F1dGhvciI6ICJHUkFNRSIgfSx7ICJtYXRoc19saWJfY29weXJpZ2h0IjogIkdSQU1FIiB9LHsgIm1hdGhzX2xpYl9saWNlbnNlIjogIkxHUEwgd2l0aCBleGNlcHRpb24iIH0seyAibWF0aHNfbGliX25hbWUiOiAiRmF1c3QgTWF0aCBMaWJyYXJ5IiB9LHsgIm1hdGhzX2xpYl92ZXJzaW9uIjogIjIuMSIgfSx7ICJuYW1lIjogImZyZWV2ZXJiMyIgfSx7ICJyZXZlcmJzX2xpYl9uYW1lIjogIkZhdXN0IFJldmVyYiBMaWJyYXJ5IiB9LHsgInJldmVyYnNfbGliX3ZlcnNpb24iOiAiMC4wIiB9LHsgInZlcnNpb24iOiAiMC4wIiB9XSwidWkiOiBbIHsidHlwZSI6ICJoZ3JvdXAiLCJsYWJlbCI6ICJGcmVldmVyYiIsIml0ZW1zIjogWyB7InR5cGUiOiAidmdyb3VwIiwibGFiZWwiOiAiMHgwMCIsIm1ldGEiOiBbeyAiMCI6ICIiIH1dLCJpdGVtcyI6IFsgeyJ0eXBlIjogInZzbGlkZXIiLCJsYWJlbCI6ICJEYW1wIiwiYWRkcmVzcyI6ICIvRnJlZXZlcmIvMHgwMC9EYW1wIiwiaW5kZXgiOiAiMjAiLCJtZXRhIjogW3sgIjAiOiAiIiB9LHsgInN0eWxlIjogImtub2IiIH0seyAidG9vbHRpcCI6ICJTb21laG93IGNvbnRyb2wgdGhlICAgZGVuc2l0eSBvZiB0aGUgcmV2ZXJiLiIgfV0sImluaXQiOiAiMC41IiwibWluIjogIjAiLCJtYXgiOiAiMSIsInN0ZXAiOiAiMC4wMjUifSx7InR5cGUiOiAidnNsaWRlciIsImxhYmVsIjogIlJvb21TaXplIiwiYWRkcmVzcyI6ICIvRnJlZXZlcmIvMHgwMC9Sb29tU2l6ZSIsImluZGV4IjogIjEyIiwibWV0YSI6IFt7ICIxIjogIiIgfSx7ICJzdHlsZSI6ICJrbm9iIiB9LHsgInRvb2x0aXAiOiAiVGhlIHJvb20gc2l6ZSAgIGJldHdlZW4gMCBhbmQgMSB3aXRoIDEgZm9yIHRoZSBsYXJnZXN0IHJvb20uIiB9XSwiaW5pdCI6ICIwLjUiLCJtaW4iOiAiMCIsIm1heCI6ICIxIiwic3RlcCI6ICIwLjAyNSJ9LHsidHlwZSI6ICJ2c2xpZGVyIiwibGFiZWwiOiAiU3RlcmVvIFNwcmVhZCIsImFkZHJlc3MiOiAiL0ZyZWV2ZXJiLzB4MDAvU3RlcmVvX1NwcmVhZCIsImluZGV4IjogIjMyMzg1MiIsIm1ldGEiOiBbeyAiMiI6ICIiIH0seyAic3R5bGUiOiAia25vYiIgfSx7ICJ0b29sdGlwIjogIlNwYXRpYWwgICBzcHJlYWQgYmV0d2VlbiAwIGFuZCAxIHdpdGggMSBmb3IgbWF4aW11bSBzcHJlYWQuIiB9XSwiaW5pdCI6ICIwLjUiLCJtaW4iOiAiMCIsIm1heCI6ICIxIiwic3RlcCI6ICIwLjAxIn1dfSx7InR5cGUiOiAidnNsaWRlciIsImxhYmVsIjogIldldCIsImFkZHJlc3MiOiAiL0ZyZWV2ZXJiL1dldCIsImluZGV4IjogIjMyIiwibWV0YSI6IFt7ICIxIjogIiIgfSx7ICJ0b29sdGlwIjogIlRoZSBhbW91bnQgb2YgcmV2ZXJiIGFwcGxpZWQgdG8gdGhlIHNpZ25hbCAgIGJldHdlZW4gMCBhbmQgMSB3aXRoIDEgZm9yIHRoZSBtYXhpbXVtIGFtb3VudCBvZiByZXZlcmIuIiB9XSwiaW5pdCI6ICIwLjMzMzMiLCJtaW4iOiAiMCIsIm1heCI6ICIxIiwic3RlcCI6ICIwLjAyNSJ9XX1dfQ=="; }

/*
 faust2wasm: GRAME 2017-2019
*/

'use strict';

if (typeof (AudioWorkletNode) === "undefined") {
	alert("AudioWorklet is not supported in this browser !")
}

class freeverb3Node extends AudioWorkletNode {

    constructor(context, baseURL, options)
    {
        super(context, 'freeverb3', options);
        
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
                                obj.fPitchwheelLabel.push(item.address);
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
                this.setParamValue(path, freeverb3Node.remap(value, 0, 127, this.fCtrlLabel[ctrl][i].min, this.fCtrlLabel[ctrl][i].max));
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
            var path = this.fPitchwheelLabel[i];
            this.setParamValue(path, Math.pow(2.0, wheel/12.0));
            if (this.output_handler) {
                this.output_handler(path, this.getParamValue(path));
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
            this.pitchWheel(channel, ((data2 * 128.0 + data1)-8192)/8192.0);
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
class freeverb3 {

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

            let real_url = (this.baseURL === "") ? "freeverb3.wasm" : (this.baseURL + "/freeverb3.wasm");
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
                let freeverb3ProcessorString1 = freeverb3ProcessorString.replace(re, json);
                let real_url = window.URL.createObjectURL(new Blob([freeverb3ProcessorString1], { type: 'text/javascript' }));
                
                this.context.audioWorklet.addModule(real_url).then(() => {
                    this.node = new freeverb3Node(this.context, this.baseURL, 
                                        { numberOfInputs: (parseInt(json_object.inputs) > 0) ? 1 : 0,
                                        numberOfOutputs: (parseInt(json_object.outputs) > 0) ? 1 : 0,
                                        channelCount: Math.max(1, parseInt(json_object.inputs)),
                                        outputChannelCount: [parseInt(json_object.outputs)],
                                        channelCountMode: "explicit",
                                        channelInterpretation: "speakers",
                                        processorOptions: options });
                    this.node.onprocessorerror = () => { console.log('An error from freeverb3-processor was detected.');}
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
                        var element = createfreeverb3GUI(this.node);
                        resolve(element);
                    }
                } else {
                    // LINK EXIST, WE AT LEAST CREATED ONE INSTANCE PREVIOUSLY
                    // so we can create another instance
                    var element = createfreeverb3GUI(this.node);
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

let freeverb3ProcessorString = `

    'use strict';

    // Monophonic Faust DSP
    class freeverb3Processor extends AudioWorkletProcessor {
        
        // JSON parsing functions
        static parse_ui(ui, obj, callback)
        {
            for (var i = 0; i < ui.length; i++) {
                freeverb3Processor.parse_group(ui[i], obj, callback);
            }
        }
        
        static parse_group(group, obj, callback)
        {
            if (group.items) {
                freeverb3Processor.parse_items(group.items, obj, callback);
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
                freeverb3Processor.parse_items(item.items, obj, callback);
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
                freeverb3Processor.parse_items(item.items, obj, callback);
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
            freeverb3Processor.parse_ui(JSON.parse(\`JSON_STR\`).ui, params, freeverb3Processor.parse_item1);
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

                        table: new WebAssembly.Table({ initial: 0, element: 'anyfunc' })
                    }
            };
            
            this.freeverb3_instance = new WebAssembly.Instance(options.processorOptions.wasm_module, importObject);
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
            
            this.factory = this.freeverb3_instance.exports;
            this.HEAP = this.freeverb3_instance.exports.memory.buffer;
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
                freeverb3Processor.parse_ui(this.json_object.ui, this, freeverb3Processor.parse_item2);
                
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
            this.factory.compute(this.dsp, NUM_FRAMES, this.ins, this.outs);
            
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
    registerProcessor('freeverb3', freeverb3Processor);
`;

// WAP factory or npm package module
if (typeof module === "undefined") {
    window.freeverb3 = freeverb3;
    window.Faustfreeverb3 = freeverb3;
} else {
    module.exports = { freeverb3 };
}
