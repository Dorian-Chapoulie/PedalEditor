
/*
Code generated with Faust version 2.20.1
Compilation options: -lang wasm-ib -scal -ftz 2
*/

function getJSONFuzzFace() {
	return '{"name": "FuzzFace","filename": "FuzzFace.dsp","version": "2.20.1","compile_options": "-lang wasm-ib -scal -ftz 2","include_pathnames": ["/usr/local/share/faust","/usr/local/share/faust","/usr/share/faust",".","/tmp/sessions/2DCA76B5023FF0269B8C41ACBE96EDB5FF35B8A5/web/wap"],"size": 320,"inputs": 1,"outputs": 1,"meta": [ { "basics_lib_name": "Faust Basic Element Library" },{ "basics_lib_version": "0.1" },{ "category": "Fuzz" },{ "compilation_options": "-single -scal -I libraries/ -I project/ -lang wasm" },{ "description": "J Hendrix Fuzz Face simulation" },{ "filename": "FuzzFace.dsp" },{ "filters_lib_fir_author": "Julius O. Smith III" },{ "filters_lib_fir_copyright": "Copyright (C) 2003-2019 by Julius O. Smith III <jos@ccrma.stanford.edu>" },{ "filters_lib_fir_license": "MIT-style STK-4.3 license" },{ "filters_lib_iir_author": "Julius O. Smith III" },{ "filters_lib_iir_copyright": "Copyright (C) 2003-2019 by Julius O. Smith III <jos@ccrma.stanford.edu>" },{ "filters_lib_iir_license": "MIT-style STK-4.3 license" },{ "filters_lib_lowpass0_highpass1": "Copyright (C) 2003-2019 by Julius O. Smith III <jos@ccrma.stanford.edu>" },{ "filters_lib_name": "Faust Filters Library" },{ "id": "fuzzface" },{ "insert_p": "clipper" },{ "library_path": "FaustDSP" },{ "maths_lib_author": "GRAME" },{ "maths_lib_copyright": "GRAME" },{ "maths_lib_license": "LGPL with exception" },{ "maths_lib_name": "Faust Math Library" },{ "maths_lib_version": "2.1" },{ "name": "FuzzFace" },{ "signals_lib_name": "Faust Signal Routing Library" },{ "signals_lib_version": "0.0" }],"ui": [ {"type": "vgroup","label": "FuzzFace","items": [ {"type": "vslider","label": "Fuzz","address": "/FuzzFace/Fuzz","index": 36,"meta": [{ "name": "Fuzz" },{ "style": "knob" }],"init": 0.5,"min": 0,"max": 1,"step": 0.01},{"type": "vslider","label": "Level","address": "/FuzzFace/Level","index": 184,"meta": [{ "name": "Level" },{ "style": "knob" }],"init": 0.5,"min": 0,"max": 1,"step": 0.01},{"type": "checkbox","label": "bypass","address": "/FuzzFace/bypass","index": 12}]}]}';
}
function getBase64CodeFuzzFace() { return "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AqgCQQBBACoC0AFDyNUMK5I4AqwCQQBBACoCqAFDyNUMK5I4ArACQQBDLvbBJ0EAKgKoAZM4ArQCQQBBACoCqAFDLvbBp5I4ArgCQQBDyNUMq0EAKgKoAZM4ArwCC5CAgIAAACAAIAEQCSAAEAsgABAIC6GAgIAAAEEAQwAAAAA4AgxBAEMAAAA/OAIkQQBDAAAAPzgCuAELkICAgAAAIAAgAUgEfyABBSAACw8LkICAgAAAIAAgAUgEfyAABSABCw8LjICAgAAAIAAgAWogAjgCAAsLiJCAgAABAEEAC4EQeyJuYW1lIjogIkZ1enpGYWNlIiwiZmlsZW5hbWUiOiAiRnV6ekZhY2UuZHNwIiwidmVyc2lvbiI6ICIyLjIwLjEiLCJjb21waWxlX29wdGlvbnMiOiAiLWxhbmcgd2FzbS1pYiAtc2NhbCAtZnR6IDIiLCJpbmNsdWRlX3BhdGhuYW1lcyI6IFsiL3Vzci9sb2NhbC9zaGFyZS9mYXVzdCIsIi91c3IvbG9jYWwvc2hhcmUvZmF1c3QiLCIvdXNyL3NoYXJlL2ZhdXN0IiwiLiIsIi90bXAvc2Vzc2lvbnMvMkRDQTc2QjUwMjNGRjAyNjlCOEM0MUFDQkU5NkVEQjVGRjM1QjhBNS93ZWIvd2FwIl0sInNpemUiOiAzMjAsImlucHV0cyI6IDEsIm91dHB1dHMiOiAxLCJtZXRhIjogWyB7ICJiYXNpY3NfbGliX25hbWUiOiAiRmF1c3QgQmFzaWMgRWxlbWVudCBMaWJyYXJ5IiB9LHsgImJhc2ljc19saWJfdmVyc2lvbiI6ICIwLjEiIH0seyAiY2F0ZWdvcnkiOiAiRnV6eiIgfSx7ICJjb21waWxhdGlvbl9vcHRpb25zIjogIi1zaW5nbGUgLXNjYWwgLUkgbGlicmFyaWVzLyAtSSBwcm9qZWN0LyAtbGFuZyB3YXNtIiB9LHsgImRlc2NyaXB0aW9uIjogIkogSGVuZHJpeCBGdXp6IEZhY2Ugc2ltdWxhdGlvbiIgfSx7ICJmaWxlbmFtZSI6ICJGdXp6RmFjZS5kc3AiIH0seyAiZmlsdGVyc19saWJfZmlyX2F1dGhvciI6ICJKdWxpdXMgTy4gU21pdGggSUlJIiB9LHsgImZpbHRlcnNfbGliX2Zpcl9jb3B5cmlnaHQiOiAiQ29weXJpZ2h0IChDKSAyMDAzLTIwMTkgYnkgSnVsaXVzIE8uIFNtaXRoIElJSSA8am9zQGNjcm1hLnN0YW5mb3JkLmVkdT4iIH0seyAiZmlsdGVyc19saWJfZmlyX2xpY2Vuc2UiOiAiTUlULXN0eWxlIFNUSy00LjMgbGljZW5zZSIgfSx7ICJmaWx0ZXJzX2xpYl9paXJfYXV0aG9yIjogIkp1bGl1cyBPLiBTbWl0aCBJSUkiIH0seyAiZmlsdGVyc19saWJfaWlyX2NvcHlyaWdodCI6ICJDb3B5cmlnaHQgKEMpIDIwMDMtMjAxOSBieSBKdWxpdXMgTy4gU21pdGggSUlJIDxqb3NAY2NybWEuc3RhbmZvcmQuZWR1PiIgfSx7ICJmaWx0ZXJzX2xpYl9paXJfbGljZW5zZSI6ICJNSVQtc3R5bGUgU1RLLTQuMyBsaWNlbnNlIiB9LHsgImZpbHRlcnNfbGliX2xvd3Bhc3MwX2hpZ2hwYXNzMSI6ICJDb3B5cmlnaHQgKEMpIDIwMDMtMjAxOSBieSBKdWxpdXMgTy4gU21pdGggSUlJIDxqb3NAY2NybWEuc3RhbmZvcmQuZWR1PiIgfSx7ICJmaWx0ZXJzX2xpYl9uYW1lIjogIkZhdXN0IEZpbHRlcnMgTGlicmFyeSIgfSx7ICJpZCI6ICJmdXp6ZmFjZSIgfSx7ICJpbnNlcnRfcCI6ICJjbGlwcGVyIiB9LHsgImxpYnJhcnlfcGF0aCI6ICJGYXVzdERTUCIgfSx7ICJtYXRoc19saWJfYXV0aG9yIjogIkdSQU1FIiB9LHsgIm1hdGhzX2xpYl9jb3B5cmlnaHQiOiAiR1JBTUUiIH0seyAibWF0aHNfbGliX2xpY2Vuc2UiOiAiTEdQTCB3aXRoIGV4Y2VwdGlvbiIgfSx7ICJtYXRoc19saWJfbmFtZSI6ICJGYXVzdCBNYXRoIExpYnJhcnkiIH0seyAibWF0aHNfbGliX3ZlcnNpb24iOiAiMi4xIiB9LHsgIm5hbWUiOiAiRnV6ekZhY2UiIH0seyAic2lnbmFsc19saWJfbmFtZSI6ICJGYXVzdCBTaWduYWwgUm91dGluZyBMaWJyYXJ5IiB9LHsgInNpZ25hbHNfbGliX3ZlcnNpb24iOiAiMC4wIiB9XSwidWkiOiBbIHsidHlwZSI6ICJ2Z3JvdXAiLCJsYWJlbCI6ICJGdXp6RmFjZSIsIml0ZW1zIjogWyB7InR5cGUiOiAidnNsaWRlciIsImxhYmVsIjogIkZ1enoiLCJhZGRyZXNzIjogIi9GdXp6RmFjZS9GdXp6IiwiaW5kZXgiOiAzNiwibWV0YSI6IFt7ICJuYW1lIjogIkZ1enoiIH0seyAic3R5bGUiOiAia25vYiIgfV0sImluaXQiOiAwLjUsIm1pbiI6IDAsIm1heCI6IDEsInN0ZXAiOiAwLjAxfSx7InR5cGUiOiAidnNsaWRlciIsImxhYmVsIjogIkxldmVsIiwiYWRkcmVzcyI6ICIvRnV6ekZhY2UvTGV2ZWwiLCJpbmRleCI6IDE4NCwibWV0YSI6IFt7ICJuYW1lIjogIkxldmVsIiB9LHsgInN0eWxlIjogImtub2IiIH1dLCJpbml0IjogMC41LCJtaW4iOiAwLCJtYXgiOiAxLCJzdGVwIjogMC4wMX0seyJ0eXBlIjogImNoZWNrYm94IiwibGFiZWwiOiAiYnlwYXNzIiwiYWRkcmVzcyI6ICIvRnV6ekZhY2UvYnlwYXNzIiwiaW5kZXgiOiAxMn1dfV19"; }

