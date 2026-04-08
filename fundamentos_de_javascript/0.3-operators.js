
let tabla = Number(prompt('Dime que tabla quieres hacer?'))
let rango = Number(prompt('Dime hasta que numero quieres multiplicar?'))

if (tabla < 0 || rango < 0) {
    console.log('recuerda que los valores son positivos')
} else {
    console.log(`la tabla del: ${tabla}, hasta el ${rango}
----------------------------------------`)
    for (let i = 1; i < rango + 1; i++) {
        console.log(`${tabla} * ${i} = ${i * tabla}`)
    }
}