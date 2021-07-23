let centrigrados = document.querySelector('#centigrados');/* Obtiene el dato celsius */
let F_button = document.querySelector('#Far'); /* Obtiene la acción de F botón */

const resultado = document.querySelector('#Resultado'); /* Llama a la etiqueta vacía h2*/

F_button.addEventListener('click',function(){
    let Fahrenheit = 1.8*(parseInt(centrigrados.value)) + 32;
    resultado.textContent = `Los grados Fahrenheit son: ${Fahrenheit}`;   
})

