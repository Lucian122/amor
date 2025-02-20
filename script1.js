function reemplazarPorTexto(boton, texto) {
    // Reemplaza el texto del botón con el texto proporcionado
    boton.textContent = texto;
    boton.style.backgroundColor = "#888"; // Cambia el color de fondo si lo deseas
    boton.style.cursor = "default"; // Deshabilita el cursor de puntero después de hacer clic
}
