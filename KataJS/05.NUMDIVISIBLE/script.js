/*Solicitar al usuario un número, y determinar si es divisible entre dos o no. Mostrando al usuario un mensaje de “x número es divisible entre 2” o “x núm */

var numero = parseInt(prompt("Ingrese un número: "));

    if (numero % 2 === 0 ){
        
        document.write("Su número sí es divisible entre dos")
    }   else {
        document.write("Lo siento, su número no es divisible entre 2.")
    }

    