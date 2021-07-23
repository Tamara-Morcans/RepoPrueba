/*----------------------------------------------------
|2.- Hacer una función que muestre la tabla de |
| multiplicar de un número                                   |
-------------------------------------------------------- */

/*function multi() {

    num = document.getElementById("num").value;
    num = parseInt(num);

    for (var i = 1; i <= 10; i++) {
        tabla = num * i;
        document.write(num + "x" + i + "=" + tabla + "<br>");
    }
}*/


const tabla = {
    numero: "5,10,15,20,25",
    rango: "tabla del 5",
    naturales: "pares e impares",

};

const {numero,rango,naturales} = tabla
console.log(`${numero} pertenece a la ${rango} y contiene los numeros que son ${naturales}`);

``