/*
 faust2wasm: GRAME 2017-2019
*/

'use strict';

if (typeof (AudioWorkletNode) === "undefined") {
	alert("AudioWorklet is not supported in this browser !")
}

class FuzzFaceNode extends AudioWorkletNode {

    constructor(context, baseURL, options)
    {
        super(context, 'FuzzFace', options);
        
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
                this.setParamValue(path, FuzzFaceNode.remap(value, 0, 127, this.fCtrlLabel[ctrl][i].min, this.fCtrlLabel[ctrl][i].max));
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
            this.setParamValue(pw.path, FuzzFaceNode.remap(wheel, 0, 16383, pw.min, pw.max));
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
class FuzzFace {

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

            let real_url = (this.baseURL === "") ? "FuzzFace.wasm" : (this.baseURL + "/FuzzFace.wasm");
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
                let FuzzFaceProcessorString1 = FuzzFaceProcessorString.replace(re, json);
                let real_url = window.URL.createObjectURL(new Blob([FuzzFaceProcessorString1], { type: 'text/javascript' }));
                
                this.context.audioWorklet.addModule(real_url).then(() => {
                    this.node = new FuzzFaceNode(this.context, this.baseURL, 
                                        { numberOfInputs: (parseInt(json_object.inputs) > 0) ? 1 : 0,
                                        numberOfOutputs: (parseInt(json_object.outputs) > 0) ? 1 : 0,
                                        channelCount: Math.max(1, parseInt(json_object.inputs)),
                                        outputChannelCount: [parseInt(json_object.outputs)],
                                        channelCountMode: "explicit",
                                        channelInterpretation: "speakers",
                                        processorOptions: options });
                    this.node.onprocessorerror = () => { console.log('An error from FuzzFace-processor was detected.');}
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
                        var element = createFuzzFaceGUI(this.node);
                        resolve(element);
                    }
                } else {
                    // LINK EXIST, WE AT LEAST CREATED ONE INSTANCE PREVIOUSLY
                    // so we can create another instance
                    var element = createFuzzFaceGUI(this.node);
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

let FuzzFaceProcessorString = `

    'use strict';

    // Monophonic Faust DSP
    class FuzzFaceProcessor extends AudioWorkletProcessor {
        
        // JSON parsing functions
        static parse_ui(ui, obj, callback)
        {
            for (var i = 0; i < ui.length; i++) {
                FuzzFaceProcessor.parse_group(ui[i], obj, callback);
            }
        }
        
        static parse_group(group, obj, callback)
        {
            if (group.items) {
                FuzzFaceProcessor.parse_items(group.items, obj, callback);
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
                FuzzFaceProcessor.parse_items(item.items, obj, callback);
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
                FuzzFaceProcessor.parse_items(item.items, obj, callback);
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
            FuzzFaceProcessor.parse_ui(JSON.parse(\`JSON_STR\`).ui, params, FuzzFaceProcessor.parse_item1);
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
            
            this.FuzzFace_instance = new WebAssembly.Instance(options.processorOptions.wasm_module, importObject);
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
            
            this.factory = this.FuzzFace_instance.exports;
            this.HEAP = this.FuzzFace_instance.exports.memory.buffer;
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
                FuzzFaceProcessor.parse_ui(this.json_object.ui, this, FuzzFaceProcessor.parse_item2);
                
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
        registerProcessor('FuzzFace', FuzzFaceProcessor);
    } catch (error) {
        console.warn(error);
    }
`;

// WAP factory or npm package module
if (typeof module === "undefined") {
    window.FuzzFace = FuzzFace;
    window.FaustFuzzFace = FuzzFace;
} else {
    module.exports = { FuzzFace };
}
