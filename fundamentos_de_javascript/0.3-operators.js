/*
Los operadores son símbolos o palabras que permiten realizar operaciones entre valores.

Sirven para:
    hacer cálculos
    comparar valores


1. Operadores aritméticos

    Los operadores aritméticos se usan para realizar operaciones matemáticas.

     Operador	 Significado
        +	        suma
        -	        resta
        *	        multiplicación
        /	        división
        %	        módulo (residuo)
        **	        potencia
        ++	        incremento
        --	        decremento
*/
console.log( 3 + 5 ) // 8
console.log( 4 - 2 ) // 2
console.log( 12 * 4) // 48
console.log( 20 / 5) // 4
console.log( 25 % 3) // 1
console.log( 2 ** 4) // 16


/*
2. Operadores relacionales (comparación)

    Los operadores relacionales se usan para comparar valores.

     Operador	 Significado
        ==          igual que ( no estricto)
        ===         igual que ( estricto)
        !=          diferente de ( no estricto)
        !==         diferente de ( estricto)
        >	        mayor que
        <	        menor que
        >=	        mayor o igual
        <=	        menor o igual

*/

console.log( 10 == "10" )   // true, mismo valor
console.log( 10 === "10" )  // false, mismo valor pero diferente tipo de dato
console.log( 10 != "10" )   // false, no son diferentes los valores
console.log( 10 !== "10" )  // true, no son diferentes los valores pero si los tipos 
console.log( 10 > 10 )      // false, 10 no es mayor que 10
console.log( 10 >= 10 )     // true, no es mayor pero si es igual
console.log( 10 < 10 )      // false, 10 no es menor que 10
console.log( 10 <= 10 )     // true, no es menor pero si es igual


/*
3. Operadores Lógicos   

    Los operadores lógicos se utilizan para combinar o evaluar condiciones.


    Operador  |	Nombre	    |    Significado
    &&	      | AND	        |    ambas condiciones deben ser verdaderas    
    ||	      | OR	        |    una condición deben ser verdadera    
    !	      | NOT	        |    niega o invierte el valor  
    
*/

console.log( 4 > 2 && 4 < 10) // true, ambas condiciones son verdaderas
console.log( 1 > 2 && 4 < 10) // false, solo una es verdadera
console.log( 2 > 2 || 4 < 10) // true, la segunda es verdadera
console.log( 1 > 2 || 4 < 3) // false, ambas son falsas


console.log(!false) // true, ya que el operador ! niego i invierte el valor
console.log(!true) // false, ya que el operador ! niego i invierte el valor

