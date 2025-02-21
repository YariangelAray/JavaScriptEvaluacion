// función para pedir un número, recibe como parametro el mensaje que se mostrará, y válida que sea un número utilizando una expresión regular.
export let pedirNumero = (mensaje) => {
  let RegExp = /^\d+$/;  
  do {
    let num = prompt(mensaje);

    if (!RegExp.test(num)) alert("ERROR: Ingrese solo valores númericos positivos.");
    else return parseInt(num);
    
  } while (true);

}

// función para las palabras, recibe como parametro el mensaje que se mostrará, y válida que contenga solo letras utilizando una expresión regular.
export let pedirPalabra = (mensaje) => {
  let RegExp = /^[a-zA-Z]+$/;  
  do {
    let letra = prompt(mensaje);
  
    if (!RegExp.test(letra)) alert("ERROR: Ingrese solo letras sin espacios.");
    else return letra;

  } while (true);
}

// función que retorna la palabra mayor alfabeticamente, y la palabra mayor por cantidad de caracteres.
export let palabrasMayor = function (...palabras) {

  // inicializamos las palabras con el primer elemento del arreglo para tomarlas como referencia
  let palabraMayorAlf = palabras[0];
  let palabraMayorCant = palabras[0].length;
  let palabraMayorLong;

  // for que recorre los elementos del arreglo de palabras

  for (let i = 0; i < palabras.length; i++) {    

    // if que compara los elementos del arreglo por la palabra que se haya guardado, si es mayor, se reasigna la palabra a la que se encuentra en ese indice. (Esto es posible gracias a la tabla de codificación interna que utiliza javascript (Unicode))
    if (palabras[i] > palabraMayorAlf) palabraMayorAlf = palabras[i];

    //Segundo if que compara la longitud de la cadena por la que ya se guardo, si es mayor, se re asigna la palabra con mayor longitud a la que esta en el indice, tambien se re asigna la longitud.
    if (palabras[i].length > palabraMayorCant){
      palabraMayorLong = palabras[i];
      palabraMayorCant = palabras[i].length;
    }
  }

  return [palabraMayorAlf, palabraMayorLong]; //Retornamos el arreglo con ambas palabras para aplicar la destructuración.
}