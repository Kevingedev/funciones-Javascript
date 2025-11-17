// Ejemplo de Tipado Dinámico en JavaScript - caso de error y caso correcto

let primerNumero = 10;
let segundoNumero = 5;
let texto = "El resultado es: ";

// Caso correcto
let sumaNumerica = primerNumero + segundoNumero; 

// Caso de error
let resultadoInesperado = texto + primerNumero + segundoNumero;

// Uso correcto de la Consola para ver los resultados
console.log("**** Mal Uso de Tipado Dinámico (Concatenación) ****");


function limpiarConsola() {
    console.clear();
}

// Capturar el evento onclick del botón usoCorrecto
document.getElementById("usoCorrecto").addEventListener("click", function() {

    console.log("**** Uso Correcto ****");
    console.log("Primera Numero: " + primerNumero);
    console.log("Segundo Numero: " + segundoNumero);
    console.log("Suma numérica esperada (10 + 5): " + sumaNumerica); 
    console.log("Tipo de Suma Numerica: " + typeof sumaNumerica);

});

// Capturar el evento onclick del botón usoIncorrecto
document.getElementById("usoIncorrecto").addEventListener("click", function() {
    console.log("**** Uso Incorrecto ****");
    console.log("Primera Numero: " + primerNumero);
    console.log("Segundo Numero: " + segundoNumero);
    console.log("Texto: " + texto);
    console.log("Resultado Inesperado (texto + 10 + 5): " + resultadoInesperado); 
    console.log("Tipo de Resultado Inesperado: " + typeof resultadoInesperado);
});




