//Constantes MIDI
const pcByte = 0xC0;
const ccByte = 0xB0;
const noteOnByte = 0x90;
const noteOffByte = 0x80;

//Crearemos constantes que identifican los parámetros que enviaremos en un sysex
//Encabezado de sysex
const sysexHeader = [0xF0, 0x74, 0x6F, 0x71];

//Byte 4: Indica Acción a realizar
//Programación del dispositivo
const sysexProg = 0x0A;
//Solicitud de datos a dispositivo
const sysexRequest = 0x0B;
//Info enviada desde el dispositivo
const sysexInfo = 0x10;
//Programación de canal midi general
const sysexChannel = 0x13;

//Byte 5: Indica tipo de mensaje que se programa o que se solicita
//Note (On o Off)
const sysexNote = 0x0C;
//Control Change
const sysexControlChange = 0x0D;
//Program Change
const sysexProgramChange = 0x0E;
//CC del Loop Mode
const sysexLoopCC = 0x11;
//Byte nª5 para Habilitar o deshabilitar el Note Mode
const sysexNoteEnabling = 0x12;
//Factory Settings
const sysexFactoryByte = 0x0D;

//Byte nº6 para Habilitar modo Note
const sysexNoteEnable = 0x01;
//Byte nº6 para Deshabilitar modo Note
const sysexNoteDisable = 0x00;

//Byte 6, 7, 8: Indican banco, pedal y valor. En Loop Mode solo se necesita pedal y valor

//Finalmente el final de sysex
const sysexEnd = 0xF7;




//Estructura de mensaje de programación de PC o CC: 
//Bytes 0, 1, 2, 3: sysexHeader
//Byte 4: sysexProg
//Byte 5: sysexProgramChange o sysexControlChange
//Byte 6: Banco, valores entre 0 y 9(PC) o valores entre 0 y 2(CC) 
//Byte 7: Pedal, valores entre 0 y 2
//Byte 8: Valor midi (entre 0 y 127)
//Byte 9: sysexEnd
//
//Ejemplo de mensaje para programar PC: 
//F0 74 6F 71 0A 0E 08 01 7E F7 -------> Banco 8, patch B, PC#126
//Ejemplo de mensaje para programar CC: 
//F0 74 6F 71 0A 0D 01 00 7D F7 -------> Banco 2, patch A, PC#125

//Estructura de mensaje de programación CC del Loop Mode: 
//Bytes 0, 1, 2 ,3: sysexHeader
//Byte 4: sysexProg
//Byte 5: sysexLoopCC
//Byte 6: Pedal que se programa, valores entre 0 y 2 
//Byte 7: Valor midi (entre 0 y 127)
//Byte 8: sysexEnd
//
//Ejemplo de mensaje para programar Loop: 
//F0 74 6F 71 0A 11 01 7E F7 -------> Pedal B, CC#126

//Estructura de mensaje de solicitud de info (PC, CC): 
//Bytes 0, 1, 2, 3: sysexHeader
//Byte 4: sysexRequest
//Byte 5: Tipo de mensaje que se solicita sysexProgramChange o sysexControlChange
//Byte 6: Banco, valores entre 0 y 9(PC) o valores entre 0 y 2(CC) 
//Byte 7: Pedal, valores entre 0 y 2
//Byte 8: sysexEnd
//
//Ejemplo de mensaje de solicitud de ProgramChange
//F0 74 6F 71 0B 0E 00 00 F7 -------> Se solicita el valor del banco 0, pedal A
//Ejemplo de mensaje de solicitud de ControlChange
//F0 74 6F 71 0B 0D 00 01 F7 -------> Se solicita el valor del banco 0, pedal B
//Ejemplo de mensaje de respuesta(PC):
//F0 74 6F 71 10 0E 00 00 7F F7 ----> La respuesta del banco 0, pedal A es 7F (o 127)
//Ejemplo de mensaje de respuesta(CC):
//F0 74 6F 71 10 0D 00 00 7F F7 ----> La respuesta del banco 0, pedal B es 7F (o 127)

//Estructura de mensaje de solicitud de info de Loop Mode: 
//Bytes 0, 1, 2, 3: sysexHeader
//Byte 4: sysexRequest
//Byte 5: sysexLoopCC
//Byte 6: Pedal, valores entre 0 y 2
//Byte 7: sysexEnd
//
//Ejemplo de mensaje de solicitud de info del Loop: 
//F0 74 6F 71 0B 11 01 F7 -------> Solicitud de info del pedal B