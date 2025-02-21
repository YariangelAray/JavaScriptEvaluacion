// función para pedir un número, recibe como parametro el mensaje que se mostrará, y válida que sea un número utilizando una expresión regular.
export let pedirNumero = (mensaje) => {
  let RegExp = /^\d+$/;  
  do {
    let num = prompt(mensaje);

    if (!RegExp.test(num)) alert("ERROR: Ingrese solo valores númericos positivos.");
    else return parseInt(num);
    
  } while (true);
}

// función para pedir una letra, recibe como parametro el mensaje que se mostrará, y válida que sea una letra minuscula utilizando una expresión regular.
export let pedirLetra = (mensaje) => {
  let RegExp = /^[a-z]$/;  
  do {
    let letra = prompt(mensaje);
  
    if (!RegExp.test(letra)) alert("ERROR: Ingrese solo una letra minúscula.");
    else return letra;

  } while (true);

}

// Función que retorna la suma de todos los números de un arreglo recibiendolo como parámetro
export let sumarNumeros = (numeros) => {
  let suma = 0;
  for (const num of numeros) suma += num;
  return suma;
}

// Función que evalua un número y retorna un valor booleano dependiendo si es primo o no.
let esPrimo = (numero) => {
  if (numero <= 1) return false;
  for (let i = 2; i < numero; i++) 
    if (numero % i == 0) return false;

  return true;
}

// Función que retorna la cantidad de números primos en un arreglo
export let contarPrimos = (numeros) => {
  let cantNumPrimos = 0;

  for (const num of numeros) {
    if (esPrimo(num)) cantNumPrimos++; 
  }

  return cantNumPrimos;
}

//función que retorna la cantidad de números pares en un arreglo
export let contarPares = (numeros) => {
  let cantNumPares = 0;

  for (const num of numeros) {
    if (num % 2 == 0) cantNumPares++;
  }

  return cantNumPares;
}

//funció que retorna el promedio de los números primos de un arreglo
export let promedioPrimos = (numeros) => {
  let cantNum = contarPrimos(numeros);
  let suma = 0;

  for (const num of numeros) {
    if (esPrimo(num)) suma += num;
  }

  return suma/cantNum;
}

//función que retorna el promedio de los números pares de un arreglo
export let promedioPares = (numeros) => {
  let cantNum = contarPares(numeros);
  let suma = 0;

  for (const num of numeros) {
    if (num % 2 == 0) suma += num;
  }

  return suma/cantNum;
}