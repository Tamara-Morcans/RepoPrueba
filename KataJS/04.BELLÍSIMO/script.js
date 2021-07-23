/* Solicitar al usuario que responda a la pregunta (“¿Eres bellisimo/a?”), en caso de contestar sí, responder “Ciertamente”, en caso de contestar no, responder: “No te creo”.*/ 


var user = prompt("¿Eres bellísimo/a?")
    if (user == "si"){
        document.write("Ciertamente");
    } else if(user == "no"){
        document.write("No te creo.")
    }