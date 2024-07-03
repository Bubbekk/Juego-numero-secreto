let numeroSecreto = 0;
let contadorIntentos = 1;
let numeroMaximo = 10;
let listaNumerosSorteados = [];


function textElement(element, text) {
    let elementHTML = document.querySelector(element);
    elementHTML.innerHTML = text;
    return;
}

function verificarIntento() {
    let numeroUsuario = parseInt(document.getElementById("valorUsuario").value);
    if (numeroUsuario === numeroSecreto) {
        textElement("p",`¡Acertaste! el número en ${contadorIntentos} ${(contadorIntentos === 1) ? 'intento' : 'intentos'}`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        if (numeroUsuario > numeroSecreto) {
            textElement("p","¡Fallaste! el número es menor");
        } else {
            textElement("p","¡Fallaste! el número es mayor");
        }
        contadorIntentos++;
        limpiar();
    }
    return;
}

function limpiar() {
    document.querySelector("#valorUsuario").value = "";
    return;
}

function numero() {
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    
    if (listaNumerosSorteados.length == numeroMaximo) {
        textElement('p', 'Ya se sorrtearon todos los números posibles');
    } else {

    }
    // si el numero generado esta incluido en la lista 
    if (listaNumerosSorteados.includes(numeroGenerado)) {
        return numero();
    } else {
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
}

function reiniciarJuego() {
    // Limpiar la caja de entrada
    limpiar();
    // Restablecer las condiciones iniciales del juego
    condicionesIniciales();
}

function condicionesIniciales() {
    textElement("h1", "Juego del número secreto");
    textElement("p", `Introduce un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = numero();
    contadorIntentos = 1;
    document.querySelector("#reiniciar").setAttribute("disabled", "true");
    return;
}

condicionesIniciales();

let saludo = nombre => 'saludos' + nombre;
console.log(saludo(" Javier"));