export class calculadora { //Creamos y exportamos la clase calculadora

  //Creamos los métodos suma, resta, multiplicacion y division, que reciben como parámetros un arreglo de números y retornan el resultado de su operación

  suma(numeros) {
    let suma = 0;
    for (const num of numeros) {
      suma += num;
    }
    return suma;
  }

  resta(numeros) {

    //Si en el arreglo solo hay un número, lo retornamos para que no se divida por si mismo
    if (numeros.length == 0) return numeros[0];
    else{ // si no
      let resta = numeros[0]; //Tomamos como referencia el primer elemento de ese arreglo paraque se vaya restando con los siguientes
      for (let i = 1; i < numeros.length; i++) 
        resta -= numeros[i];
      return resta;
    }
  }

  multiplicacion(numeros) {
    let mult = 1;
    for (const num of numeros) {
      mult *= num;
    }
    return mult;
  }

  //En el método de division utilizamos el try catch, para que al momento de tratar de dividir por 0, lance el error y nos lo muestre en una alerta
  division(numeros) {
    try {

      if (numeros[0] == 0 || numeros[1] == 0)
        throw new Error("No se pueden realizar divisiones por cero.");

      let div = numeros[0] / numeros[1]
      return div;

    } catch (error) {
      alert(error.message)
    }
  }
}