const pantalla = document.getElementById('pantalla');
const botones = document.querySelectorAll('button');

const data = {
    opcion1 : [
        {
            texto : 'QUÉ NECIO... <br> ¿QUIERES SABER DE SOMBRAS DIABÓLICAS?',
            boton : 'NO LO SÉ',
            audio : new Audio('necio.m4a')
        },
        {
            texto : 'VAYA PERDEDOR... CLARO QUE LO SABES',
            boton : 'BUSCAR',
            audio : new Audio('perdedor.m4a')
        },
        {
            texto : 'BUSCANDO............ BÚSQUEDA TERMINADA... UN TEMA',
            boton : 'VER',
            audio : new Audio('busqueda.mp3')
        },
        {
            texto : 'SOMBRAS DIABÓLICAS............ OH...... YO NO LAS QUERRÍA EN MI CASA',
            boton : 'DESHACERSE',
            audio : new Audio('sombras.m4a')
        },
        {
            texto : 'CÓMO DESHACERSE DE LAS SOMBRAS DIABÓLICAS <br> 1. CON UNA CONVERSACIÓN AGRADABLE <br> 2. MÚDATE DE CASA',
            audio : new Audio('deshacerse.m4a')
        }
    ],
    opcion2 : [
        {
            texto : 'OYE... NO TIENES QUE TECLEAR TAN FUERTE',
            boton : 'HAY UN MANIÁTICO EN MI CASA',
            audio : new Audio('teclear.m4a')
        },
        {
            texto : '¿UN MANIÁTICO EN SU CASA?... ¡QUÉ HORRIBLE!',
            boton : '¡AUXILIO!',
            audio : new Audio('maniatico.m4a')
        },
        {
            texto : '¿DÓNDE SE ENCUENTRA?',
            boton : 'EN NINGÚN LUGAR',
            audio : new Audio('donde.m4a')
        },
        {
            texto : 'POBRECILLO...... ¿QUÉ PODEMOS HACER POR USTED?',
            audio : new Audio('pobrecillo.m4a')
        }
    ]
}

let opcionElegida;
let opcionNoElegida;
let clickCount = -1;

botones.forEach (boton => {
    boton.addEventListener('click', function (e) {
        clickCount++;
        if (clickCount === 0) {
            opcionElegida = e.target.id;
            opcionNoElegida = opcionElegida === 'opcion1' ? 'opcion2' : 'opcion1';
            document.getElementById(opcionNoElegida).style.display = 'none';
        }
        textoEnPantalla(data[opcionElegida][clickCount].texto);
        data[opcionElegida][clickCount].audio.play();
        boton.innerHTML = `<h1>${data[opcionElegida][clickCount].boton}</h1>`;
    })
})

function textoEnPantalla (texto) {
    let i = 1;
    let intervalo = setInterval(() => {
        pantalla.innerHTML = texto.substring(0, i);
        i++;
        if (i > texto.length) {
            clearInterval(intervalo);
        }
    }, 70);
}
