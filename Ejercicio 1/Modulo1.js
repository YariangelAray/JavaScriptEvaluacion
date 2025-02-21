export let solicitarOpc = () => { // función para solicitar la opción (el tipo de tarjeta)
  while (true) {
    let opcion = parseInt(prompt(`Seleccione su tipo de tarjeta de crédito: 
    1. American Express
    2. Diners Club
    3. Discover
    4. MasterCard
    5. Visa
  Ingrese el número: `));
    // Si lo ingresado esta fuera del rango o es una cadena vacía (false) vuelve a pedir la opcion, hasta que sea correcta y se rompa el ciclo.
    if (opcion < 1 || opcion > 5 || !opcion) alert("Ingrese una opción válida.")
    else return opcion;
  }
}

export let validarTarjeta = (cantDigitos, nomenclatura, tipoTarjeta) => { // función para validar la tarjeta que recibe omo parámetros la cantidad de dígitos, la nomenclatura, y el tipo de tarjeta

  // definimos la expresión regular que nos ayudará a validar que sean solo números y tenga la cantidad necesaria de números
  let regexNumeros = new RegExp(`^\\d{${cantDigitos}}$`); //Usamos esta forma para poder usar las plantillas de texto y asi interpolar la variable de los dígitos, que cambia según el tipo de tarjeta.
  
  while (true) {
    let errores = ""; // cadena de texto en donde se concatenarán los errores.
    let numeroTarjeta = prompt(`Ingrese el número de su tarjeta de crédito ${tipoTarjeta}.\n(Cantidad de dígitos: ${cantDigitos})`);
    
    if (!regexNumeros.test(numeroTarjeta)) // verificamos que el número de la tarjeta cumpla con la expresión regular que válida que sean números y la cantidad de dígitos. Si nos da false, lo negamos (se convierte en true) para que pueda entrar al if y agregar el error a la cadena de texto.
      errores += `• El número de tarjeta solo debe contener números y ${cantDigitos} dígitos.\n`; 
    
    if (!nomenclatura.test(numeroTarjeta)) // verificamos que el número de la tarjeta cumpla con la expresión regular que válida que comience por la nomnclatura correspondiente. Si nos da false, lo negamos (se convierte en true) para que pueda entrar al if y agregar el error a la cadena de texto.
      errores += `• El número de su tarjeta de crédito no comienza por la nomenclatura correspondiente.\n`;
    
    // Si la cadena de errores esta vacia (esto en booleano sería igual a false), significa que la tarjeta es válida. Así que retornamos el mensaje. Lo que rompe el ciclo y se sale de la función.
    if (!errores) return "☑ Su tarjeta de crédito es válida."; // Usamos la negación para que el false se vuelva true
    else alert(`✖ Su tarjeta de crédito es inválida:\n${errores}`) // Si no esta vacía, mostramos los errores y se vuelve a pedir el número de la tarjeta
  }

}