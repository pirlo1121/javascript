// en javascript tenemos tipos de datos, son los datos que el programa va a usar o requerir para alguna funcionalidad.

// tenemos 2 tipos principales ( primitivos y de referencia )

// primitivos

    // 	son los datos mas basicos de un lenguaje de programacion
    // 	no tienen propiedades complejas.
    //  ejemplo de primitivos:

// 	STRING: texto, palabras, frases o caracteres, los string siempre deben ir entre 
    // comillas, ejemplo: "esto es un string"

// 	NUMBER: numeros enteros o decimales, ejemplo: 35 1.8

// 	BOOLEAN: lo valores booleanos solo tienen dos estados ( true o false )

// 	UNDEFINED: el valor undefined es cuando una variable no se le asigno un valor, 
    // es decir, es una variable sin definir

"mango" // string
33      // number
false   // boolean


// en javascript podemos ver el tipo de dato usando "typeof"

console.log(typeof "mango") // en la consola saldrá ( string )
console.log(typeof false) // en la consola saldrá ( boolean )
console.log(typeof 33) // en la consola saldrá ( number )





// Datos de Referencia


    // ARRASY: En JavaScript, los arrays son estructuras que te permiten guardar varios valores en una sola variable.

    // un array lo creamos dentro de unos corchetes: [ ]
    // cada elemento del array lo separamos por comas ,
    let frutas = [ 'mango', 'fresa', 'mora', 'kiwi' ];
    // en ese casó hemos creado un array con 4 elementos de tipo string
    
    let datos = [ 'juan' , 33, false, "maria" , 28.2 ];
    // en ese casó hemos creado un array con  elementos y de diferentes tipos de datos ( string, number, boolean, string, number )

    // los arrays sirven para agrupar varios datos en un mismo lugar ( variable ), lo más comun es que los datos esten relacionados, es raro ver un array con datos al azar o random, lo normal es ver arrays de productos, personas, notas etc...

    // Commo acceder a un elemento de un array?
    frutas = [ 'mango', 'fresa', 'mora', 'kiwi' ]; 
    // supongamos que necesitamos imprimir por consola solo la primera fruta.
    // en ese caso tenemos que acceder al elemento 0 del array
    console.log( frutas[0] ) // mango
    
    // los elementos de los arrays se guardan en posiciones ( indices ), y siempre empiezan desde cero
    

    // INDICE =    0         1       2        3
    // ARRAY = [ 'mango', 'fresa', 'mora', 'kiwi' ]
    console.log( frutas[0] ) // mango
    console.log( frutas[1] ) // fresa
    console.log( frutas[2] ) // mora
    console.log( frutas[3] ) // kiwi


    // AGREGAR Y ELIMINAR ELEMENTOS A UN ARRAY

    // para agregar y eliminar elementos usamos dos metodos ( push , pop )
    // el metodo push agrega un elemento en la ultima posicion del array
    // el metodo pop elimina el ultimo elemento del array

    // sintaxis push y pop:
        //  array.pop()               // eliminamos el ultimo elemento
        //  array.push( elemento )   // agregamos lulo en la ultima posicion


    // ejemplos:
    let lenguajes = ['javascript', 'python', 'kotlin']

    lenguajes.pop()
    //  ['javascript' , 'python']

    lenguajes.push('c++')
    //  ['javascript' , 'python' , 'c++' ]



    







