function contar(number){
    for (let index = 0; index < number; index++) {
        console.log(index);        
    }
}

console.time('duracion-del-contar');
contar(5);
console.timeEnd('duracion-del-contar');