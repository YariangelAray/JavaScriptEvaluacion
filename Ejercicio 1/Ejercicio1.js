// Importamos las funciones a utilizar
import { validarTarjeta, solicitarOpc } from "./Modulo1.js";

// Pedimos el tipo de tarjeta de credito que retorna de la funcion soolicitarOpc
let tipoTarjetaOpc = solicitarOpc();

// Definimos una cantidad de dígitos predeterminada
let cantDigitos = 16;
// definimos las variables que se modificarán según el tipo de tarjeta que tenga el usuario
let nomenclatura;
let tipoTarjeta;

// evaluamos la opcion de la tarjeta
switch (tipoTarjetaOpc) {
  case 1: // si es opcion uno, el tipo de tarjeta es American Express
    tipoTarjeta = "American Express";
    cantDigitos = 15; // la cantidad de dígitos cambia a 15
    nomenclatura = /^(3[4-7])/; // y definimos la expresión regular que indica que debe comenzar con un 3 y que seguidamente debe haber un número con rango entre 4 y 7.
    break;
  case 2:
    tipoTarjeta = "Diners Club"; // si es opcion dos, el tipo de tarjeta es Diners Club
    cantDigitos = 14; // la cantidad de dígitos cambia a 14
    nomenclatura = /^(30[0-5])|(3[6-8])/; // y definimos la expresión regular que indica que debe comenzar con un 30 y que seguidamente debe haber un número con rango entre 0 y 5, o con un 3 seguidamente de un número que se encuentre en el rango de 6 y 8.
    break;
  case 3: // Si es opcion tres, el tipo de tarjeta es Discover
    tipoTarjeta = "Discover";
    nomenclatura = /^6011/; // la cantidad de dígitos sigue siendo 16, así que no se modifica, y la expresión regular indica que debe comenzar con 6011.
    break;
  case 4:
    tipoTarjeta = "MasterCard";  // Si es opcion cuatro, el tipo de tarjeta es MasterCard
    nomenclatura = /^(5[1-5])/; // y definimos la expresión regular que indica que debe comenzar con un 5 y que seguidamente debe haber un número con rango entre 1 y 5.    
    break;
  default:
    tipoTarjeta = "Visa"; // Si es opcion cinco, el tipo de tarjeta es Visa
    nomenclatura = /^4/; // Y definimos la expresión regular que indica que debe comenzar con un 4.
    break;
}

// llamamos a la función que nos retorna el mensaje cuando la tarjeta es válida. Se envian como argumentos la cantidad de dígitos, la nomenclatura, y el tipo de tarjeta
alert(validarTarjeta(cantDigitos, nomenclatura, tipoTarjeta));