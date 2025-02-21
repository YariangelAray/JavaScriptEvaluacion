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


//Funcion que pide la cantidad de números y nos retorna un arreglo
export let pedirNumeros = (cantNumeros) => {
  let numeros = [];
  for (let i = 0; i < cantNumeros; i++) {
    numeros.push(pedirNumero(`Ingrese el número ${i+1}, por favor:`));
  }
  return numeros;
}