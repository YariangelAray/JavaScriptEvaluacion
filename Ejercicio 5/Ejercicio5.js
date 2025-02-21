import { pedirLetra, pedirNumero, pedirNumeros } from "./Modulo5.js";
import { calculadora } from "./Calculadora.js";

// creamos una instancia de la clase
let operacion = new calculadora();

// Variable booleana que nos ayudará a controlar el bucle dowhile y nos permitirá salir de el
let continuar = true;
do {
  //Inicializamos las variables
  let numeros = [];
  let cantNumeros;

  // Menú de opciones, llamamos a una función que nos válida que la letra ingresada sea una única letra minuscula
  let opc = pedirLetra(`MENÚ:
    a. Suma
    b. Resta
    c. Multiplicación
    d. División 
    e. Salir del programa
    \nIngrese su opción: `);
  
  // Switch que nos permitirá realizar una acción según sea el caso.
  switch (opc) {
    case "a": //Sumar, pedimos la cantidad de números
      cantNumeros = pedirNumero("Ingrese la cantidad de números que desea sumar");
      numeros = pedirNumeros(cantNumeros); //Pedimos los números enviando la cantidad, los cuales se guardan en un arreglo
      let suma = operacion.suma(numeros); //Llamamos al método por medio del objeto, enviandole como argumento el arreglo de los números, y nos retornará la suma
      alert("La suma de todos los números es: " + suma);
      break;
    
    case "b": //Resta, pedimos la cantidad de números
      cantNumeros = pedirNumero("Ingrese la cantidad de números que desea restar");
      numeros = pedirNumeros(cantNumeros); //Pedimos los números enviando la cantidad, los cuales se guardan en un arreglo
      let resta = operacion.resta(numeros); //Llamamos al método por medio del objeto, enviandole como argumento el arreglo de los números, y nos retornará la resta
      alert("La resta de todos los números es: " + resta);
      break;
    
    case "c": // Multiplicación, pedimos la cantidad de números
      cantNumeros = pedirNumero("Ingrese la cantidad de números que desea multiplicar");
      numeros = pedirNumeros(cantNumeros); //Pedimos los números enviando la cantidad, los cuales se guardan en un arreglo
      let mult = operacion.multiplicacion(numeros); //Llamamos al método por medio del objeto, enviandole como argumento el arreglo de los números, y nos retornará la multiplicación
      alert("La multiplicación de todos los números es: " + mult);
      break;
    
    case "d": //Division, pedimos los dos números  
      numeros = pedirNumeros(2);
      let div = operacion.division(numeros); //Llamamos al método por medio del objeto, enviandole como argumento el arreglo de los números, y nos retornará la division
      if (div) alert("La division los números es: " + div); //Si el método retorno un valor númerico, mostrará el resultado
      break;
    
    case "e": //El programa termina si se ingresa una letra "f"
      alert("Programa terminado, muchas gracias por usarlo.");
      continuar = false; // cambiamos el valor de la variable a false, lo que nos permitirá romper el ciclo
      break;
    
    default: // Se muestra mensaje de error para cuando se ingrese una opción inválida.
      alert("ERROR: Opción inválida.")
      break;
  }
  
} while (continuar);