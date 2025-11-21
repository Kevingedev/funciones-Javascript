
         {

const btnLimpiar = document.querySelectorAll(".limpiarConsola");
btnLimpiar.forEach(element => element.addEventListener("click", console.clear));

         }


function mostrarVariables() {

    //Creamos la variable 'ciudad' sin valor inicial.

    let ciudad; 
    
    //  Inicialización: Creamos la variable 'pais' y le damos un valor inmediatamente.
    let pais = "España";
    
    //  Asignación: Le damos un valor a 'ciudad', que ya había sido declarada.
    ciudad = "Bilbao";
    
    // Preparamos el mensaje final con los resultados
    let mensajeResultado = `
        --- DECLARACIÓN, ASIGNACIÓN E INICIALIZACIÓN ---
        
        1. Declaración (let ciudad;):
           -> Valor inicial: ${ciudad} (JavaScript le da 'undefined' por defecto).
           
        2. Inicialización (let pais = "${pais}"):
           -> Se declara y se asigna el valor "${pais}" en el mismo paso.
           
        3. Asignación (ciudad = "${ciudad}";):
           -> El valor de 'ciudad' pasa de 'undefined' a "${ciudad}".
           
        ¡Resultado Final!
    `
    
    console.log(mensajeResultado +ciudad+","+pais);

      

}  function mostrarLetConstVar(){
      // Declaración con var (ámbito global o de función)
      var globalVar = "Soy una variable global (var)";
      
      // Declaración con let (ámbito de bloque)
      let blockLet = "Soy una variable de bloque (let)";
      
      // Declaración con const (ámbito de bloque, valor constante)
      const blockConst = "Soy una constante de bloque (const)";
      
      // Preparamos el mensaje final con los resultados
      let mensajeResultado = `
          --- DIFERENCIAS ENTRE var, let y const ---
          
           var:
             -> Ámbito: Global o de función.
             -> Puede ser redeclarada y reasignada.
             -> Ejemplo: ${globalVar}
             
          let:
             -> Ámbito: Bloque.
             -> No puede ser redeclarada en el mismo ámbito, pero sí reasignada.
             -> Ejemplo: ${blockLet}
             
          const:
             -> Ámbito: Bloque.
             -> No puede ser redeclarada ni reasignada.
             -> Ejemplo: ${blockConst}
             
          ¡Resultado Final!
      `
      
      console.log(mensajeResultado);
      
}  function mostrarNumero(){

      // Declaración e inicialización de variables numéricas
      
      let entero = 42;          // Número entero
      let decimal = 3.14;      // Número decimal (float)
      
      // Operaciones matemáticas básicas
      let suma = entero + decimal;
      let resta = entero - decimal;
      let multiplicacion = entero * decimal;
      let division = entero / decimal;
      
      // Preparamos el mensaje final con los resultados
      let mensajeResultado = `
          --- INTEGER & FLOAT --
          
          Números Declarados:
             -> Entero: ${entero}
             -> Decimal: ${decimal}
             
           Operaciones Matemáticas:
             -> Suma: ${suma}
             -> Resta: ${resta}
             -> Multiplicación: ${multiplicacion}
             -> División: ${division}
             
          ¡Resultado Final!
      `
      
      console.log(mensajeResultado);

}    function mostrarString(){

      // Declaración e inicialización de variables string
      let saludo = "Hola, Mundo!";
      let nombre = 'Juan Pérez';
      
      // Concatenación de strings
      let mensajeCompleto = saludo + " Soy " + nombre + ".";
      
      // Uso de plantillas literales
      let mensajeTemplate = `${saludo} Soy ${nombre}.`;
      
      // Preparamos el mensaje final con los resultados
      let mensajeResultado = `
          
          
            Strings Declarados:
             -> Saludo: "${saludo}"
             -> Nombre: '${nombre}'
             
            Concatenación:
             -> Mensaje Completo: "${mensajeCompleto}"
             
            Plantillas Literales:
             -> Mensaje Template: "${mensajeTemplate}"
             
          ¡Resultado Final!
      `
      
      console.log(mensajeResultado);



}  function mostrarBoolean(){

      // Declaración e inicialización de variables booleanas
      let esVerdadero = true;    // Valor booleano verdadero
      let esFalso = false;       // Valor booleano falso
      
      // Operaciones lógicas
      let andOperacion = esVerdadero && esFalso;  // AND lógico
      let orOperacion = esVerdadero || esFalso;   // OR lógico
      let notOperacion = !esVerdadero;            // NOT lógico
      
      // Preparamos el mensaje final con los resultados
      let mensajeResultado = `
         
          
          Booleanos Declarados:
             -> esVerdadero: ${esVerdadero}
             -> esFalso: ${esFalso}
             
          Operaciones Lógicas:
             -> AND (true && false): ${andOperacion}
             -> OR (true || false): ${orOperacion}
             -> NOT (!true): ${notOperacion}
             
          ¡Resultado Final!
      `
      
      console.log(mensajeResultado);   


} function mostrarNullUndefined(){

      // Declaración de variables null y undefined
      let valorNull = null;          // Valor intencionalmente vacío
      let valorUndefined;            // Valor no asignado, por defecto es undefined
      
      // Preparamos el mensaje final con los resultados
      let mensajeResultado = `
          
          
          1. Null:
             -> Valor: ${valorNull}
             -> Significado: Indica ausencia intencional de valor.
             
          2. Undefined:
             -> Valor: ${valorUndefined}
             -> Significado: Indica que la variable no ha sido asignada.
             
          ¡Resultado Final!
      `
      
      console.log(mensajeResultado);   

} 