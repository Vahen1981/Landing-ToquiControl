function chordBuilder(note, chordType) {
    let rootNote = note;
    let chord = []; // Inicializar el arreglo para el acorde
    
    // Definir los tipos de acordes como constantes
    const major = 1;
    const minor = 2;
    const dim = 3;
    const maj7 = 4;
    const minMaj7 = 5;
    const minor7 = 6;
    const dominant7 = 7;
    const halfDim7 = 8;
    const dim7 = 9;

    // Calcular los intervalos para cada tipo de acorde
    let thirdMinor = rootNote + 3;
    let thirdMajor = rootNote + 4;
    let fifthJusta = rootNote + 7;
    let fifthDim = rootNote + 6;
    let seventhMinor = rootNote + 10;
    let seventhMajor = rootNote + 11;
    let seventhDim = rootNote + 9;

    // Construir el acorde basado en el tipo
    switch (chordType) {
        case major:
            chord = [rootNote, thirdMajor, fifthJusta, 0x7F];
            break;
        case minor:
            chord = [rootNote, thirdMinor, fifthJusta, 0x7F];
            break;
        case dim:
            chord = [rootNote, thirdMinor, fifthDim, 0x7F];
            break;
        case maj7:
            chord = [rootNote, thirdMajor, fifthJusta, seventhMajor];
            break;
        case minMaj7:
            chord = [rootNote, thirdMinor, fifthJusta, seventhMajor];
            break;
        case minor7:
            chord = [rootNote, thirdMinor, fifthJusta, seventhMinor];
            break;
        case dominant7:
            chord = [rootNote, thirdMajor, fifthJusta, seventhMinor];
            break;
        case halfDim7:
            chord = [rootNote, thirdMinor, fifthDim, seventhMinor];
            break;
        case dim7:
            chord = [rootNote, thirdMinor, fifthDim, seventhDim];
            break;
        default:
            return []; // Retorna un arreglo vacío si el tipo de acorde no es válido
    }

    // Ajustar las notas si exceden el valor 71
    for (let i = 0; i < chord.length; i++) {
        if (chord[i] > 71 && chord[i] !== 127) {
            chord[i] = chord[i] - 12;
        }
    }

    return chord;
}