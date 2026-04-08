// en javascript usamos estructuras de control para repetir acciones
// una de las más importantes es el bucle FOR

// FOR

    // el for es una estructura que nos permite repetir un bloque de codigo
    // varias veces, sin tener que escribirlo manualmente muchas veces

    // es muy util cuando queremos recorrer arrays o repetir tareas

    // sintaxis del for:

    // for ( inicio ; condicion ; incremento ) {
    //     codigo a ejecutar
    // }


// ejemplo basico:

for (let i = 0; i < 5; i++) {
    console.log("hola");
}

// explicacion:

    // let i = 0        -> es donde empieza el contador
    // i < 5            -> es la condicion (mientras sea verdadera, el for sigue)
    // i++              -> es el incremento (aumenta de 1 en 1)

    // este for imprimira "hola" 5 veces



// otro ejemplo mostrando el numero:

for (let i = 0; i < 5; i++) {
    console.log(i);
}

// salida en consola:
// 0
// 1
// 2
// 3
// 4



// recorrer un array con for

let frutas = ['mango', 'fresa', 'mora', 'kiwi'];

for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}

// explicacion:

    // frutas.length -> es la cantidad de elementos del array
    // frutas[i]     -> accedemos a cada elemento usando el indice

// salida:
// mango
// fresa
// mora
// kiwi



// ejemplo mas real:

let numeros = [10, 20, 30, 40, 50];
let suma = 0;

for (let i = 0; i < numeros.length; i++) {
    suma = suma + numeros[i];
}

console.log(suma); // 150



// cosas importantes:

    // el for siempre tiene 3 partes:
    // inicio     -> donde empieza
    // condicion  -> hasta cuando se repite
    // incremento -> como avanza

    // si la condicion nunca deja de cumplirse, se crea un bucle infinito ⚠️


// ejemplo de error (bucle infinito):

// for (let i = 0; i < 5; i--) {
//     console.log(i);
// }

// aqui i nunca deja de ser menor que 5, porque va hacia abajo



// resumen:

    // el for sirve para repetir codigo varias veces
    // se usa mucho con arrays
    // trabaja con un contador (i)
    // es una de las bases de la logica en programacion