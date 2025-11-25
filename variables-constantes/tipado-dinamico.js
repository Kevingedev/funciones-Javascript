const btnLimpiar = document.querySelectorAll(".btn-limpiar");
btnLimpiar.forEach(element => element.addEventListener("click", console.clear));

const dinamicoCode = document.getElementById("dinamicoCode");
const scopeGlobalCode = document.getElementById("scopeGlobalCode");
const scopeLocalCode = document.getElementById("scopeLocalCode");
const scopeBlockCode = document.getElementById("scopeBlockCode");

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

        dinamicoCode.innerHTML = `<b>
<span class="keyword">let</span> primerNumero = 10;
<span class="keyword">let</span> segundoNumero = 5;

<span class="keyword">let</span> sumaNumerica = primerNumero + segundoNumero;

Resultado:
${sumaNumerica}
typeof sumaNumerica: ${typeof sumaNumerica}
        </b>`;

    } else {
        console.log("**** Uso Incorrecto ****");
        console.log("Variable primerNumero: " + primerNumero);
        console.log("Variable segundoNumero: " + segundoNumero);
        console.log("Variable texto: " + texto);
        console.log("Resultado Inesperado (texto + 10 + 5): " + resultadoInesperado);
        console.log("Tipo de variable resultadoInesperado: " + typeof resultadoInesperado);
        console.log("***************************************");
        dinamicoCode.innerHTML = `<b>
<span class="keyword">let</span> primerNumero = 10;
<span class="keyword">let</span> segundoNumero = 5;
<span class="keyword">let</span> texto = "El resultado es: ";

<span class="keyword">let</span> resultadoInesperado = texto + primerNumero + segundoNumero;


Resultado:
${resultadoInesperado}
typeof resultadoInesperado: ${typeof resultadoInesperado}
        </b>`;
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

        scopeGlobalCode.innerHTML = `<b>
<span class="keyword">const</span> nombreGlobal = "Esta es una variable global";</b> 

<span class="function">function</span> <span class="keyword">mostrarNombre</span>() { 

    console.log("Desde la funcion mostrarNombre() :" + nombreGlobal); 

}
<span class="keyword">mostrarNombre</span>();

Resultado:
Desde la funcion mostrarNombre() :  ${nombreGlobal}</b>`;

    } else if (btnScope.id == "scopeLocal") {
        // alert("Scope Local");
        function calcularSuma() {
            let numeroLocal = 10; // Ámbito Local de la función
            return numeroLocal + 5;
        }

        console.log("Funcion calcularSuma() :" + calcularSuma()); // Devuelve 15

        scopeLocalCode.innerHTML = `<b>
<span class="function">function</span> <span class="keyword">calcularSuma</span>() {
    let numeroLocal = 10; // Ámbito Local de la función
    return numeroLocal + 5;
}</b>

Resultado:
console.log("Variable numeroLocal :" + numeroLocal); <span class="comment">// numeroLocal is not defined</span>
Funcion calcularSuma() :  ${calcularSuma()}`;
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
    scopeBlockCode.innerHTML = `<b>
<span class="keyword">if</span> (true) {
    <span class="keyword">const</span> mensaje = "Hola, pertenece al bloque";
    <span class="keyword">var</span> antiguo = "Soy VAR, Fui declarado en bloque";
    console.log(mensaje);

}
console.log(antiguo);
console.log(mensaje); </b>

Resultado:
${antiguo}
<span class="comment">// Error: mensaje is not defined</span>
    `;

}


















































