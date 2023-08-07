const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const pares = numeros.filter(numero => numero % 2 === 0);
console.log(pares); // Output: [2, 4, 6, 8, 10]
//
function generarSerieFibonacci(n, callback) {
    let arrayFibonacci = [0, 1];
    
    if (n <= 2) {
      return callback(arrayFibonacci.slice(0, n));
    }
    
    for (let i = 2; i < n; i++) {
      const numActual = arrayFibonacci[i-1] + arrayFibonacci[i-2];
      arrayFibonacci.push(numActual);
    }
    
    return callback(arrayFibonacci);
  }
  
  // ejemplo de uso
  generarSerieFibonacci(10, secuencia => {
    console.log(secuencia);
    // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
  });


  /////

  function generarNumerosNaturales(cantidad) {
    return new Promise((resolve, reject) => {
      const numeros = [];
  
      for (let i = 0; i < cantidad; i++) {
        numeros.push(i);
      }
  
      if (numeros.length > 0) {
        resolve(numeros);
      } else {
        reject(new Error("No se pudieron generar números naturales."));
      }
    });
  }
  
  // Ejemplo de uso
  generarNumerosNaturales(10)
    .then(numeros => console.log(numeros))
    .catch(error => console.log(error));






    ///
    function generarNumerosPares(cantidad) {
        return new Promise((resolve, reject) => {
          const numerosPares = [];
      
          for (let i = 0; i < cantidad; i++) {
            if (i % 2 === 0) {
              numerosPares.push(i);
            }
          }
      
          if (numerosPares.length > 0) {
            resolve(numerosPares);
          } else {
            reject(new Error("No se pudieron generar números pares."));
          }
        });
      }
      
      // Ejemplo de uso
      generarNumerosPares(10)
        .then(numeros => console.log(numeros))
        .catch(error => console.log(error));


        async function generarNumerosPares(cantidad) {
            const numerosPares = [];
          
            for (let i = 0; i < cantidad; i++) {
              if (i % 2 === 0) {
                numerosPares.push(i);
              }
            }
          
            if (numerosPares.length > 0) {
              return numerosPares;
            } else {
              throw new Error("No se pudieron generar números pares.");
            }
          }
          
          // Ejemplo de uso
          generarNumerosPares(10)
            .then(numeros => console.log(numeros))
            .catch(error => console.log(error));

////////////////////
            async function generarNumerosPares(cantidad) {
                const numerosPares = [];
              
                for (let i = 0; i < cantidad; i++) {
                  if (i % 2 === 0) {
                    numerosPares.push(i);
                  }
                }
              
                if (numerosPares.length > 0) {
                  return numerosPares;
                } else {
                  throw new Error("No se pudieron generar números pares.");
                }
              }
              
              // Ejemplo de uso
              generarNumerosPares(10)
                .then(numeros => console.log(numeros))
                .catch(error => console.log(error));



                ////////////
                async function generarSerieFibonacci(n) {
                    const serie = [0, 1];
                  
                    for (let i = 2; i < n; i++) {
                      const a = serie[i - 1];
                      const b = serie[i - 2];
                  
                      serie.push(a + b);
                    }
                  
                    return serie;
                  }
                  
                  // Ejemplo de uso
                  generarSerieFibonacci(10)
                    .then(serie => console.log(serie))
                    .catch(error => console.log(error));