// script.jsEsto n
let noButton = document.getElementById('noButton');
let noMessages = [
    'Pero amooor...',
    'Por favor...',
    'La vamos a pasar super...',
    '¿Me odias cierto?',
    'No es justo...',
    'Hazlo por la aurorita 🥺',
];

let currentMessageIndex = 0;

function rotateButton() {
    // Cambiar el texto del botón "No" cada vez que se presiona
    noButton.innerText = noMessages[currentMessageIndex];
    
    // Actualizar el índice del mensaje
    currentMessageIndex = (currentMessageIndex + 1) % noMessages.length;
}
