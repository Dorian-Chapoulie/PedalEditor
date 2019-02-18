
/*
Code generated with Faust version 2.14.4
Compilation options: wasm-ib, -scal -ftz 2
*/

function getJSONBlipper() {
	return "{\"name\":\"Blipper\",\"filename\":\"Blipper\",\"version\":\"2.14.4\",\"compile_options\":\"-scal -ftz 2\",\"library_list\":[\"/usr/local/share/faust/stdfaust.lib\",\"/usr/local/share/faust/basics.lib\",\"/usr/local/share/faust/maths.lib\",\"/usr/local/share/faust/signals.lib\",\"/usr/local/share/faust/oscillators.lib\",\"/usr/local/share/faust/analyzers.lib\",\"/usr/local/share/faust/filters.lib\"],\"include_pathnames\":[\"/usr/local/share/faust\",\"/usr/local/share/faust\",\"/usr/share/faust\",\".\",\"/tmp/sessions/6244E251437BE860C00D085D00DFD06889A02EDF/web/wap\"],\"size\":\"16528\",\"inputs\":\"2\",\"outputs\":\"2\",\"meta\":[{\"analyzers.lib/name\":\"Faust Analyzer Library\"},{\"analyzers.lib/version\":\"0.0\"},{\"author\":\"Oli Larkin (contact@olilarkin.co.uk)\"},{\"basics.lib/name\":\"Faust Basic Element Library\"},{\"basics.lib/version\":\"0.0\"},{\"copyright\":\"Oliver Larkin\"},{\"description\":\"Envelope Follower controlling pitch of a triangle oscillator, good with percussive input\"},{\"filename\":\"Blipper\"},{\"filters.lib/name\":\"Faust Filters Library\"},{\"filters.lib/version\":\"0.0\"},{\"licence\":\"GPL\"},{\"maths.lib/author\":\"GRAME\"},{\"maths.lib/copyright\":\"GRAME\"},{\"maths.lib/license\":\"LGPL with exception\"},{\"maths.lib/name\":\"Faust Math Library\"},{\"maths.lib/version\":\"2.1\"},{\"name\":\"Blipper\"},{\"oscillators.lib/name\":\"Faust Oscillator Library\"},{\"oscillators.lib/version\":\"0.0\"},{\"signals.lib/name\":\"Faust Signal Routing Library\"},{\"signals.lib/version\":\"0.0\"},{\"version\":\"0.2\"}],\"ui\":[{\"type\":\"vgroup\",\"label\":\"Blipper\",\"items\":[{\"type\":\"hslider\",\"label\":\"BasePitch\",\"address\":\"/Blipper/BasePitch\",\"index\":\"80\",\"meta\":[{\"OWL\":\"PARAMETER_A\"},{\"unit\":\"semitones\"}],\"init\":\"60\",\"min\":\"24\",\"max\":\"96\",\"step\":\"0.1\"},{\"type\":\"hslider\",\"label\":\"Mix\",\"address\":\"/Blipper/Mix\",\"index\":\"20\",\"meta\":[{\"OWL\":\"PARAMETER_D\"}],\"init\":\"0.5\",\"min\":\"0\",\"max\":\"1\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"PitchMod\",\"address\":\"/Blipper/PitchMod\",\"index\":\"92\",\"meta\":[{\"OWL\":\"PARAMETER_B\"},{\"unit\":\"semitones\"}],\"init\":\"24\",\"min\":\"-64\",\"max\":\"64\",\"step\":\"1\"},{\"type\":\"hslider\",\"label\":\"Release\",\"address\":\"/Blipper/Release\",\"index\":\"48\",\"meta\":[{\"OWL\":\"PARAMETER_C\"},{\"unit\":\"ms\"}],\"init\":\"20\",\"min\":\"2\",\"max\":\"100\",\"step\":\"1\"},{\"type\":\"checkbox\",\"label\":\"bypass\",\"address\":\"/Blipper/bypass\",\"index\":\"40\"}]}]}";
}
function getBase64CodeBlipper() { return "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dXNyL2xvY2FsL3NoYXJlL2ZhdXN0L21hdGhzLmxpYiIsIi91c3IvbG9jYWwvc2hhcmUvZmF1c3Qvc2lnbmFscy5saWIiLCIvdXNyL2xvY2FsL3NoYXJlL2ZhdXN0L29zY2lsbGF0b3JzLmxpYiIsIi91c3IvbG9jYWwvc2hhcmUvZmF1c3QvYW5hbHl6ZXJzLmxpYiIsIi91c3IvbG9jYWwvc2hhcmUvZmF1c3QvZmlsdGVycy5saWIiXSwiaW5jbHVkZV9wYXRobmFtZXMiOlsiL3Vzci9sb2NhbC9zaGFyZS9mYXVzdCIsIi91c3IvbG9jYWwvc2hhcmUvZmF1c3QiLCIvdXNyL3NoYXJlL2ZhdXN0IiwiLiIsIi90bXAvc2Vzc2lvbnMvNjI0NEUyNTE0MzdCRTg2MEMwMEQwODVEMDBERkQwNjg4OUEwMkVERi93ZWIvd2FwIl0sInNpemUiOiIxNjUyOCIsImlucHV0cyI6IjIiLCJvdXRwdXRzIjoiMiIsIm1ldGEiOlt7ImFuYWx5emVycy5saWIvbmFtZSI6IkZhdXN0IEFuYWx5emVyIExpYnJhcnkifSx7ImFuYWx5emVycy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsiYXV0aG9yIjoiT2xpIExhcmtpbiAoY29udGFjdEBvbGlsYXJraW4uY28udWspIn0seyJiYXNpY3MubGliL25hbWUiOiJGYXVzdCBCYXNpYyBFbGVtZW50IExpYnJhcnkifSx7ImJhc2ljcy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsiY29weXJpZ2h0IjoiT2xpdmVyIExhcmtpbiJ9LHsiZGVzY3JpcHRpb24iOiJFbnZlbG9wZSBGb2xsb3dlciBjb250cm9sbGluZyBwaXRjaCBvZiBhIHRyaWFuZ2xlIG9zY2lsbGF0b3IsIGdvb2Qgd2l0aCBwZXJjdXNzaXZlIGlucHV0In0seyJmaWxlbmFtZSI6IkJsaXBwZXIifSx7ImZpbHRlcnMubGliL25hbWUiOiJGYXVzdCBGaWx0ZXJzIExpYnJhcnkifSx7ImZpbHRlcnMubGliL3ZlcnNpb24iOiIwLjAifSx7ImxpY2VuY2UiOiJHUEwifSx7Im1hdGhzLmxpYi9hdXRob3IiOiJHUkFNRSJ9LHsibWF0aHMubGliL2NvcHlyaWdodCI6IkdSQU1FIn0seyJtYXRocy5saWIvbGljZW5zZSI6IkxHUEwgd2l0aCBleGNlcHRpb24ifSx7Im1hdGhzLmxpYi9uYW1lIjoiRmF1c3QgTWF0aCBMaWJyYXJ5In0seyJtYXRocy5saWIvdmVyc2lvbiI6IjIuMSJ9LHsibmFtZSI6IkJsaXBwZXIifSx7Im9zY2lsbGF0b3JzLmxpYi9uYW1lIjoiRmF1c3QgT3NjaWxsYXRvciBMaWJyYXJ5In0seyJvc2NpbGxhdG9ycy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsic2lnbmFscy5saWIvbmFtZSI6IkZhdXN0IFNpZ25hbCBSb3V0aW5nIExpYnJhcnkifSx7InNpZ25hbHMubGliL3ZlcnNpb24iOiIwLjAifSx7InZlcnNpb24iOiIwLjIifV0sInVpIjpbeyJ0eXBlIjoidmdyb3VwIiwibGFiZWwiOiJCbGlwcGVyIiwiaXRlbXMiOlt7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJCYXNlUGl0Y2giLCJhZGRyZXNzIjoiL0JsaXBwZXIvQmFzZVBpdGNoIiwiaW5kZXgiOiI4MCIsIm1ldGEiOlt7Ik9XTCI6IlBBUkFNRVRFUl9BIn0seyJ1bml0Ijoic2VtaXRvbmVzIn1dLCJpbml0IjoiNjAiLCJtaW4iOiIyNCIsIm1heCI6Ijk2Iiwic3RlcCI6IjAuMSJ9LHsidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6Ik1peCIsImFkZHJlc3MiOiIvQmxpcHBlci9NaXgiLCJpbmRleCI6IjIwIiwibWV0YSI6W3siT1dMIjoiUEFSQU1FVEVSX0QifV0sImluaXQiOiIwLjUiLCJtaW4iOiIwIiwibWF4IjoiMSIsInN0ZXAiOiIwLjAxIn0seyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiUGl0Y2hNb2QiLCJhZGRyZXNzIjoiL0JsaXBwZXIvUGl0Y2hNb2QiLCJpbmRleCI6IjkyIiwibWV0YSI6W3siT1dMIjoiUEFSQU1FVEVSX0IifSx7InVuaXQiOiJzZW1pdG9uZXMifV0sImluaXQiOiIyNCIsIm1pbiI6Ii02NCIsIm1heCI6IjY0Iiwic3RlcCI6IjEifSx7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJSZWxlYXNlIiwiYWRkcmVzcyI6Ii9CbGlwcGVyL1JlbGVhc2UiLCJpbmRleCI6IjQ4IiwibWV0YSI6W3siT1dMIjoiUEFSQU1FVEVSX0MifSx7InVuaXQiOiJtcyJ9XSwiaW5pdCI6IjIwIiwibWluIjoiMiIsIm1heCI6IjEwMCIsInN0ZXAiOiIxIn0seyJ0eXBlIjoiY2hlY2tib3giLCJsYWJlbCI6ImJ5cGFzcyIsImFkZHJlc3MiOiIvQmxpcHBlci9ieXBhc3MiLCJpbmRleCI6IjQwIn1dfV19"; }

