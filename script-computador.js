const pantalla = document.getElementById('pantalla');
const opcion1 = document.getElementById('opcion-1');
const opcion2 = document.getElementById('opcion-2');

const texto1 = "Katz es el principal antagonista de la serie Coraje el Perro Cobarde y uno de los principales antagonistas. Katz es un gato rojo delgado, antropomorfo, cuya primera aparición fue en el episodio 'Una noche en el Motel Katz', es conocido por sus travesuras malévolas e inmorales.";
const texto2 = "Katz es un gato rojo con extremidades delgadas y cuerpo alargado. Tiene ojos amarillos con pupilas pequeñas y reflejos morados en los párpados inferiores, así como orejas con puntas moradas, una nariz con puntas moradas y tres franjas moradas en la espalda. Aunque no parece tener cejas, a veces las tiene como en su debut.";

opcion1.onclick = () => {
    textoEnPantalla(texto1);
}

opcion2.onclick = () => {
    textoEnPantalla(texto2);
}

function textoEnPantalla (texto) {
    let i = 1;
    let intervalo = setInterval(() => {
        pantalla.innerHTML = texto.substring(0, i);
        i++;
        if (i>texto.length) {
            clearInterval(intervalo)
        }
    }, 30);
}