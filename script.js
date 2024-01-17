// Generar un número aleatorio entre 1 y 100 para que el usuario lo adivine
const numeroAleatorio = Math.floor(Math.random() * 100) + 1;

// Contador de intentos del usuario
let intentos = 0;

// Función para comparar el número ingresado por el usuario con el número aleatorio
function adivinarNumero() {
    // Obtener el número ingresado por el usuario desde un cuadro de diálogo
    const numeroUsuario = parseInt(prompt('Adivina el número (entre 1 y 100):'));

    // Incrementar el contador de intentos
    intentos++;

    // Verificar si el número ingresado es igual al número aleatorio
    if (numeroUsuario === numeroAleatorio) {
        alert(`¡Felicitaciones! ¡Adivinaste el número en ${intentos} intentos!`);
    } else if (numeroUsuario > numeroAleatorio) {
        alert('Intenta con un número más bajo.');
        adivinarNumero(); // Volver a pedir un número al usuario
    } else {
        alert('Intenta con un número más alto.');
        adivinarNumero(); // Volver a pedir un número al usuario
    }
}

// Llamar a la función para comenzar el juego
adivinarNumero();