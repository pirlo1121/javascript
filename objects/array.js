// .map
const nombres = [ 'ANA', 'LUIS', 'CARLOS', 'MARÍA' ]; 
let minuscula = nombres.map( n=> `hola ${n.toLocaleLowerCase()}`) 

// .filter

const edades = [12, 25, 8, 34, 19, 7]; // Filtrar las edades mayores o iguales a 18.
let mayores = edades.filter((e)=> e<18); 

const animales = ['perro', 'gato', 'elefante', 'ratón']; // Filtrar las palabras que tengan más de 5 letras.
let letras = animales.filter((a)=> a.length >= 5)

// .reduce
const precios = [100, 200, 50, 150];
let suma = 0;
for(let i = 0; i < precios.length; i++){
    suma += precios[i]
}

let sumaReduce = precios.reduce((a,b) => a+b) 

// .forEach()
const frutas = ['manzana', 'pera', 'plátano']; // Mostrar en consola cada fruta con su índice. Ejemplo: "Índice 0: manzana".
// frutas.forEach

 for(let i = 0; i<frutas.length; i++){
    //  console.log(frutas[i]);
}
frutas.forEach((fruta)=> console.log(`la fta es: ${fruta}`))

//.find();
// Encuentra el primer usuario mayor de edad.
const obj = [
    {nombre: 'Ana', edad: 25}, 
    {nombre: 'Luis', edad: 17},
    {nombre: 'miguel', edad: 19},
    {nombre: 'camilo', edad: 12},
    {nombre: 'Luis 2', edad: 23},
    {nombre: 'Luis 3', edad: 44},
    {nombre: 'Luis 4', edad: 15}
]; 

let mayor = obj.find((a)=> a.edad>18);
console.log(`el mayor es: ${mayor.nombre}`)

let mayoresEdad = obj.filter((m) => m.edad>18);
mayoresEdad.forEach((may)=> console.log(`${may.nombre} es mayor de edad`))