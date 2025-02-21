//Importamos las funciones que utilizaremos
import { pedirNumero, pedirLetra, sumarNumeros, contarPares, contarPrimos, promedioPrimos, promedioPares } from "./Modulo2.js";

//Pedimos la cantidad de números, llamando a la función que nos válida que sea un número.
let cantNumeros = pedirNumero("Ingrese la cantidad de números que desea ingresar.");
let numeros = []; // Creamos un arreglo vacio para almacenr los números

// for que nos ayudará a pedir los números de números según sea la cantidad
for (let i = 0; i < cantNumeros; i++) {
  numeros.push(pedirNumero(`Ingrese el número ${i+1}, por favor:`));  //pedimos el número agregandolo a su vez al arreglo
}

// Variable booleana que nos ayudará a controlar el bucle dowhile y nos permitirá salir de el
let continuar = true;
do {
  // Menú de opciones, llamamos a una función que nos válida que la letra ingresada sea una única letra minuscula
  let opc = pedirLetra(`MENÚ:
    a. Sumar los números
    b. Contar los números primos
    c. Contar los números pares
    d. Calcular el promedio de los números primos
    e. Calcular el promedio de números pares
    f. Salir del programa.
    \nIngrese su opción: `);
  
  // Switch que nos permitirá realizar una acción según sea el caso.
  switch (opc) {
    case "a": // Sumamos los números con ayuda de una función que, al enviarle como argumento el arreglo de números, nos devuelve la suma total.
      let suma = sumarNumeros(numeros);
      alert("La suma de todos los números es: " + suma);
      break;
    
    case "b": //Contamos la cantidad de números primos con ayuda de una función que, al enviarle como argumento el arreglo de números, nos devuelve la cantidad total de números primos.
      let numPrimos = contarPrimos(numeros);
      alert("La cantidad de números primos es: " + numPrimos);
      break;
    
    case "c"://Contamos la cantidad de números pares con ayuda de una función que, al enviarle como argumento el arreglo de números, nos devuelve la cantidad total de números pares.
      let numPares = contarPares(numeros);
      alert("La cantidad de números pares es: " + numPares);
      break;
    
    case "d": //Calculamos el promedio de números primos con ayuda de una función que, al enviarle como argumento el arreglo de números, nos devuelve el promedio de estos mismos.
      let promPrimos = promedioPrimos(numeros);
      alert("El promedio de los numeros primos es: " + promPrimos);
      break;
    
    case "e": //Calculamos el promedio de números pares con ayuda de una función que, al enviarle como argumento el arreglo de números, nos devuelve el promedio de estos mismos.
      let promPares = promedioPares(numeros);
      alert("El promedio de los numeros pares es: " + promPares);
      break;
    
    case "f": //El programa termina si se ingresa una letra "f"
      alert("Programa terminado, muchas gracias por usarlo.");
      continuar = false; // cambiamos el valor de la variable a false, lo que nos permitirá romper el ciclo
      break;
    
    default: // Se muestra mensaje de error para cuando se ingrese una opción inválida.
      alert("ERROR: Opción inválida.")
      break;
  }
  
} while (continuar);