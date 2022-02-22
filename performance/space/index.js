function contar(number){
    for (let index = 0; index < number; index++) {
        console.log(index);        
    }
}

function repetir(arreglo){
    let arreglo_repetido = arreglo;
    return arreglo_repetido;
}

function convertirAString(arreglo){
    let resultado = arreglo.map(elemento => elemento.toString());
    return resultado;
}

console.log(convertirAString([1,2,3]));

function dosDimensiones(valor){
    let x = new Array(valor);
    for (let index = 0; index < valor; index++) {
        x[index] = new Array(valor).fill(0)        
    }
    return x;
}

console.log(dosDimensiones(5))