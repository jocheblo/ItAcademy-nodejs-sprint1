"use strict"

class Persona {
    constructor(nombre) {
        this.nombre = nombre;
    }
    decirNombre = () => {
        console.log(this.nombre)
    }
}

const persona = new Persona('Victor Navarro');

persona.decirNombre();

