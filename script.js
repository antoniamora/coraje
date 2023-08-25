const columna1 = document.getElementById('columna-1');
const columna2 = document.getElementById('columna-2');
const columna3 = document.getElementById('columna-3');

let mostrandoTextoCoraje = false;
let mostrandoTextoMuriel = false;
let mostrandoTextoJusto = false;

columna1.addEventListener('click', function () {
    if (mostrandoTextoCoraje) {
        // Si actualmente estamos mostrando el texto, volvemos a la imagen
        columna1.innerHTML = '<div class="tarjeta"><div class="izquierda"><img src="coraje.webp" alt="Coraje, el perro cobarde" width="300vw" height="310vh"></div></div>';
        mostrandoTextoCoraje = false; // Cambiamos el estado
    } else {
        // Si no estamos mostrando el texto, lo mostramos
        columna1.style.backgroundColor = 'white';
        columna1.textContent = 'Coraje es el protagonista de la serie Coraje, el Perro Cobarde. Es un perro morado que fue encontrado por Muriel Bolsa después de escapar de una clínica veterinaria en Ningún Lugar.';
        mostrandoTextoCoraje = true; // Cambiamos el estado
    }
    columna1.style.cursor = 'pointer'; // Aseguramos que el cursor es 'pointer' en ambos casos
});

columna2.addEventListener('click', function () {
    if (mostrandoTextoMuriel) {
        // Si actualmente estamos mostrando el texto, volvemos a la imagen
        columna2.innerHTML = '<div class="tarjeta"><div class="izquierda"><img src="Muriel.webp" alt="Muriel Bolsa" width="400vw" height="400vh"></div></div>';
        mostrandoTextoMuriel = false; // Cambiamos el estado
    } else {
        columna2.style.backgroundColor = 'white';
        columna2.textContent = 'Muriel es una anciana muy amable y dulce. Rescató a Coraje y vive en el poblado de Ningún Lugar, con su esposo don Justo Bolsa';
        mostrandoTextoMuriel = true;} columna2.style.cursor = 'pointer';});

columna3.addEventListener('click', function () {
    if (mostrandoTextoJusto) {
        columna3.innerHTML = '<div class="tarjeta"><div class="izquierda"><img src="Justo.webp" alt="Justo Bolsa" width="350vw" height="350vh"></div></div>';
        mostrandoTextoJusto = false;
    } else {
        columna3.style.backgroundColor = 'white';
        columna3.textContent = 'Justo Bolsa es un granjero que vive en medio de Ningún Lugar con su esposa Muriel Bolsa y su perro Coraje. Le gusta leer el diario y ver televisión.';
        mostrandoTextoJusto = true;} columna3.style.cursor = 'pointer';});




