// [WEB CONVERSION] Electron dependency removed
// const { ipcRenderer } = require('electron');
const midiManager = new MidiManager();
const patchText = document.getElementById('23');
const btnUp = document.getElementById('pedal-up');
const btnDown = document.getElementById('pedal-down');
const btnA = document.getElementById('pedal-a');
const btnB = document.getElementById('pedal-b');
const btnC = document.getElementById('pedal-c');
const modeBtn = document.getElementById('pedal-mode');
const A = 0;
const B = 1;
const C = 2;
const UP = 3;
const DOWN = 4;
const PC = 5;
const CC = 6;
const controlBtns = [btnA, btnB, btnC];
const bankBtns = [btnUp, btnDown];
const btnsText = ['A','B','C'];
let deviceOnline = false;
let bankCounter = 0;
let prevPcCounter = 0;
let prevCcCounter = 0;
let prevNoteCounter = 0;
let lastBtnPressed = 0;
let mode = 'PC Mode';
let noteArray = [undefined, undefined, undefined, undefined];
let infoArray = [];
let textInfo;
let channelInfo;
let enableNoteInfo;
const noteEnableButton = document.getElementById('note-button');
const noteEnableSelect = document.getElementById('select-enable');
const channelButton = document.getElementById('channel-button');
const channelSelectGeneral = document.getElementById('select-channel-general');
let enableDisable = 0;
let midiChannel = 0;
noteEnableButton.disabled = true;
channelButton.disabled = true;
noteEnableSelect.addEventListener('change', function() {
    if(noteEnableSelect.selectedIndex === 0){
        noteEnableButton.disabled = true;
    }
    else if(noteEnableSelect.selectedIndex === 1){
        enableDisable = sysexNoteDisable;
        noteEnableButton.disabled = false;
    }
    else if(noteEnableSelect.selectedIndex === 2){
        enableDisable = sysexNoteEnable;
        noteEnableButton.disabled = false;
    }
});
noteEnableButton.addEventListener('click', function() {
    if(deviceOnline){
        const arrayToSend = sysexHeader
                            .concat(sysexProg)
                            .concat(sysexNoteEnabling)
                            .concat(enableDisable)
                            .concat(sysexEnd);
        // ipcRenderer.send('send-sysex', arrayToSend);
        midiManager.sendSysex(arrayToSend);
        const askEnabled = sysexHeader
                            .concat(sysexRequest)
                            .concat(sysexNoteEnabling)
                            .concat(sysexEnd);
        setTimeout(() => {
            // ipcRenderer.send('send-sysex', askEnabled);
            midiManager.sendSysex(askEnabled);
        }, 100);    
        noteEnableSelect.selectedIndex = 0;
        noteEnableButton.disabled = true;
        let enableText;
        if(enableDisable === sysexNoteDisable){
        enableText = 'disable';
        }
        else if(enableDisable === sysexNoteEnable){
        enableText = 'enable';
        }
        infoWindow(`Note mode programmed as ${enableText}`, 'info');
    }
    else if(!deviceOnline){
        infoWindow('GMC-001 offline, please connect the device and retry', 'warn');
    }
});
channelSelectGeneral.addEventListener('change', function() {
    if(channelSelectGeneral.selectedIndex === 0){
        channelButton.disabled = true;
    }
    else{
        channelButton.disabled = false;
        midiChannel = channelSelectGeneral.selectedIndex-1;
    }
});
channelButton.addEventListener('click', function() {
    if(deviceOnline){
        const arrayToSend = sysexHeader
                            .concat(sysexChannel)
                            .concat(midiChannel)
                            .concat(sysexEnd);
        // ipcRenderer.send('send-sysex', arrayToSend);
        midiManager.sendSysex(arrayToSend);
        const askChannel = sysexHeader
                            .concat(sysexRequest)
                            .concat(sysexChannel)
                            .concat(sysexEnd);
        setTimeout(() => {
            // ipcRenderer.send('send-sysex', askChannel);
            midiManager.sendSysex(askChannel);
        }, 100);                   
        channelSelectGeneral.selectedIndex = 0;
        channelButton.disabled = true;
        infoWindow(`Channel ${midiChannel+1} programmed succesfully!`, 'info');
    }
    else if(!deviceOnline){
        infoWindow('GMC-001 offline, please connect the device and retry', 'warn');
    }
});
// [WEB CONVERSION] Replaced ipcRenderer.on('connection-state')
midiManager.onConnectionStateChange = (connected) => {
    const stateText = document.getElementById('state-text');
    const stateImage = document.getElementById('state-img');
    deviceConnected = connected; // Updated variable name to match original var usage if needed, but looks like original arg was shadowing
    if (deviceConnected) {
        stateText.textContent = 'GMC-001: Online';
        stateImage.style.backgroundImage = 'url(src/Images/Online.png)';
        deviceOnline = true;
    } else {
        stateText.textContent = 'GMC-001: Offline';
        stateImage.style.backgroundImage = 'url(src/Images/Offline.png)';
        deviceOnline = false;
    }
};
// [WEB CONVERSION] Replaced other ipcRenderer.on listeners
midiManager.onMessage = (type, infoFromToqui) => {
    if (type === 'info-message') {
        if(Array.isArray(infoFromToqui)) {
            for (let i = 0; i < infoFromToqui.length; i++) {
                infoArray[i] = infoFromToqui[i];
            }
        }
        else{
            if(infoFromToqui < 10){
                textInfo = ' 00'+infoFromToqui;
            }
            else if(infoFromToqui > 9 && infoFromToqui < 100){
                textInfo = ' 0'+infoFromToqui;
            }
            else if(infoFromToqui > 99){
                textInfo = ' '+infoFromToqui;
            }
        }
    }
    else if (type === 'channel-info') {
        channelInfo = infoFromToqui+1;
        if(infoFromToqui < 9){
            channelInfo = '0'+(infoFromToqui+1);
        }
        else{
            channelInfo = (infoFromToqui+1).toString();
        }
        const channelBox = document.getElementById('info-box-channel');
        channelBox.textContent = channelInfo;
    }
    else if (type === 'note-mode-info') {
        if(infoFromToqui === 0){
            enableNoteInfo = 'Disable';
        }
        else if(infoFromToqui === 1){
            enableNoteInfo = 'Enable';
        }
        const noteBox = document.getElementById('info-box-note');
        noteBox.textContent = enableNoteInfo;
    }
    else if (type === 'factory') {
        warnWindow('All your settings will be deleted, and the GMC-001 will be reset to factory settings');
    }
};
const notesText = () => {
    const nota = ['C','C#','D','D#','E','F','F#','G','G#','A','A#','B'];
    const octava = ['-2','-1','0','1','2','3','4','5','6','7','8'];
    let textoNotas = '';
    for(let i = 1 ; i < 5 ; i++){
        if(infoArray[i] !== 0x7F){ 
            textoNotas += nota[infoArray[i] % 12] + octava[Math.floor(infoArray[i] / 12)] + ' ';
        }
    }
    return textoNotas.trim();
}
function infoWindow(text, kind){
    const infoPopUP = document.createElement('div');
    infoPopUP.id = 'info-pop-up';
    infoPopUP.innerHTML = `
        <p id="info-text">${text}</p>
        <div id="logo-container">
            <div id="info-logo"></div>
        </div>
    `;
    const body = document.body;
    body.appendChild(infoPopUP);
    const texto = document.getElementById('info-text');
    if(kind === 'warn'){
        texto.style.color = 'red';
        infoPopUP.style.borderColor = 'red';
    }
    if(kind === 'info'){
        texto.style.color = 'aqua';
        infoPopUP.style.borderColor = 'aqua';
    }
    const backgroundBlur = document.createElement('div');
    backgroundBlur.id = 'black-white';
    body.insertBefore(backgroundBlur, body.firstChild);
    setTimeout(() => {
        infoPopUP.parentNode.removeChild(infoPopUP);
        backgroundBlur.parentNode.removeChild(backgroundBlur);
     }, 2000);
}
function warnWindow(text){
    const infoPopUP = document.createElement('div');
    infoPopUP.id = 'info-pop-up';
    infoPopUP.innerHTML = `
            <p id="info-text">${text}</p>
            <div id="btn-container">
                <button type="button" class="option" id="aceptar">Aceptar</button>
                <button type="button" class="option" id="cancelar">Cancelar</button>
            </div>
    `;
    const body = document.body;
    body.appendChild(infoPopUP);
    const texto = document.getElementById('info-text');
    texto.style.color = 'red';
    infoPopUP.style.borderColor = 'red';
    const backgroundBlur = document.createElement('div');
    backgroundBlur.id = 'black-white';
    body.insertBefore(backgroundBlur, body.firstChild);
    const aceptar = document.getElementById('aceptar');
    const cancelar = document.getElementById('cancelar');
    aceptar.addEventListener('click', () => {
        const sysexToSend = sysexHeader
                            .concat(sysexProg)
                            .concat(sysexFactoryByte)
                            .concat(sysexEnd);
        // ipcRenderer.send('send-sysex', sysexToSend);
        midiManager.sendSysex(sysexToSend);
        infoPopUP.parentNode.removeChild(infoPopUP);
        backgroundBlur.parentNode.removeChild(backgroundBlur);
        infoWindow('Factory settings have been restored. Restarting the GMC-001', 'info')
    });
    cancelar.addEventListener('click', () => {
        infoPopUP.parentNode.removeChild(infoPopUP);
        backgroundBlur.parentNode.removeChild(backgroundBlur);
    });
}
function browseMode(){
    modeBtn.addEventListener('click', function() {
        for(let i = 0 ; i < 7 ; i++){
            clearInterval(interval[i]);
        }
        blinking = false;
        if(mode === 'PC Mode'){
            mode = 'CC Mode';
            apagar(ledPc);
            apagar(controlLeds[lastBtnPressed]);
            apagar(ledUp);
            apagar(ledDown);
            encender(ledCc);
            prevPcCounter = bankCounter;
            bankCounter = prevCcCounter;
        }
        else if(mode === 'CC Mode'){
            mode = 'Loop Mode';
            apagar(ledCc);
            apagar(controlLeds[lastBtnPressed]);
            apagar(ledUp);
            apagar(ledDown);
            alternateTwoLeds(ledPc, ledCc, 250);
            prevCcCounter = bankCounter;
            bankCounter = prevPcCounter;
        }
        else if(mode === 'Loop Mode'){
            mode = 'Note Mode';
            clearInterval(interval[PC]);
            clearInterval(interval[CC]);
            apagar(controlLeds[lastBtnPressed]);
            encender(ledPc);
            encender(ledCc);
            bankCounter = prevNoteCounter;
        }
        else if(mode === 'Note Mode'){
            mode = 'PC Mode';
            apagar(ledCc);
            apagar(ledUp);
            apagar(ledDown);
            apagar(controlLeds[lastBtnPressed]);
            prevNoteCounter = bankCounter;
            bankCounter = prevPcCounter;
        }
        lcdTextCreator();
    });
}
function controlPedals(){
    for(let i = 0 ; i < 3 ; i++){
        controlBtns[i].addEventListener('click', function() {
            if(lastBtnPressed !== i){
                apagar(controlLeds[lastBtnPressed]);
            }
            encender(controlLeds[i]);
            if(mode === 'PC Mode'){
                const text = document.getElementById('25');
                text.textContent = btnsText[i];
            }
            lastBtnPressed = i;
            blinking = false;
            clearInterval(interval[UP]);
            clearInterval(interval[DOWN]);
            apagar(ledUp);
            apagar(ledDown);
            let arrayToSend;
            if(!deviceOnline){
                infoWindow('GMC-001 offline, please connect the device and retry', 'warn');
            }
            else if(deviceOnline){
                switch(mode){
                    case 'PC Mode':
                        arrayToSend = sysexHeader
                                    .concat(sysexRequest)
                                    .concat(sysexProgramChange)
                                    .concat(bankCounter)
                                    .concat(i)
                                    .concat(sysexEnd);
                        // ipcRenderer.send('send-sysex', arrayToSend);
                        midiManager.sendSysex(arrayToSend);
                        setTimeout(() => {
                            createPcPopUp(bankCounter, btnsText[i], textInfo);
                        }, 300);
                        break;
                    case 'CC Mode':
                        arrayToSend = sysexHeader
                                    .concat(sysexRequest)
                                    .concat(sysexControlChange)
                                    .concat(bankCounter)
                                    .concat(i)
                                    .concat(sysexEnd);
                        // ipcRenderer.send('send-sysex', arrayToSend);
                        midiManager.sendSysex(arrayToSend);
                        setTimeout(() => {
                            createPcPopUp(bankCounter, btnsText[i], textInfo);
                        }, 300);
                        break;
                        
                    case 'Loop Mode':
                        arrayToSend = sysexHeader
                                    .concat(sysexRequest)
                                    .concat(sysexLoopCC)
                                    .concat(i)
                                    .concat(sysexEnd);
                        // ipcRenderer.send('send-sysex', arrayToSend);
                        midiManager.sendSysex(arrayToSend);
                        setTimeout(() => {
                            createPcPopUp(bankCounter, btnsText[i], textInfo);
                        }, 300);
                        break; 
                    case 'Note Mode':
                        arrayToSend = sysexHeader
                                    .concat(sysexRequest)
                                    .concat(sysexNote)
                                    .concat(bankCounter)
                                    .concat(i)
                                    .concat(sysexEnd);
                        // ipcRenderer.send('send-sysex', arrayToSend);
                        midiManager.sendSysex(arrayToSend);
                        setTimeout(() => {
                            createNotePopUp(bankCounter, btnsText[i], infoArray[0], notesText());
                        }, 300);
                        break;
                }
            }
        });
    }
}
function browseBanks(){
    for(let i = 0 ; i < 2 ; i++){
        bankBtns[i].addEventListener('click', function() {
            switch(mode){
                case 'PC Mode':
                    if(i === 0){
                        bankCounter++;
                        if(bankCounter > 9){
                            bankCounter = 0;
                        }
                    }
                    if(i === 1){
                        bankCounter--;
                        if(bankCounter < 0){
                            bankCounter = 9;
                        }
                    }
                    break;
                case 'CC Mode':
                    if(i === 0){
                        bankCounter++;
                        if(bankCounter > 2){
                            bankCounter = 0;
                        }
                    }
                    if(i === 1){
                        bankCounter--;
                        if(bankCounter < 0){
                            bankCounter = 2;
                        }
                    }
                    break;
                case 'Loop Mode':
                    if(i === 0){
                    }
                    if(i === 1){
                    }
                    break;
                case 'Note Mode':
                    if(i === 0){
                        bankCounter++;
                        if(bankCounter > 2){
                            bankCounter = 0;
                        }
                    }
                    if(i === 1){
                        bankCounter--;
                        if(bankCounter < 0){
                            bankCounter = 2;
                        }
                    }
                    break;
            }
            if(mode === 'PC Mode'){
                patchText.textContent = bankCounter;
                const text = document.getElementById('25');
                text.textContent = '';
            }
            if(mode === 'CC Mode'){
                const text = document.getElementById('15');
                text.textContent = bankCounter;
            }
            if(mode === 'Loop Mode'){
            }
            if(mode === 'Note Mode'){
                const text = document.getElementById('22');
                text.textContent = bankCounter;
            }
            apagar(controlLeds[lastBtnPressed]);
            if(mode !== 'Loop Mode'){
                if(!blinking){
                    blinking = true;
                    blinkLed(ledUp, 250);
                    blinkLed(ledDown, 250);
                }
            }
        });
    }
}
function createPcPopUp(bank, pedal, value) {
    if(mode === 'PC Mode'){
        title = 'Program Change Value';
        progText = 'Program Change Number: ';
    }
    if(mode === 'CC Mode'){
        title = 'Control Change Value';
        progText = 'CC Number: ';
    }
    if(mode === 'Loop Mode'){
        title = 'Loop CC Values';
        progText = 'CC Number: ';
    }
    const popUpPc = document.createElement('div');
    popUpPc.id = 'pop-up-pc';
    let htmlContent;
    if(mode === 'PC Mode' || mode === 'CC Mode'){
        htmlContent = `
            <div class="pop-up-header">
                <p class="pop-up-title">${title}</p>
                <div class="close">x</div>
            </div>
            <div class="pop-up-content">
                <div class="sub-pop-content">
                    <div class="target-text">PATCH ${bank}-${pedal}</div>
                    <div id="current-cfg">Current value: ${value}</div>
                    <div class="cfg-container">
                        <p class="param-title">${progText}</p>
                        <select id="select-pc" name="mySelect">
                            <!-- Las opciones se agregarán aquí dinámicamente -->
                        </select>
                    </div>
                </div>    
                <button class="prog-button">Program!</button>
            </div>
        `;
    }
    if(mode === 'Loop Mode'){
        htmlContent = `
            <div class="pop-up-header">
                <p class="pop-up-title">${title}</p>
                <div class="close">x</div>
            </div>
            <div class="pop-up-content">
                <div class="sub-pop-content">
                    <div class="target-text">Pedal ${pedal}</div>
                    <div id="current-cfg">Current value: ${value}</div>
                    <div class="cfg-container">
                        <p class="param-title">${progText}</p>
                        <select id="select-pc" name="mySelect">
                            <!-- Las opciones se agregarán aquí dinámicamente -->
                        </select>
                    </div>
                </div>    
                <button class="prog-button">Program!</button>
            </div>
        `;
    }
    popUpPc.innerHTML = htmlContent;
    const body = document.body;
    body.appendChild(popUpPc);
    const backgroundBlur = document.createElement('div');
    backgroundBlur.id = 'black-white';
    body.insertBefore(backgroundBlur, body.firstChild);
    function populateSelect() {
        const selectElement = document.getElementById('select-pc');
        selectElement.innerHTML = '';
        const undefinedOption = document.createElement('option');
        undefinedOption.value = '';
        undefinedOption.textContent = 'undefined';
        selectElement.appendChild(undefinedOption);
        for (let i = 0; i <= 127; i++) {
            const option = document.createElement('option');
            option.value = i;
            option.textContent = i;
            selectElement.appendChild(option);
        }
    }
    populateSelect();
    const programButton = document.querySelector('.prog-button');
    programButton.disabled = true;
    let selectElement = document.getElementById('select-pc');
    let selectedValue;
    
    selectElement.addEventListener('change', function(){
        if(selectElement.selectedIndex === 0){
            programButton.disabled = true;
        }
        else if(selectElement.selectedIndex !== 0){
            programButton.disabled = false;
            selectedValue = selectElement.selectedIndex -1;
        }
    });
    programButton.addEventListener('click', function() {
        function pedalCalculator(pedal){
            if(pedal === 'A'){return 0;}
            if(pedal === 'B'){return 1;}
            if(pedal === 'C'){return 2;}
        }
        if(mode === 'PC Mode'){
            const arrayToSend = sysexHeader.concat(sysexProg)
                               .concat(sysexProgramChange)
                               .concat(bank)
                               .concat(pedalCalculator(pedal))
                               .concat(selectedValue)
                               .concat(sysexEnd);
            // ipcRenderer.send('send-sysex', arrayToSend);
            midiManager.sendSysex(arrayToSend);
        }
        if(mode === 'CC Mode'){
            const arrayToSend = sysexHeader.concat(sysexProg)
                               .concat(sysexControlChange)
                               .concat(bank)
                               .concat(pedalCalculator(pedal))
                               .concat(selectedValue)
                               .concat(sysexEnd);
            // ipcRenderer.send('send-sysex', arrayToSend);
            midiManager.sendSysex(arrayToSend);                   
        }
        if(mode === 'Loop Mode'){
            const arrayToSend = sysexHeader.concat(sysexProg)
                               .concat(sysexLoopCC)
                               .concat(pedalCalculator(pedal))
                               .concat(selectedValue)
                               .concat(sysexEnd);
            // ipcRenderer.send('send-sysex', arrayToSend);
            midiManager.sendSysex(arrayToSend);                   
        }        
        popUpPc.parentNode.removeChild(popUpPc);
        backgroundBlur.parentNode.removeChild(backgroundBlur);
        if(mode === 'PC Mode'){
            infoWindow(`Program Change in ${bank}-${pedal} programmed as ${selectedValue}`, 'info');
        }
        if(mode === 'CC Mode'){
            infoWindow(`Control Change in ${bank}-${pedal} programmed as ${selectedValue}`, 'info');
        }
        if(mode === 'Loop Mode'){
            infoWindow(`Loop pedal in ${bank}-${pedal} programmed as ${selectedValue}`, 'info');
        }
    });
    const closePopUp = document.querySelector('.close');
    closePopUp.addEventListener('click', function() {
        popUpPc.parentNode.removeChild(popUpPc);
        backgroundBlur.parentNode.removeChild(backgroundBlur);
    });
}
//Ejemplo de mensaje para programar Note: 
//F0 74 6F 71 0A 0C 02 02 00 3C 40 7F 7F F7 -------> Banco 2, patch C, Canal 1, Nota C, Nota E, nullNote, nullNote
//Bytes 0,1,2,3: sysexHeader
//Byte 4: sysexProg
//Byte 5: sysexNote
//Byte 6: Banco
//Byte 7: Pedal
//Byte 8: Canal midi
//Byte 9: Nota 1
//Byte 10: Nota 2
//Byte 11: Nota 3
//Byte 12: Nota 4
//Byte 13: sysexEnd
function createNotePopUp(bank, patch, channel, notes){
    const popUpNote = document.createElement('div');
    popUpNote.id = 'pop-up-note';
    popUpNote.innerHTML = noteContent(bank, patch, channel, notes);
    const body = document.body;
    body.appendChild(popUpNote);
    const backgroundBlur = document.createElement('div');
    backgroundBlur.id = 'black-white';
    body.insertBefore(backgroundBlur, body.firstChild);
    
    noteArrayCreator(bank, patch);
    const progButton = document.getElementById('program-btn');
    progButton.addEventListener('click', function(){
        popUpNote.parentNode.removeChild(popUpNote);
        backgroundBlur.parentNode.removeChild(backgroundBlur);
        infoWindow(`Programmed notes in ${bank}-${patch} with selected values`, 'info');
    });
    const closePopUp = document.getElementById('close');
    closePopUp.addEventListener('click', function() {
        popUpNote.parentNode.removeChild(popUpNote);
        backgroundBlur.parentNode.removeChild(backgroundBlur);
    });
}
function arrayValidate(array, byte, button) {
    button.disabled = false;
    if (byte === undefined) {
        button.disabled = true;
    }
    for (let i = 0; i < 4; i++) {
        if (array[i] === undefined) {
            button.disabled = true;
            break;
        }
    }
}
function noteArrayCreator(bank, patch){
    const channel = document.getElementById('Canal');                       //Selector de canal
    const chord_checkbox = document.getElementById('checkbox1');            //Selector de checkbox para el chord builder
    const note_checkbox = document.getElementById('checkbox2');             //Selector de checkbox para la programación nota por nota
    const chordSelection = document.querySelectorAll('.chordBuilder');      //Todos los selectores necesarios para chord builder
    const noteChord = document.getElementById('Note');                      //Selector de nota raíz del chor builder
    const typeChord = document.getElementById('Chord');                     //Selector de acorde del chord builder
    const noteByNote = document.querySelectorAll('.noteSelection');         //Todos los selectores de nota de la programación nota por nota
    const octave = document.querySelectorAll('.octaveSelection');           //Todos los selectores de octava de la programación nota por nota
    const progButton = document.getElementById('program-btn');              //Botón de programación
    progButton.disabled = true;                                             //Se inicia el boton como deshabilitado
    let channelSelected = undefined;                                        //Se inicia el canal como no definido
    let chordBuilderSelection = [undefined, undefined];                     //Contiene los 2 valores a ejecutar en la función chordBuilder, nota y especie, si uno falta la función no se ejecuta
    let notes = [undefined, undefined, undefined, undefined];               //Guarda temporalmente los valores de las notas del modo note by note, para luego calcular el valor de la nota real
    let octaves = [undefined, undefined, undefined, undefined];             //Guarda temporalmente los valores de octava del modo note by bote, para luego calcular el valor de la nota real
    
    //Aquí establecemos las opciones de Note By Note deshabilitadas para la primera
    //apertura de la ventana
    let windowBegin = true;
    if (windowBegin){
        note_checkbox.checked = false;
        noteByNote.forEach(note => note.disabled = true);
        octave.forEach(octave => octave.disabled = true);
        chordSelection.forEach(octave => octave.disabled = false);
        windowBegin = false;   
    }
    //Aquí chequeamos cual de los checkbox esta seleccionado y habilitamos o 
    //deshabilitamos opciones según ello. También vaciamos el array en el caso
    //que el usuario cambie de opción, para así evitar problemas
    chord_checkbox.addEventListener('change', function() {
        if (chord_checkbox.checked) {
            note_checkbox.checked = false;
            noteByNote.forEach(note => note.disabled = true);
            noteByNote.forEach((element, index) => noteByNote[index].value = '');
            octave.forEach(octave => octave.disabled = true);
            octave.forEach((element, index) => octave[index].value = '');
            chordSelection.forEach(chordSelected => chordSelected.disabled = false);
            noteArray.fill(undefined);
            notes.forEach((element, index) => notes[index] = undefined);
            octaves.forEach((element, index) => octaves[index] = undefined);
            progButton.disabled = true;            
        }
    });
    note_checkbox.addEventListener('change', function() {
        if (note_checkbox.checked) {
            chord_checkbox.checked = false;
            noteByNote.forEach(note => note.disabled = false);
            chordSelection.forEach(chordSelected => chordSelected.disabled = true);
            chordSelection.forEach((element, index) => chordSelection[index].value = '');
            noteArray.fill(undefined);
            chordBuilderSelection.forEach((element, index) => chordBuilderSelection[index] = undefined);
            progButton.disabled = true;    
        }
    });
    
    channel.addEventListener('change', function() {
        channelSelected = parseInt(channel.value, 10);
        if(isNaN(channelSelected)){
            channelSelected = undefined;
            progButton.disabled = true;
        }
        arrayValidate(noteArray, channelSelected, progButton);
    });
    noteChord.addEventListener('change', function(){
        if(noteChord.selectedIndex === 0){
            chordBuilderSelection[0] = undefined;
            progButton.disabled = true;
        }
        else{
            chordBuilderSelection[0] = noteChord.selectedIndex - 1 + 60;
        }
        if(chordBuilderSelection[0] === undefined || chordBuilderSelection[1] === undefined){
            progButton.disabled = true;
        }
        else{
            noteArray = chordBuilder(chordBuilderSelection[0], chordBuilderSelection[1]);
            arrayValidate(noteArray, channelSelected, progButton);
        }    
    });
    typeChord.addEventListener('change', function(){
        if(typeChord.selectedIndex === 0){
            chordBuilderSelection[1] = undefined;
            progButton.disabled = true;
        }
        else{
            chordBuilderSelection[1] = typeChord.selectedIndex;
        }
        if(chordBuilderSelection[1] === undefined || chordBuilderSelection[1] === undefined){
            progButton.disabled = true;
        }
        else{
            noteArray = chordBuilder(chordBuilderSelection[0], chordBuilderSelection[1]);
            arrayValidate(noteArray, channelSelected, progButton);
        }    
    });
    for(let i = 0 ; i < 4 ; i++){
        noteByNote[i].addEventListener('change', function(){
            if(noteByNote[i].selectedIndex === 0){
                octave[i].disabled = true;
                notes[i] = undefined;
            }
            else if(noteByNote[i].selectedIndex === 1){
                octave[i].disabled = true;
                noteArray[i] = 0x7F;
                arrayValidate(noteArray, channelSelected, progButton);
            }
            else{
                notes[i] = noteByNote[i].selectedIndex -2;
                octave[i].disabled = false;
                if(octaves[i] !== undefined){
                    noteArray[i] = noteCalculator(notes[i], octaves[i]);
                    arrayValidate(noteArray, channelSelected, progButton);
                }
            }
        });
        octave[i].addEventListener('change', function(){
            if(octave[i].selectedIndex === 0){
                octaves[i] = undefined;
            }
            else{
                octaves[i] = octave[i].selectedIndex -1;
                if(notes[i] !== undefined){
                    noteArray[i] = noteCalculator(notes[i], octaves[i]);
                    arrayValidate(noteArray, channelSelected, progButton);
                }
            }
        });
    }
    progButton.addEventListener('click', function(event) {
        event.preventDefault();
        function pedalCalculator(pedal){
            if(pedal === 'A'){return 0;}
            if(pedal === 'B'){return 1;}
            if(pedal === 'C'){return 2;}
        }
        const arrayToSend = sysexHeader
                            .concat(sysexProg)
                            .concat(sysexNote)
                            .concat(bank)
                            .concat(pedalCalculator(patch))
                            .concat(channelSelected)
                            .concat(noteArray)
                            .concat(sysexEnd);
        // ipcRenderer.send('send-sysex', arrayToSend);
        midiManager.sendSysex(arrayToSend);
        // console.log(arrayToSend.map(byte => byte.toString(16).padStart(2, '0')).join(' '));
        channelSelected = undefined;
        noteArray.forEach((element, index) => noteArray[index] = undefined);
        noteByNote.forEach((element, index) => noteByNote[index].value = '');
        octave.forEach((element, index) => octave[index].value = '');
        channel.value = '';
        noteChord.value = '';
        typeChord.value = '';
        chordBuilderSelection.forEach((element, index) => chordBuilderSelection[index] = undefined);
        progButton.disabled = true;
    });
}
function noteCalculator(note, octave){
    const realNote = (octave * 12) + note;
    return realNote
}
function lcdTextCreator(){
    const programChange1 = [' ','P','r','o','g','r','a','m',' ','C','h','a','n','g','e',' '];
    const programChange2 = ['P','a','t','c','h',':',' ',' ','-',' ',' ',' ',' ',' ',' ',' '];
    const controlChange1 = ['C','o','n','t','r','o','l',' ','C','h','a','n','g','e',' ',' '];
    const controlChange2 = ['A',' ',' ',' ',' ',' ',' ','B',' ',' ',' ',' ',' ',' ',' ','C'];
    const looperMode1 = [' ',' ','L','o','o','p','e','r',' ','M','o','d','e',' ',' ',' '];
    const looperMode2 = [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' '];
    const noteMode1 = [' ',' ',' ','N','o','t','e','s',' ','M','o','d','e',' ',' ',' '];
    const noteMode2 = ['B','a','n','k',':',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' '];
    if(mode === 'PC Mode'){
        for (let i = 0; i < 16; i++) {
            const id = i.toString();
            const element = document.getElementById(id);
            element.textContent = programChange1[i];
        }
        for (let i = 16; i < 32; i++) {
            const id = i.toString();
            const element = document.getElementById(id);
            element.textContent = programChange2[i-16];
        }
        const element = document.getElementById(23);
        element.textContent = bankCounter;
    }
    if(mode === 'CC Mode'){
        for (let i = 0; i < 16; i++) {
            const id = i.toString();
            const element = document.getElementById(id);
            element.textContent = controlChange1[i];
        }
        for (let i = 16; i < 32; i++) {
            const id = i.toString();
            const element = document.getElementById(id);
            element.textContent = controlChange2[i-16];
        }
        const element = document.getElementById(15);
        element.textContent = bankCounter;
    }
    if(mode === 'Loop Mode'){
        for (let i = 0; i < 16; i++) {
            const id = i.toString();
            const element = document.getElementById(id);
            element.textContent = looperMode1[i];
        }
        for (let i = 16; i < 32; i++) {
            const id = i.toString();
            const element = document.getElementById(id);
            element.textContent = looperMode2[i-16];
        }
    }
    if(mode === 'Note Mode'){
        for (let i = 0; i < 16; i++) {
            const id = i.toString();
            const element = document.getElementById(id);
            element.textContent = noteMode1[i];
        }
        for (let i = 16; i < 32; i++) {
            const id = i.toString();
            const element = document.getElementById(id);
            element.textContent = noteMode2[i-16];
        }
        const element = document.getElementById(22);
        element.textContent = bankCounter;
    }
}
lcdTextCreator();
browseMode();
controlPedals();
browseBanks();