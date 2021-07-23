/* Solicitar al usuario un número de cliente. Si el número es el 1000, imprimir "Ganaste un premio", en caso contrario mostrar el número y el mensaje “Lo sentimos, sigue participando”. */

var usuario = parseInt(prompt("¿Qué número de cliente eres?"));

    if(usuario == 1000){
        document.write("¡Felicidades! Eres el ganador.")
    } else {
        document.write("Lo sentimos, sigue participando")
    }