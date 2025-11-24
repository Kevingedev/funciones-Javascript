const foreachCode = document.getElementById("foreach-code");
const mapCode = document.getElementById("map-code");


function limpiar() {
    console.clear();
    foreachCode.innerHTML = `
                    <b>
array.forEach(function(elemento, índice, array) {
    </b>// código a ejecutar para cada elemento<b>
});
</b>`;
    mapCode.innerHTML = `
<b>
const nuevoArray = array.map(function(elemento) {
    </b>// código a ejecutar para cada elemento<b>
});</b>`;

}

function forEach(btnForEach) {


    if (btnForEach.id == "foreach") {

        const frutas = ['pera', 'coco', 'naranja'];

        frutas.forEach(function (fruta) {
            console.log(fruta);
        });

        foreachCode.innerHTML = `<b>
const frutas = ['pera', 'coco', 'naranja'];
frutas.forEach(function (fruta) {
    console.log(fruta);
});</b>


Resultado:
pera
coco
naranja`;

    } else if (btnForEach.id == "foreach2") {
        const frutas = ['pera', 'coco', 'naranja'];

        frutas.forEach(function (fruta, indice) {
            console.log(`Elemento en posición ${indice}: ${fruta}`);
        });

        foreachCode.innerHTML = `<b>
const frutas = ['pera', 'coco', 'naranja'];
frutas.forEach(function (fruta, indice) {
    console.log("Elemento en posición $ {indice}: $ {fruta}");
});</b>

Resultado:
Elemento en posición 0: pera
Elemento en posición 1: coco
Elemento en posición 2: naranja`;

    } else if (btnForEach.id == "foreach3") {
        const precios = [19.99, 9.99, 29.99];
        let total = 0;

        precios.forEach(precio => {
            total += precio;
        });

        console.log(`Total: $${total.toFixed(2)}`); // Total: $59.97

        foreachCode.innerHTML = `<b>
const precios = [19.99, 9.99, 29.99];
let total = 0;

precios.forEach(precio => {
    total += precio;
});</b>

Resultado:
Total: $59.97`;
    }
}


function map(btnMap) {


    if (btnMap.id == "map") {

        const usuarios = [
            { nombre: 'Ana', edad: 28 },
            { nombre: 'Juan', edad: 34 },
            { nombre: 'María', edad: 22 }
        ];

        const nombresUsuarios = usuarios.map(usuario => usuario.nombre);
        console.log(nombresUsuarios); // ['Ana', 'Juan', 'María']

        mapCode.innerHTML = `<b>
const usuarios = [
    { nombre: 'Ana', edad: 28 },
    { nombre: 'Juan', edad: 34 },
    { nombre: 'María', edad: 22 }
];

const nombresUsuarios = usuarios.map(usuario => usuario.nombre);
console.log(nombresUsuarios);</b> // ['Ana', 'Juan', 'María']


Resultado:
(3) ['Ana', 'Juan', 'María']`;
    } else if (btnMap.id == "map2") {

        const precios = [100, 200, 300];
        const preciosFormateados = precios.map(precio => {
            return `$${precio.toFixed(2)}`;
        });

        console.log(preciosFormateados);

        mapCode.innerHTML = `<b>
const precios = [100, 200, 300];
const preciosFormateados = precios.map(precio => {
    return $$ {precio.toFixed(2)};
});

console.log(preciosFormateados);</b>

Resultado:
(3) ['$100.00', '$200.00', '$300.00']`;
    }
}
