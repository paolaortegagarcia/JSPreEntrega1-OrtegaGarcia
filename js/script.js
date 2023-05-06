// PÁGINA DE JUEGOS

/* Piedra, papel o tijera

    * Elección del jugador
    * Elección de la computadora
    * Comenzar el juego
    * Mostrar resultado del juego

*/

const bienvenida = "Bienvenid@! \nHaz elegido jugar Piedra, Papel o Tijera \n\nGanará el que derrote a su contrincante 3 veces! \n\n¡Suerte!"
alert(bienvenida)

let partidasGanadasJugador = 0;
let partidasGanadasComputadora = 0;


const nombreComputadora = "Computadora";

let nombreJugador = "";
while (nombreJugador === "") {
    nombreJugador = prompt("¿Cómo es tu nombre?");
    if (nombreJugador === "") {
        alert("Por favor, ingresa un nombre válido");
    }
}


function juego (){

    let eleccionJugador = prompt(`${nombreJugador}, elige alguna de estas opciones: \n\n-Piedra \n-Papel \n-Tijera`).toLowerCase();

    while (eleccionJugador !== "piedra" && eleccionJugador !== "papel" && eleccionJugador !== "tijera") {
        eleccionJugador = prompt("Elige una opción válida:\n\n-Piedra \n-Papel \n-Tijera").toLowerCase();  
    }

    const opciones = ['piedra', 'papel', 'tijera'];
    const eleccionComputadora = opciones[Math.floor(Math.random() * opciones.length)];


    alert(`¡Haz elegido ${eleccionJugador}! \nLa ${nombreComputadora} eligió ${eleccionComputadora}`);

    let resultado;

    if (eleccionJugador === eleccionComputadora) {
        resultado = 'Empataron';
    } else if ((eleccionJugador === 'piedra' && eleccionComputadora === 'tijera') ||
                (eleccionJugador === 'papel' && eleccionComputadora === 'piedra') ||
                (eleccionJugador === 'tijera' && eleccionComputadora === 'papel')) {
        resultado = 'Ganaste';
        partidasGanadasJugador++;
    } else {
        resultado = 'Perdiste';
        partidasGanadasComputadora++;
    }

    alert(`${resultado} esta ronda!`);

}

i = 1;
while (partidasGanadasJugador < 3 && partidasGanadasComputadora < 3) {
    alert(`Ronda ${i} \n\n${nombreJugador}: ${partidasGanadasJugador} \n${nombreComputadora}: ${partidasGanadasComputadora}`);
    juego();
    i++;
}

if (partidasGanadasJugador > partidasGanadasComputadora) {
    alert(`${nombreJugador} ganó el juego en ${i} rondas!!`);
} else if (partidasGanadasJugador < partidasGanadasComputadora) {
    alert(`La ${nombreComputadora} ganó el juego en ${i} rondas!!`);
};

