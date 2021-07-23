/* Solicitar al usuario que ingrese dos números y mostrar cuál de los dos es menor. No considerar el caso en que ambos números son iguales. */

var num1 = parseInt(prompt("Ingrese un número:"));
var num2 = parseInt(prompt("Ingrese otro número:"));

        if (num1 > num2){
            document.write("El número menor es: " + num2)
        } else if (num2 > num1){
            document.write("El número menor es: " + num1)
        } else if (num1 == num2){
            document.write("Es el mismo número.")
        }
