const pantalla = document.getElementById('pantalla');
const opcion1 = document.getElementById('opcion-1');
const opcion2 = document.getElementById('opcion-2');
let h1Opcion1 = document.getElementById('h1 opcion-1');
let h2Opcion2 = document.getElementById('h1 opcion-2');
const textosOpcion1 = ["NO LO SÉ", "BUSCAR", "VER", "DESHACERSE"];
const textosOpcion2 = ["AUXILIO", "¡AUXILIO!", "NINGÚN LUGAR"]
let indiceTexto = 0;

const texto1 = "QUÉ NECIO... <br> ¿QUIERES SABER DE SOMBRAS DIABÓLICAS?";
const texto2 = "OYE... NO TIENES QUE TECLEAR TAN FUERTE";

const audioNecio = new Audio('necio.m4a');
const audioPerdedor = new Audio('perdedor.m4a');
const audioBusqueda = new Audio('busqueda.mp3');
const audioSombras = new Audio('sombras.m4a');
const audioTeclear = new Audio('teclear.m4a');
const audioManiatico = new Audio('maniatico.m4a');
const audioDonde = new Audio('donde.m4a');
const audioPobrecillo = new Audio('pobrecillo.m4a');
const audioDeshacerse = new Audio('deshacerse.m4a');

let clickCount = 0;

opcion1.onclick = () => {
    clickCount++;
    if (clickCount === 1) {
        audioNecio.play();
        textoEnPantalla(texto1);
    } else if (clickCount === 2) {
        audioPerdedor.play();
        textoEnPantalla('VAYA PERDEDOR... CLARO QUE LO SABES');
    } else if (clickCount === 3) {
        audioBusqueda.play();
        textoEnPantalla('BUSCANDO............ BÚSQUEDA TERMINADA... UN TEMA')
    } else if (clickCount === 4) {
        audioSombras.play();
        textoEnPantalla('SOMBRAS DIABÓLICAS............ OH...... YO NO LAS QUERRÍA EN MI CASA');
    } else if (clickCount === 5) {
        audioDeshacerse.play();
        textoEnPantalla('CÓMO DESHACERSE DE LAS SOMBRAS DIABÓLICAS <br> 1. CON UNA CONVERSACIÓN AGRADABLE <br> 2. MÚDATE DE CASA ')
    }

    h1Opcion1.innerHTML = textosOpcion1[indiceTexto];
    indiceTexto = (indiceTexto + 1) % textosOpcion1.length;
}

opcion2.onclick = () => {
    clickCount++;
    if (clickCount === 1) {
        audioTeclear.play();
        textoEnPantalla(texto2);
    } else if (clickCount === 2) {
        audioManiatico.play();
        textoEnPantalla('¿UN MANIÁTICO EN SU CASA?... QUÉ HORRIBLE')
    } else if (clickCount === 3) {
        audioDonde.play();
        textoEnPantalla('¿DÓNDE SE ENCUENTRA?')
    } else if (clickCount === 4) {
        audioPobrecillo.play();
        textoEnPantalla('POBRECILLO...... ¿QUÉ PODEMOS HACER POR USTED?')
    }

    h2Opcion2.innerHTML = textosOpcion2[indiceTexto];
    indiceTexto = (indiceTexto + 1) % textosOpcion2.length;
}


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



//opcion1.onclick = () => {
    //audioNecio.play();
    //textoEnPantalla(texto1);
  //  h1Opcion1.innerHTML = textosOpcion1[indiceTexto];
//    indiceTexto = (indiceTexto + 1) % textosOpcion1.length;
//}

//opcion2.onclick = () => {
//    textoEnPantalla(texto2);
//}

//function textoEnPantalla (texto) {
 //   let i = 1;
   // let intervalo = setInterval(() => {
     //   pantalla.innerHTML = texto.substring(0, i);
       // i++;
        //if (i>texto.length) {
  //          clearInterval(intervalo)
 //       }
  //  }, 70);
//}