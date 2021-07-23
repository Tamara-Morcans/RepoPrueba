/* Crear un programa que determine si un número introducido en un Prompt es par o no, la respuesta será mostrada en un Alert.*/


var num = parseInt(prompt("Ingrese un número: "));

    if (num % 2 === 0){
        document.write("Sú numero es par");
    } else {
        document.write("Su número es impar");
    }

    