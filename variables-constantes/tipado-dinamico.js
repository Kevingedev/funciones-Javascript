function limpiarConsola() {
    console.clear();
}

function casosDeUso(btnSelected) {
    // Ejemplo de Tipado Dinámico en JavaScript - caso de error y caso correcto
    console.log("****Uso de Tipado Dinámico (Concatenación)****");
    let primerNumero = 10;
    let segundoNumero = 5;
    let texto = "El resultado es: ";

    // Caso correcto
    let sumaNumerica = primerNumero + segundoNumero;

    // Caso de error
    let resultadoInesperado = texto + primerNumero + segundoNumero;

    // Uso correcto de la Consola para ver los resultados

    if (btnSelected.id == "usoCorrecto") {
        console.log("**** Uso Correcto ****");
        console.log("Variable primerNumero: " + primerNumero);
        console.log("Variable segundoNumero: " + segundoNumero);
        console.log("Suma numérica esperada (10 + 5): " + sumaNumerica);
        console.log("Tipo de Variable sumaNumerica: " + typeof sumaNumerica);
        console.log("***************************************");
    } else {
        console.log("**** Uso Incorrecto ****");
        console.log("Variable primerNumero: " + primerNumero);
        console.log("Variable segundoNumero: " + segundoNumero);
        console.log("Variable texto: " + texto);
        console.log("Resultado Inesperado (texto + 10 + 5): " + resultadoInesperado);
        console.log("Tipo de variable resultadoInesperado: " + typeof resultadoInesperado);
        console.log("***************************************");
    }
}






