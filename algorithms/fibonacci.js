/**
 * Complejidad Temporal -> O( n )
 * Complejidad Espacial -> O( n^2 )
 * Espacio Auxiliar -> O( n^2 )
 */
function fibonacci(numero) {
    const secuenciaFibonacci = [1]; 
  
    let valorPrevio = 0;
    let valorActual = 1;
  
    if (numero === 1) {
      return secuenciaFibonacci;
    }
  
    let i = numero - 1;
  
    while (i) {
      valorActual += valorPrevio;
      valorPrevio = valorActual - valorPrevio;
      secuenciaFibonacci.push(valorActual);
      i -= 1;
    }
  
    return secuenciaFibonacci;
}