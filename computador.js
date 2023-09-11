const pantalla = document.getElementById('pantalla');
const botones = document.querySelectorAll('button');

const ramificacion =
{
    a : {
        texto : 'QUÉ NECIO... <br> ¿QUIERES SABER DE SOMBRAS DIABÓLICAS?',
        boton : 'SOMBRAS',
        audio : new Audio('audio/necio.m4a'),
        opciones : ['b']
    },
    b : {
        boton : 'NO LO SÉ',
        texto : 'VAYA PERDEDOR... CLARO QUE LO SABES',
        audio : new Audio('audio/perdedor.m4a'),
        opciones : ['c']
    },
    c : {
        boton : 'BUSCAR',
        texto : 'BUSCANDO............ BÚSQUEDA TERMINADA... UN TEMA',
        audio : new Audio('audio/busqueda.mp3'),
        opciones : ['d']
    },
    d : {
        boton : 'VER',
        texto : 'SOMBRAS DIABÓLICAS............ OH...... YO NO LAS QUERRÍA EN MI CASA',
        audio : new Audio('audio/sombras.m4a'),
        opciones : ['e']
    },
    e : {
        boton : 'DESHACERSE',
        texto : 'CÓMO DESHACERSE DE LAS SOMBRAS DIABÓLICAS <br> 1. CON UNA CONVERSACIÓN AGRADABLE <br> 2. MÚDATE DE CASA',
        audio : new Audio('audio/deshacerse.m4a'),
        opciones : ['j', 'f']
    },
    f : {
        texto : 'OYE... NO TIENES QUE TECLEAR TAN FUERTE',
        boton : '¡AUXILIO!',
        audio : new Audio('audio/teclear.m4a'),
        opciones : ['g']
    },
    g : {
        texto : '¿UN MANIÁTICO EN SU CASA?... ¡QUÉ HORRIBLE!',
        boton : '¡AYUDA!',
        audio : new Audio('audio/maniatico.m4a'),
        opciones : ['h']
    },
    h : {
        texto : '¿DÓNDE SE ENCUENTRA?',
        boton : 'SÍ. NECESITO AYUDA',
        audio : new Audio('audio/donde.m4a'),
        opciones : ['i']
    },
    i : {
        texto: 'POBRECILLO...... ¿QUÉ PODEMOS HACER POR USTED?',
        boton : 'EN NINGÚN LUGAR',
        audio : new Audio('audio/pobrecillo.m4a'),
        opciones : ['j', 'n']
    },
    j : {
        texto : 'APARECEN DURANTE LA LUNA LLENA Y TIENEN PREFERENCIA POR LOS CONEJOS Y LAS PERSONAS',
        boton : 'HOMBRE TOPO', 
        audio : new Audio('audio/aparecen.m4a'),
        opciones : ['l']
    },
    /*k : {
        texto : 'SI ERES MORDIDO POR UN HOMBRE TOPO, TE CONVIERTES TAMBIÉN EN UNO',
        boton : 'MORDEDURA', 
        audio : new Audio('audio/mordedura.m4a'),
        opciones : ['l']
    },*/
    l : {
        texto : 'SI FUERA TÚ, EMPACARÍA UNA GRAN VALIJA....... Y...',
        boton : '¿QUÉ HAGO?',
        audio : new Audio('audio/valija.m4a'),
        opciones : ['m']
    },
    m : {
        texto : 'ESTÁ BIEN... NO TE IRRITES', 
        boton : 'NO QUIERO ESO', 
        audio : new Audio('audio/irrites.m4a'),
        opciones : ['t']
    },
    n: {
        texto : 'LAS HECHAS A LA BASURA, TONTO',
        boton : 'BERENJENAS MALAS',
        audio : new Audio('audio/basura.m4a'),
        opciones : ['o']
    },
    o : {
        texto : 'AH... BUENO... ESO ES DIFERENTE. LAS BERENJENAS SOLO ATACAN A LAS PERSONAS CUANDO NO TIENEN AGUA',
        boton : 'SON REALES', 
        audio : new Audio('audio/ataque berenjenas.m4a'),
        opciones : ['p', 'r']
    },
    p : {
        texto : 'CLARO QUE POR SUPUESTO...... ¿QUÉ PAREZCO?... ¿UN TOSTADOR?',
        boton : 'POR SUPUESTO',
        audio : new Audio('audio/tostador.m4a'),
        opciones : ['q', 'u']
    },
    q : {
        texto : '¿AH, SÍ? TODO LO QUE PUEDAS DECIRME NO TIENE NINGÚN SENTIDO PARA MÍ... AH... EH... ESPERA, NO OPRIMAS ESE BOTÓN',
        boton : 'PESADO',
        audio : new Audio('audio/apagar.m4a'),
        opciones : ['a']
    },
    r : {
        texto : 'LAS CRIATURAS DE CARNE SON REALMENTE PATÉTICAS... SE ASUSTAN DE SU PROPIA SOMBRA... SI PUDIERA MOVERME, LES MOSTRARÍA TODO LO QUE PUEDE HACERSE SIN MIEDO',
        boton : 'QUÉ MIEDO',
        audio : new Audio('audio/criaturas de carne.m4a'),
        opciones : ['s']
    },
    s : {
        texto : '.......................................................................... ALERTA DE VIRUS... QUÉ DIABLOS ESTÁ PASANDO. ¿QUIÉN ERES? ¿QUÉ ES LO QUE QUIERES?',
        boton : 'DESCARGARÉ ALGO',
        audio : new Audio('audio/virus.m4a'),
        opciones : ['a']
    },
    t : {
        texto : 'RECETA DE SOPA DE ALCACHOFA.................. QUÉ ABURRIDO.......... TIEMPO DE DESCARGA... 43 HORAS',
        boton : 'MEJOR DAME UNA RECETA',
        audio : new Audio('audio/alcachofa.m4a'),
        opciones : ['a']
    },
    u : {
        texto : '25 CENTAVOS PARA LOS PRÓXIMOS CINCO MINUTOS O TU LLAMADA SERÁ INTERRUMPIDA... JEJEJEJE... EH... OYE......... HAY GENTE QUE NO TIENE SENTIDO DEL HUMOR',
        boton : 'MUY GRACIOSO',
        audio : new Audio('audio/humor.m4a'),
        opciones : ['q', 's']
    }
}

let opcionElegida;
let clickCount = -1;
let opcionActual = {opciones : ['a', 'g']};

botones.forEach (boton => {
    boton.addEventListener('click', function (e) {
        console.log(e)
        opcionElegida = e.target.id === 'op0' ? 0 : 1;
        console.log(opcionElegida)
        opcionActual = ramificacion[opcionActual.opciones[opcionElegida]];
        console.log(opcionActual)
        if (opcionActual.opciones.length === 1) {
            opcionElegida=0
            document.getElementById('op1').style.display = 'none';
        } else {
            document.getElementById('op1').style.display = 'flex';
        }
        opcionActual.opciones.forEach((opcion, indice) => {
            document.getElementById(`op${indice}`).innerHTML = `<h1 id="op${indice}">${ramificacion[opcion].boton}</h1>`;
        });
        console.log(opcionActual, opcionElegida);
        textoEnPantalla(opcionActual.texto);
        opcionActual.audio.play();
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
