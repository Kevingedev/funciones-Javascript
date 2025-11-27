const foreachCode = document.getElementById("foreach-code");
const mapCode = document.getElementById("map-code");
const filterCode = document.getElementById("filter-code");


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

    filterCode.innerHTML = `
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

        foreachCode.innerHTML = `<b> <span class="comment">//Recorrer un array con foreach</span>
<span class="keyword">const</span> frutas = ['pera', 'coco', 'naranja'];
frutas.<span class="function">forEach</span>(function (fruta) {
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

        foreachCode.innerHTML = `<b><span class="comment">//Recorrer un array con foreach mostrando el indice</span>
<span class="keyword">const</span> frutas = ['pera', 'coco', 'naranja'];
frutas.<span class="function">forEach</span>(function (fruta, indice) {
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

        foreachCode.innerHTML = `<b><span class="comment">//Recorrer un array con foreach operando variables</span>
<span class="keyword">const</span> precios = [19.99, 9.99, 29.99];
<span class="keyword">let</span> total = 0;

precios.<span class="function">forEach</span>(precio => {
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

        mapCode.innerHTML = `<b><span class="comment">//Recorrer un array de objetos con map</span>
<span class="keyword">const</span> usuarios = [
    { nombre: 'Ana', edad: 28 },
    { nombre: 'Juan', edad: 34 },
    { nombre: 'María', edad: 22 }
];

<span class="keyword">const</span> nombresUsuarios = usuarios.<span class="function">map</span>(<span class="property">usuario</span> => <span class="property">usuario</span>.nombre);
console.log(nombresUsuarios);</b>


Resultado:
(3) ['Ana', 'Juan', 'María']`;
    } else if (btnMap.id == "map2") {

        const precios = [100, 200, 300];
        const preciosFormateados = precios.map(precio => {
            return `$${precio.toFixed(2)}`;
        });

        console.log(preciosFormateados);

        mapCode.innerHTML = `<b><span class="comment">//Recorrer un array de numeros y formatearlos a moneda con map</span>
<span class="keyword">const</span> precios = [100, 200, 300];

<span class="keyword">const</span> preciosFormateados = precios.<span class="function">map</span>(precio => {
    <span class="keyword">return</span> $$_{precio.<span class="function">toFixed</span>(2)};
});

console.log(preciosFormateados);</b>

Resultado:
(3) ['$100.00', '$200.00', '$300.00']`;
    }
}


function filter(btnFilter) {

    if (btnFilter.id == "filter") {

        const productos = [
            { nombre: "Leche", precio: 2 },
            { nombre: "Pan", precio: 1 },
            { nombre: "Carne", precio: 15 },
        ];
        // Filtramos para obtener solo los productos con precio mayor a 5
        const productosCaros = productos.filter(producto => producto.precio > 5);
        console.log(productosCaros);

        filterCode.innerHTML = `<b><span class="comment">//Recorrer un array de objetos y filtrar los precios mayores a 5</span>
<span class="keyword">const</span> productos = [
    { nombre: "Leche", precio: 2 },
    { nombre: "Pan", precio: 1 },
    { nombre: "Carne", precio: 15 },
];
<span class="keyword">const</span> productosCaros = productos.<span class="function">filter</span>(<span class="property">producto</span> => <span class="property">producto</span>.precio > 5);
console.log(productosCaros);</b>

Resultado:
Array(1) [{nombre: "Carne", precio: 15}]`;

    } else if (btnFilter.id == "filter2") {


        const todosLosUsuarios = [
            { id: 101, nombre: "Alicia" },
            { id: 102, nombre: "Benito" },
            { id: 103, nombre: "Carla" },
            { id: 104, nombre: "David" }
        ];

        // Usuarios que han sido bloqueados (Lista Negra)
        const usuariosBloqueados = [102, 104];
        const usuariosActivos = todosLosUsuarios.filter(usuario => {
            // 1. Obtenemos el ID del usuario actual.
            const userID = usuario.id;

            // 2. Usamos includes() para verificar si el ID existe en la lista de bloqueados.
            //    usuariosBloqueados.includes(userID) devuelve TRUE si el usuario está bloqueado.

            // 3. Negamos el resultado con '!' para incluir solo a los NO bloqueados.
            const noEstaBloqueado = !usuariosBloqueados.includes(userID);

            return noEstaBloqueado;
        });

        console.log(usuariosActivos);

        filterCode.innerHTML = `<b><span class="comment">//Recorrer un array de objetos y filtrar los usuarios activos</span>
<span class="keyword">const</span> todosLosUsuarios = [
    { id: 101, nombre: "Alicia" },
    { id: 102, nombre: "Benito" },
    { id: 103, nombre: "Carla" },
    { id: 104, nombre: "David" }
];


<span class="keyword">const</span> usuariosBloqueados = [102, 104];
<span class="keyword">const</span> usuariosActivos = todosLosUsuarios.<span class="function">filter</span>(<span class="property">usuario</span> => {
<span class="comment">// 1. Obtenemos el ID del usuario actual.</span>
<span class="keyword">const</span> userID = <span class="property">usuario</span>.id;

<span class="comment">// 2. Usamos includes() para verificar si el ID existe en la lista de bloqueados.</span>
<span class="comment">//    usuariosBloqueados.includes(userID) devuelve TRUE si el usuario está bloqueado.</span>

<span class="comment">// 3. Negamos el resultado con '!' para incluir solo a los NO bloqueados.</span>
<span class="keyword">const</span> noEstaBloqueado = !usuariosBloqueados.<span class="function">includes</span>(userID);

<span class="keyword">return</span> noEstaBloqueado;
        });

console.log(usuariosActivos);
</b>

Resultado:
Array(2) [{id: 101, nombre: "Alicia"}, {id: 103, nombre: "Carla"}]`;


    } else if (btnFilter.id == "filter3") {
        const UMBRAL_RENDIMIENTO = 85;

        const estudiantes = [
            { nombre: "Carlos", edad: 17, promedio: 92, matriculado: true },
            { nombre: "Elena", edad: 20, promedio: 78, matriculado: true },
            { nombre: "Sofía", edad: 19, promedio: 88, matriculado: false },
            { nombre: "Marcos", edad: 22, promedio: 95, matriculado: true },
            { nombre: "Laura", edad: 18, promedio: 80, matriculado: true }
        ];
        const estudiantesDestacados = estudiantes.filter(estudiante => {
            // Condición 1: Mayor de edad
            const esMayorDeEdad = estudiante.edad >= 18;

            // Condición 2: Alto rendimiento (usando una constante externa)
            const esAltoRendimiento = estudiante.promedio >= UMBRAL_RENDIMIENTO;

            // Condición 3: Matriculado
            const estaMatriculado = estudiante.matriculado === true;

            // Devolvemos true solo si TODAS las condiciones se cumplen (usando el operador AND '&&')
            return esMayorDeEdad && esAltoRendimiento && estaMatriculado;
        });

        console.log(estudiantesDestacados);

        filterCode.innerHTML = `<b><span class="comment">//Filtrar estudiantes por promedio, edad y matriculado</span>
<span class="keyword">const</span> UMBRAL_RENDIMIENTO = 85;

<span class="keyword">const</span> estudiantes = [
    { nombre: "Carlos", edad: 17, promedio: 92, matriculado: true },
    { nombre: "Elena", edad: 20, promedio: 78, matriculado: true },
    { nombre: "Sofía", edad: 19, promedio: 88, matriculado: false },
    { nombre: "Marcos", edad: 22, promedio: 95, matriculado: true },
    { nombre: "Laura", edad: 18, promedio: 80, matriculado: true }
];

<span class="keyword">const</span> estudiantesDestacados = estudiantes.<span class="function">filter</span>(estudiante => {

    <span class="keyword">const</span> esMayorDeEdad = <span class="property">estudiante</span>.edad >= 18;
    <span class="keyword">const</span> esAltoRendimiento = <span class="property">estudiante</span>.promedio >= UMBRAL_RENDIMIENTO;
    <span class="keyword">const</span> estaMatriculado = <span class="property">estudiante</span>.matriculado === true;

    <span class="keyword">return</span> esMayorDeEdad && esAltoRendimiento && estaMatriculado;
});

console.log(estudiantesDestacados);</b>

Resultado:
Array(1) [
    {nombre: "Marcos", edad: 22, promedio: 95, matriculado: true}]`;
    }

}
