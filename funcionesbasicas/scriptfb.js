/*ESTO ES UNA FUNCIÓN DE EJEMPLO*/
function saludarDemo() {     
    console.log("Hola desde javascript!"); 
}

/*ESTO ES UN EJEMPLO DE DECLARACION*/
let nombre = "Manolo";
function mostrarNombreConsola() {
    console.log("Hola", nombre);
}

/*ESTO ES UNA INVOCACION CON PARAMETROS*/
function saludarPersona(nombre) {
    console.log("Hola, " + nombre + "!");
}

saludarPersona("Lupita");
saludarPersona("Carlos");

/* === FUNCIÓN ANÓNIMA === */
const saludarAnonima = function() {
    console.log("Hola desde una función anónima");
};

/*ESTO ES UNA FUNCION EJEMPLO PARAMETROS*/
function saludar(nombre) {
    console.log("Holita, " + nombre);
}
saludar("Anita");

/*ESTO ES UNA FUNCIÓN CON RETURN*/
function sumar(a, b) {
    return a + b;
}
let x = sumar(3, 4);
console.log(x);

/*ESTO ES UNA FUNCIÓN FLECHA*/
const multiplicar = (a, b) => {
    return a * b;
};
let resultado = multiplicar(5, 6);
console.log(resultado);

/*ESTO ES UNA FUNCIÓN PARA LIMPIAR LA CONSOLA*/  
function limpiarConsola() {
    console.clear();
}
