const performance = require('perf_hooks');

function contar(number){
    for (let index = 0; index < number; index++) {
        console.log(index);        
    }
}

let inicio_tiempo = performance.performance.now();
contar(5);
let final_tiempo = performance.performance.now();
let duracion = final_tiempo - inicio_tiempo;
console.log(duracion);