var saldo=290;

/* Parte de ingresar monto */
function monto(){
    
    var dinero =parseInt(prompt(("¿Cuánto gustas depositar?")));
    if(dinero >990  || dinero<10){
        prompt("Lo siento, esta cantidad no puede ser depositada.")
    } else {
        alert("Su saldo final es: " + (dinero + saldo));
    }
}
/* Fin de Parte de ingresar monto */

/* Parte de retirar monto */

function retiro (){
var dinero =parseInt(prompt(("¿Cuánto gustas retirar?")));
    if(dinero == 0 || dinero>saldo){
        prompt("Lo siento, esta cantidad no puede ser retirada. No tiene saldo suficiente")
    } else {
        alert("Su saldo final es: " + (saldo - dinero));
    }
}
