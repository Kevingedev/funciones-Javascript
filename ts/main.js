// npm install typescript --save-dev
// crear archivo main.ts 
// compilar y guardar en otra carpeta: tsc main.ts --outDir ../variables-constantes
// entrar en el modo observador: tsc main.ts --outDir ../variables-constantes --watch
// Ejemplo de Tipado Fijo   
var nombreUsuario = "Juliano";
nombreUsuario = "Elizabeth"; //Esto es correcto
//nombreUsuario = 123; //Esto causaria error en la compilacion
// Tipado fijo en funciones
function saludar(nombre) {
    console.log("Hola, ".concat(nombre, "."));
}
//saludar(42); // ESTO TAMBIÉN CAUSARÍA UN ERROR
//saludar(nombreUsuario); //Esto es correcto
