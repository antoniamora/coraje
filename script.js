const columnas = document.querySelectorAll('.columna');
let mostrandoTexto = {coraje : false, muriel : false, justo : false};

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

