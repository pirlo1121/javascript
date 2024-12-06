function contarVocales(str) {
    let vocales = 'aeiou';
    let contador = 0;
    for (let i = 0; i < str.length; i++) {
        if(vocales.includes(str[i])) contador++
    }

    return contador;
  }
  
//   console.log(contarVocales("aeiouu"));
//   console.log(contarVocales("manzanaae")); 
//   console.log(contarVocales("zapato")); 



function factorial(num){
    let factor = 1
    for(let i = 1; i<=num ; i++){
        factor *= i;
    }
    return factor;
}

console.log(factorial(5))// 120
console.log(factorial(3))// 6
console.log(factorial(10))// 




  // regular (/[\s]/g, "")
function esPalindromo(palabra) {
    let limpia = palabra.toLowerCase().replace(/[\s]/g, "")
    let invertida = limpia.split('').reverse().join('');
    // console.log(invertida)

    return limpia === invertida
}

// console.log(esPalindromo("aaooaa")); 
// console.log(esPalindromo("café")); 
// console.log(esPalindromo("Somos o no somos")); 
  
// [0,1,1,2,3,5,8,13,21,34]

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

console.log(fibo(80)) // [0,1,1,2,3,5,8,13,21]