// npm install typescript --save-dev
// crear archivo main.ts 
// compilar y guardar en otra carpeta: tsc main.ts --outDir ../variables-constantes
// entrar en el modo observador: tsc main.ts --outDir ../variables-constantes --watch
// Ejemplo de Tipado Fijo   
var nombreUsuario = "Juliano";
nombreUsuario = "Elizabeth"; //Esto es correcto
//nombreUsuario = 123; //Esto causaria error en la compilacion
// Tipado fijo en funciones
const tsCode = document.getElementById("tsCode");
function saludar(nombre) {
    console.log("Hola, ".concat(nombre, "."));
    tsCode.innerHTML = `<b>
<span class="keyword">let</span> nombreUsuario: <span class="function">string</span> = "Juliano";
nombreUsuario = "Elizabeth"; 

<span class="function">function</span> saludar(nombre: <span class="keyword">string</span>): void {

    console.log("Hola, $_{nombre}.");

}
</b>`;

}
//saludar(42); // ESTO TAMBIÉN CAUSARÍA UN ERROR
//saludar(nombreUsuario); //Esto es correcto
