//Importamos la funciones que debemos utilizar
import { pedirNumero, ordenarArreglo } from "./Modulo3.js";

//Pedimos la cantidad de números, llamando a la función que nos válida que sea un número.
let cantNumeros = pedirNumero("Ingrese la cantidad de números que desea ordenar");
let numeros = []; // Creamos un arreglo vacio en donde se almacenarán los números

// for que nos ayudará a pedir los números de números según sea la cantidad
for (let i = 0; i < cantNumeros; i++) {
  numeros.push(pedirNumero(`Ingrese el número ${i+1}, por favor:`));  //pedimos el número, agregandolo a su vez al arreglo
}

// Llamamos a la función ordenarArreglo, a la cual le enviamos como argumento el arreglo de números y nos retorna un nuevo arreglo  con los números ordenado.
let numerosOrdenados = ordenarArreglo(...numeros);

//Mostramos el nuevo arreglo por consola a manera de tabla
console.table(numerosOrdenados);