/*
 faust2wasm: GRAME 2017-2018
*/
 
'use strict';

// Monophonic Faust DSP
class BlipperProcessor extends AudioWorkletProcessor {
    
    // JSON parsing functions
    static parse_ui(ui, obj, callback)
    {
        for (var i = 0; i < ui.length; i++) {
            BlipperProcessor.parse_group(ui[i], obj, callback);
        }
    }
    
    static parse_group(group, obj, callback)
    {
        if (group.items) {
            BlipperProcessor.parse_items(group.items, obj, callback);
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
            BlipperProcessor.parse_items(item.items, obj, callback);
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
            BlipperProcessor.parse_items(item.items, obj, callback);
        } else if (item.type === "hbargraph"
                   || item.type === "vbargraph") {
            // Keep bargraph adresses
            obj.outputs_items.push(item.address);
            obj.pathTable[item.address] = parseInt(item.index);
        } else if (item.type === "soundfile") {
            // Keep soundfile adresses
            obj.soundfile_items.push(item.address);
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
    
    static b64ToUint6(nChr)
    {
        return nChr > 64 && nChr < 91 ?
        nChr - 65
        : nChr > 96 && nChr < 123 ?
        nChr - 71
        : nChr > 47 && nChr < 58 ?
        nChr + 4
        : nChr === 43 ?
        62
        : nChr === 47 ?
        63
        :
        0;
    }
    
    static atob(sBase64, nBlocksSize)
    {
        if (typeof atob === 'function') {
            return atob(sBase64);
        } else {
            
            var sB64Enc = sBase64.replace(/[^A-Za-z0-9\+\/]/g, "");
            var nInLen = sB64Enc.length;
            var nOutLen = nBlocksSize ? Math.ceil((nInLen * 3 + 1 >> 2) / nBlocksSize) * nBlocksSize : nInLen * 3 + 1 >> 2;
            var taBytes = new Uint8Array(nOutLen);
            
            for (var nMod3, nMod4, nUint24 = 0, nOutIdx = 0, nInIdx = 0; nInIdx < nInLen; nInIdx++) {
                nMod4 = nInIdx & 3;
                nUint24 |= BlipperProcessor.b64ToUint6(sB64Enc.charCodeAt(nInIdx)) << 18 - 6 * nMod4;
                if (nMod4 === 3 || nInLen - nInIdx === 1) {
                    for (nMod3 = 0; nMod3 < 3 && nOutIdx < nOutLen; nMod3++, nOutIdx++) {
                        taBytes[nOutIdx] = nUint24 >>> (16 >>> nMod3 & 24) & 255;
                    }
                    nUint24 = 0;
                }
            }
            return taBytes.buffer;
        }
    }
   
    static get parameterDescriptors() 
    {
        // Analyse JSON to generate AudioParam parameters
        var params = [];
        BlipperProcessor.parse_ui(JSON.parse(getJSONBlipper()).ui, params, BlipperProcessor.parse_item1);
        return params;
    }
    
    constructor(options)
    {
        super(options);
      
        this.json_object = JSON.parse(getJSONBlipper());

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
        
        this.Blipper_instance = new WebAssembly.Instance(BlipperProcessor.wasm_module, BlipperProcessor.importObject);
  	   	this.factory = this.Blipper_instance.exports;
        this.HEAP = this.Blipper_instance.exports.memory.buffer;
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
        
        // soundfile items
        this.soundfile_items = [];

        // Start of HEAP index

        // DSP is placed first with index 0. Audio buffer start at the end of DSP.
        this.audio_heap_ptr = parseInt(this.json_object.size);

        // Setup pointers offset
        this.audio_heap_ptr_inputs = this.audio_heap_ptr;
        this.audio_heap_ptr_outputs = this.audio_heap_ptr_inputs + (this.numIn * this.ptr_size);

        // Setup buffer offset
        this.audio_heap_inputs = this.audio_heap_ptr_outputs + (this.numOut * this.ptr_size);
        this.audio_heap_outputs = this.audio_heap_inputs + (this.numIn * BlipperProcessor.buffer_size * this.sample_size);
        
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
        
        this.loadFile = function (sound_index, sound_ptr, length, sample_rate, channels, buffers)
        {
            /*
             Soundfile layout:
            
                FAUSTFLOAT** fBuffers;
                int fLength;
                int fSampleRate;
                int fChannels;
             
                ===========
                Soundfile struct
                fBuffers[channels]
                fBuffers0
                fBuffers1
                ...
                Soundfile struct
                fBuffers[channels]
                fBuffers0
                fBuffers1
                ...
                ===========
            */
            
            var size_of_soundfile = this.ptr_size + (this.integer_size * 3);  // fBuffers, fLength, fSampleRate, fChannels
            
            //console.log("sound_ptr " + sound_ptr);
            //console.log("size_of_soundfile " + size_of_soundfile);
            
            // end of sounfile
            var end_of_soundfile_ptr = sound_ptr + size_of_soundfile;
            
            this.HEAP32[sound_ptr >> 2] = end_of_soundfile_ptr;
            this.HEAP32[(sound_ptr + 4) >> 2] = length;      // fLength
            this.HEAP32[(sound_ptr + 8) >> 2] = sample_rate; // fSampleRate
            this.HEAP32[(sound_ptr + 12) >> 2] = channels;   // fChannels
            
            //console.log("end_of_soundfile_ptr " + end_of_soundfile_ptr);
            
            // Setup soundfile pointers
            var start_of_soundfile_data_ptr = end_of_soundfile_ptr + this.ptr_size * channels;
            
            for (var i = 0; i < channels; i++) {
                this.HEAP32[(end_of_soundfile_ptr + (i * this.ptr_size)) >> 2] = start_of_soundfile_data_ptr + (i * length * this.sample_size);
            }
            
            // Setup soundfile buffer
            for (var i = 0; i < channels; i++) {
                
                // start of sound buffer
                var start_of_buffer_ptr = start_of_soundfile_data_ptr + (i * length * this.sample_size);
                
                // generate a 440 Hz signal
                for (var j = 0; j < length; j++) {
                    this.HEAPF32[(start_of_buffer_ptr + (j * this.sample_size)) >> 2] = 0.8 * Math.sin((j/length)*2*Math.PI);
                }
            }
            
            // Setup fSoundfile fields in the DSP structure
            //console.log("sound_index " + sound_index);
            //console.log("this.pathTable[this.soundfile_items[sound_index]] " + this.pathTable[this.soundfile_items[sound_index]]);
            
            this.HEAP32[this.pathTable[this.soundfile_items[sound_index]] >> 2] = sound_ptr;
            
            /*
            console.log("start_of_soundfile_data_ptr " + start_of_soundfile_data_ptr);
            console.log("length " + length);
            console.log("channels " + channels);
            console.log("this.sample_size " + this.sample_size);
            console.log("END " + (start_of_soundfile_data_ptr + (channels * length * this.sample_size)));
            */
            
            // End of buffer data;
            return start_of_soundfile_data_ptr + (channels * length * this.sample_size);
        }
        
        this.initAux = function ()
        {
            var i;
            
            if (this.numIn > 0) {
                this.ins = this.audio_heap_ptr_inputs;
                for (i = 0; i < this.numIn; i++) {
                    this.HEAP32[(this.ins >> 2) + i] = this.audio_heap_inputs + ((BlipperProcessor.buffer_size * this.sample_size) * i);
                }
                
                // Prepare Ins buffer tables
                var dspInChans = this.HEAP32.subarray(this.ins >> 2, (this.ins + this.numIn * this.ptr_size) >> 2);
                for (i = 0; i < this.numIn; i++) {
                    this.dspInChannnels[i] = this.HEAPF32.subarray(dspInChans[i] >> 2, (dspInChans[i] + BlipperProcessor.buffer_size * this.sample_size) >> 2);
                }
            }
            
            if (this.numOut > 0) {
                this.outs = this.audio_heap_ptr_outputs;
                for (i = 0; i < this.numOut; i++) {
                    this.HEAP32[(this.outs >> 2) + i] = this.audio_heap_outputs + ((BlipperProcessor.buffer_size * this.sample_size) * i);
                }
                
                // Prepare Out buffer tables
                var dspOutChans = this.HEAP32.subarray(this.outs >> 2, (this.outs + this.numOut * this.ptr_size) >> 2);
                for (i = 0; i < this.numOut; i++) {
                    this.dspOutChannnels[i] = this.HEAPF32.subarray(dspOutChans[i] >> 2, (dspOutChans[i] + BlipperProcessor.buffer_size * this.sample_size) >> 2);
                }
            }
            
            // Parse UI
            BlipperProcessor.parse_ui(this.json_object.ui, this, BlipperProcessor.parse_item2);
            
            /*
            console.log("soundfile_items.length " + this.soundfile_items.length);
            
            // Setup soundfile offset (after audio data)
            this.soundfile_ptr = this.audio_heap_outputs + (this.numOut * BlipperProcessor.buffer_size * this.sample_size);
            
            var sound_ptr1 = this.soundfile_ptr;
            var sound_ptr2 = this.loadFile(0, sound_ptr1, 44100/700, 44100, 2, null);
            var sound_ptr3 = this.loadFile(1, sound_ptr2, 44100/500, 44100, 2, null);
            */
             
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
        otherwise params[i][1] has a length of 128 with possible control change each sample
    	*/
        
        // Update controls
        var params = Object.entries(parameters);
        for (var i = 0; i < params.length; i++) {
            this.HEAPF32[this.pathTable[params[i][0]] >> 2] = params[i][1][0];
        }
        
        // Compute
        this.factory.compute(this.dsp, BlipperProcessor.buffer_size, this.ins, this.outs);
        
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
BlipperProcessor.buffer_size = 128;

BlipperProcessor.importObject = {
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

// Synchronously compile and instantiate the WASM module
try {
    if (BlipperProcessor.wasm_module == undefined) {
        BlipperProcessor.wasm_module = new WebAssembly.Module(BlipperProcessor.atob(getBase64CodeBlipper()));
        registerProcessor('Blipper', BlipperProcessor);
    }
} catch (e) {
    console.log(e); console.log("Faust Blipper cannot be loaded or compiled");
}

