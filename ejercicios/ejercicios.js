function contarVocales(str) {
    let vocales = 'aeiou';
    let contador = 0;
    for (let i = 0; i < str.length; i++) {
        if(vocales.includes(str[i])) contador++
    }

    return contador;
}18

function factorial(num){
    let factor = 1
    for(let i = 1; i<=num ; i++){
        factor *= i;
    }
    return factor;
}

// regular (/[\s]/g, "")
function esPalindromo(palabra) {
    let limpia = palabra.toLowerCase().replace(/[\s]/g, "")
    let invertida = limpia.split('').reverse().join('');
    // console.log(invertida)

    return limpia === invertida
}

function fibo(num){
    if(num<1) return []
    if(num===2) return [0,1]

    let serieFibo = [0,1];

    for (let i = 2; i <= num; i++) {
        let numero = serieFibo[i-2] + serieFibo[i-1]
        serieFibo.push(numero)
    }
    return serieFibo;

}


// Imprime números del 1 al 100, pero:
// Si es múltiplo de 3, muestra "Fizz".
// Si es múltiplo de 5, muestra "Buzz".
// Si es múltiplo de ambos, muestra "FizzBuzz".

function fizzbuzz(){
    // solo puedes hacer un console.log()
    for(let i= 1; i<=30; i++){

        if(i % 3 ===0 && i % 5 ===0) console.log('FizzBuzz');

        else if(i % 3 === 0) console.log('Fizz')

        else if(i % 5 === 0)  console.log('Buzz')
        
        else console.log(i);
        
    }
}



// serie de collaz
// Si el número es par, se divide entre 2, Si el número es impar, se multiplica por 3 y se le suma 1, y asi hasta llegar a 1

function collaz(n){
    if(n===1) return 1
    let array = [];

    while(n!==1) array.push(n % 2 === 0  ? n = n / 2 : n = n*3 + 1)
    return array
}

// console.log(collaz(33)) 

// busqueda binaria

let arr =  [2,4,6,8,10,12,14,16,18,20,22,24,26,28,30] // 30

function busquedaBinaria(array,n){
    let inicio = 0; // 2
    let final = array.length -1
    let contador = 0

    while(inicio <= final){
        contador++
        let medio = Math.floor(inicio + final)/2;

        if(n === array[medio]) return `el numero esta en la posicion ${medio}, cantidad de veces iterado = ${contador}`

        if(n > array[medio]) {
            inicio = medio+1
        } else{
            final = medio-1
        }
    }
}

console.log(busquedaBinaria([1,2,3,4,5,6,7,8,9], 4))
// busquedaBinaria(arr,16)