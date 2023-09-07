const columnas = document.querySelectorAll('.columna');
let mostrandoTexto = {coraje : false, muriel : false, justo : false};
const opciones = document.querySelectorAll('.opcion-1, .opcion-2');
const pantalla = document.getElementById('computador-pantalla');
let i = 0;
let elTexto = "";

columnas.forEach(columna => {
    columna.addEventListener('click', function (e) {
        console.log(e)
        if (mostrandoTexto[e.target.id]) {
            document.querySelectorAll(`img[id="${e.target.id}"]`)[0].style.display = 'flex';
            document.querySelectorAll(`p[id="${e.target.id}"]`)[0].style.display = 'none';
            columna.style.backgroundColor = 'rgb(56, 6, 56)';
        } else {
            columna.style.backgroundColor = 'white';
            document.querySelectorAll(`img[id="${e.target.id}"]`)[0].style.display = 'none';
            document.querySelectorAll(`p[id="${e.target.id}"]`)[0].style.display = 'flex';
        } 
        mostrandoTexto[e.target.id] = !mostrandoTexto[e.target.id];
        columna.style.cursor = 'pointer';
    })
})






