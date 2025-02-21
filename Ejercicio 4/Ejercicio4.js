//Importamos la funciones que debemos utilizar
import { pedirNumero, pedirPalabra, palabrasMayor} from "./Modulo4.js";

//Pedimos la cantidad de palabras a ingresar, llamando a la función que nos válida que sea un número.
let cantPalabras = pedirNumero("Ingrese la cantidad de palabras que desea comparar");
let palabras = []; // Creamos un arreglo vacio en donde se almacenarán las palabras.

// for que nos ayudará a pedir las palabras según sea la cantidad
for (let i = 1; i <= cantPalabras; i++) {
  palabras.push(pedirPalabra(`Ingrese la palabra ${i}, por favor:`));  //pedimos la palabra, agregandola a su vez al arreglo
}

// llamamos a la función palabrasMayor enviandole como argumentos el array de palabras, la cual nos retorna la palabra que sea mayor alfabeticamente y la palabra que sea mayor por longitud.
let [palabraMayorAlf, palabraMayorLong] = palabrasMayor(...palabras);

//Mostramos el resultado
alert(`La palabra que es mayor, alfabeticamente es: ${palabraMayorAlf}
La palabra que es mayor, por longitud (cantidad de caracteres) es: ${palabraMayorLong}`);
