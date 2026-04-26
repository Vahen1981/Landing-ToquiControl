class MidiManager {
    constructor() {
        this.midiAccess = null;
        this.input = null;
        this.output = null;
        this.deviceName = 'ToquiControl GMC-001';
        this.isConnected = false;
        
        // Event listeners
        this.onConnectionStateChange = null; // (isConnected) => {}
        this.onMessage = null; // (messageType, data) => {}
        
        // Constants from main.js
        this.toquiInfoMessage = [0xF0, 0x74, 0x6F, 0x71, 0x10];
        this.sysexNote = 0x0C;
        this.sysexControlChange = 0x0D;
        this.sysexProgramChange = 0x0E;
        this.sysexLoopCC = 0x11;
        this.sysexChannel = 0x13;
        this.sysexNoteEnabling = 0x12;
        this.init();
    }
    async init() {
        if (!navigator.requestMIDIAccess) {
            alert('Web MIDI API not supported in this browser. Please use Chrome, Edge, or Opera.');
            return;
        }
        try {
            this.midiAccess = await navigator.requestMIDIAccess({ sysex: true });
            
            this.midiAccess.onstatechange = (e) => {
                this.checkConnection();
            };
            
            this.checkConnection();
        } catch (err) {
            // alert('MIDI Access Denied. This app requires MIDI permissions to work.');
        }
    }
    checkConnection() {
        let inputFound = false;
        let outputFound = false;
        if (this.midiAccess) {
            // Find Input
            for (let entry of this.midiAccess.inputs) {
                const input = entry[1];
                if (input.name === this.deviceName) {
                    if (!this.input || this.input.id !== input.id) {
                        this.input = input;
                        this.input.onmidimessage = this.handleMidiMessage.bind(this);
                        console.log('MIDI Input Connected:', input.name);
                    }
                    inputFound = true;
                    break;
                }
            }
            // Find Output
            for (let entry of this.midiAccess.outputs) {
                const output = entry[1];
                if (output.name === this.deviceName) {
                    if (!this.output || this.output.id !== output.id) {
                        this.output = output;
                        console.log('MIDI Output Connected:', output.name);
                    }
                    outputFound = true;
                    break;
                }
            }
        }
        const newConnectionState = inputFound && outputFound;
        
        // Only trigger change if state actually changed
        if (newConnectionState !== this.isConnected) {
            this.isConnected = newConnectionState;
            if (this.onConnectionStateChange) {
                this.onConnectionStateChange(this.isConnected);
            }
            if (this.isConnected) {
                this.askFirstInfo();
            }
        }
        
        if (!inputFound) this.input = null;
        if (!outputFound) this.output = null;
    }
    sendSysex(data) {
        if (this.output && this.isConnected) {
            this.output.send(data);
        }
    }
    handleMidiMessage(event) {
        const message = Array.from(event.data);

        if (this.isToquiInfoMessage(message)) {
            // Sysex Program Change or Control Change
            if (message[5] === this.sysexProgramChange || message[5] === this.sysexControlChange) {
                const infoFromToqui = message[8];
                this.dispatchMessage('info-message', infoFromToqui);
            }
            // Sysex Loop CC
            if (message[5] === this.sysexLoopCC) {
                const infoFromToqui = message[7];
                this.dispatchMessage('info-message', infoFromToqui);
            }
            // Sysex Note
            if (message[5] === this.sysexNote) {
                const infoFromToqui = [message[8], message[9], message[10], message[11], message[12]];
                this.dispatchMessage('info-message', infoFromToqui);
            }
            // Sysex Channel
            if (message[5] === this.sysexChannel) {
                const infoFromToqui = message[6];
                this.dispatchMessage('channel-info', infoFromToqui);
            }
            // Sysex Note Enabling
            if (message[5] === this.sysexNoteEnabling) {
                const infoFromToqui = message[6];
                this.dispatchMessage('note-mode-info', infoFromToqui);
            }
        }
    }
    isToquiInfoMessage(msg) {
        if (msg.length < 5) return false;
        for (let i = 0; i < 5; i++) {
            if (msg[i] !== this.toquiInfoMessage[i]) {
                return false;
            }
        }
        return true;
    }
    askFirstInfo() {
        const askChannel = [0xF0, 0x74, 0x6F, 0x71, 0x0B, 0x13, 0xF7];
        const askNote = [0xF0, 0x74, 0x6F, 0x71, 0x0B, 0x12, 0xF7];
        
        if (this.output) {
            this.sendSysex(askChannel);
            setTimeout(() => {
                this.sendSysex(askNote);
            }, 100);
        }
    }
    triggerFactorySettings() {
        if (this.onMessage) {
            this.onMessage('factory', null);
        }
    }
    dispatchMessage(type, data) {
        if (this.onMessage) {
            this.onMessage(type, data);
        }
    }
}