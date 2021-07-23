/* Para que yo me pueda vacunar, necesito cumplr algunos de estos requisitos: 
1) Mayores de 18 años que residen en un municipio fronterizo del norte del pais.
2) Embarazadas mayores de 18 años con más de 9 semanas de gestación.
3) Personas que cumplen 30 años o más en este estado.
*/


//Paso 1: Definir las variables que necesitamos:

var edad = parseInt(prompt("¿Qué edad tienes?"));
var fronterizo = prompt("¿Vives cerca de una zona frontriza? -Si o No");
var embarazada = prompt("¿Estas embarazada? -Si o No").toLocaleLowerCase();
var semanasgestacion= parseInt(prompt("En caso de estar embarazada ¿Cuantas semanas tienes? Si no es el caso contesta 0"));


//Paso 2: Validar la primera condición

if (edad >= 18 && fronterizo == "si") {
    document.write("Si te puedes vacunar por ser mayor de 18 y vivir en un municipio fronterizo del norte");

} else if (edad >= 18 && embarazada == "si" && semanasgestacion >= 9) {
    document.write("Si te puedes vacunar, por estar embarazada y ser mayor de 18 años")
} else if(edad>=30){
    document.write("Si te puedes vacunar, por tener 30 años o más")} else {
        document.write("Lo siento, no te puedes vacunar")
    }

