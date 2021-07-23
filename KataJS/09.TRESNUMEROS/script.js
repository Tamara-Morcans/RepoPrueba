/* Solicitar al usuario que ingrese tres números y mostrar cuál de los tres es el número mayor. Considerar el caso en que 2 números sean iguales. http://multimedia.uoc.edu/blogs/pw/es/2013/09/17/exercicis-de-javascript-iniciacio-solucions/*/ 

var n1 = parseInt(prompt("Ingrese un número:"));
var n2 = parseInt(prompt("Ingrese otro número:"));
var n3 = parseInt(prompt("Ingrese otro número:"));


if (n1 > n2 && n1 > n3 && n2 == n3) {
    document.write("El número mayor es:" + n1);
    } else if (n2 > n3 && n3 == n1) {
    document.write("El número mayor es:" + n2);
    } else  {
    document.write("El número mayor es:" + n3)} 
        
        
    

     

