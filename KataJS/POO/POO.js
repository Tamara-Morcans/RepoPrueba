// NUESTROS AMIGOS DE CINEPOLIS, NOS HAN PEDIDO AYUDA CON LA GESTIÓN DEL CÁTALOGO DE PELICULAS 
// DEBEMOS ESPECIFIAR NOMBRE DE LA PELICULA, LA SALA, SU CLASIFICACIÓN Y SI HAY BOLETOS
// DISPONIBLES PARA LA FUNCION 
// |  ---- EJERCICIO 2  ----- |
// NUESTROS AMIGOS DE XBOX NOS SOLICITAN AYUDA URGENTE CON LA CREACIÓN DE NUEVOS CATALOGOS
// PARA CREARLOS NOS COMPARTE LA SIGUIENTE INFORMACIÓN
// CONSOLA: XBOX ONE, XBOX SERIES S, XBOX SERIES X, 3 VIDEOGUEJOS PARA CADA CONSOLA (DEPORTES, SHOOTER, AVENTURA, ETC.) DISPONIBILIDAD Y PRECIO DE CADA CONSOLA.

class Cinepolis{
    constructor(pelicula,sala,clasificacion,boletosdisponibles){
        this.pelicula = pelicula
        this.sala=sala
        this.clasificacion= clasificacion
        this.boletosdisponibles= boletosdisponibles

    }

    boletosdisponibles(){
        if(this.boletosdisponibles){
            return(`La pelicula ${this.pelicula}`)
        }
    }
        


}
