
export function calcularNotaFinal(array){

    const estudaintesActivos = array.filter(e=> e.activo)

    const listaEstudiantes = estudaintesActivos.map((e)=>{
    const promedio = e.notas.reduce((n,b)=> n+b) / e.notas.length
    const pFinal = promedio.toFixed(2)

    const aprobo = pFinal >= 7 ? 'pasaste' : 'perdiste';
    return `${e.nombre} ${aprobo} tu nota es: ${pFinal}`;
    })

    return listaEstudiantes
}
