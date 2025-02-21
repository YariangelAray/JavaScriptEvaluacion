// función para pedir un número, recibe como parametro el mensaje que se mostrará, y válida que sea un número utilizando una expresión regular.
export let pedirNumero = (mensaje) => {
  let RegExp = /^\d+$/;  
  do {
    let num = prompt(mensaje);

    if (!RegExp.test(num)) alert("ERROR: Ingrese solo valores númericos positivos.");
    else return parseInt(num);
    
  } while (true);

}

//Función que recibe un arreglo de números y nos retorna el arreglo con los números ordenados de mayor a menor
export let ordenarArreglo = (numeros) => {

  //for que recorre los elementos del arreglo
  for (let i = 0; i < numeros.length; i++) {
    // segundo for que recorre desde un elemento siguiente, hasta el penultimo elemento del arreglo, esto nos ayudará a comparar un primer elemento (numeros[i]) con el siguiente (numeros[j]) y así determinar, por cada uno de ellos, cual es el mayor
    for (let j = i + 1; j < numeros.length - 1; j++) {
      
      if (numeros[i] < numeros[j]) {

        let auxNum = numeros[i]; // se guarda el número menor en una variable auxiliar
        numeros[i] = numeros[j]; // Se le asigna el número mayor a la posicion donde estaba el número menor (la posición anterior)
        numeros[j] = auxNum; // guardamos el número menor en la posición siguiente
      }
    }    
  }

  return numeros;// retornamos el arreglo ordenado.
}