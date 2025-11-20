const btnLimpiar = document.querySelectorAll(".btn-limpiar");
btnLimpiar.forEach(element => element.addEventListener("click", console.clear));


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

const nombreGlobal = "Esta es una variable global"; // Ámbito Global

function scope(btnScope) {


    function mostrarNombre() { //Funcion Global

        console.log("Desde la funcion mostrarNombre() :" + nombreGlobal); // Accede a la variable global

    }

    if (btnScope.id == "scopeGlobal") {
        mostrarNombre();
        console.log("Desde el bloque condicional if: " + nombreGlobal); // "Esta es una variable global"

    } else if (btnScope.id == "scopeLocal") {
        // alert("Scope Local");
        function calcularSuma() {
            let numeroLocal = 10; // Ámbito Local de la función
            return numeroLocal + 5;
        }

        console.log("Funcion calcularSuma() :" + calcularSuma()); // Devuelve 15
    }
}

function scopeBlock() {

    if (true) {
        const mensaje = "Hola, pertenece al bloque"; // Scope de Bloque
        var antiguo = "Soy VAR, Fui declarado en bloque";        // Scope de Función/Global (no de Bloque)
        console.log(mensaje);
    }
    console.log(antiguo);
    //console.log(mensaje); // Error: mensaje is not defined

}















































// Back to top button functionality
const btnBackToTop = document.getElementById("btn-back-to-top");

window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        btnBackToTop.style.display = "block";
    } else {
        btnBackToTop.style.display = "none";
    }
}

btnBackToTop.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
