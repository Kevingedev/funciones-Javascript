// Ejemplo 1

function showName(firstName, lastName, ...titles) {
    alert(firstName + ' ' + lastName);

    alert(titles[0]);
    alert(titles[1]);
    alert(titles[2]);
    alert(titles.length);
}

function showName (){
    
}

// Ejemplo 2 (Es necesario poner parámetros)

function max(...numeros) {
    let max = numeros[0];
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] > max) {
            max = numeros[i];
        }
        console.log(numeros[i]);

    }

    return max;
}

function mostrarMax(){
    console.log(max(5, 8, 10, 100, -1, 8, 70, 50, 1598, -9, 50, 71));
}

// Sintaxis del operador Spread //

//Ejemplo 1 - Expandir un array

const array1 = [1, 2, 3];

const array2 = [...array1, 4, 5, 6];

console.log(array2); // Resultado: [1, 2, 3, 4, 5, 6]

const boton=document.querySelector("button");



//Ejemplo 2 - Copiar arrays

const original = [1, 2, 3];
const copia = [...original];

console.log(copia); // [1, 2, 3]

//Ejemplo 3 - Agregar elementos arrays

const numeros = [1, 2, 3];
const nuevoNumero = 4;
const actualizado = [...numeros, nuevoNumero];

console.log(actualizado); // [1, 2, 3, 4]

// Ejemplo 4 - Concatenar arrays

const array3 = [1, 2, 3];
const array4 = [4, 5, 6];
const arrayConcatenado = [...array3, ...array4];

console.log(arrayConcatenado); // Resultado: [1, 2, 3, 4, 5, 6]

//Ejemplo 5 - Manipulación de dos arrays anidados

const matrices = [[1, 2], [3, 4]];
const combinada = [].concat(...matrices);
        
console.log(combinada); // [1, 2, 3, 4]

//Ejemplo 6 - Pasar argumentos a una función

 function sumar(a, b, c) {
                return a + b + c;
                }
                
                const numbers = [1, 2, 3];
                
                const resultado = sumar(...numbers);
                
                console.log(resultado); // Resultado: 6

//Ejemplo 7 - Desestructuración y spread

const persona = { nombre: 'Luis', edad: 28, profesion: 'Ingeniero' };
                
                const { nombre, ...resto } = persona;
                
                console.log(nombre); // 'Luis'
                console.log(resto); // { edad: 28, profesion: 'Ingeniero' }