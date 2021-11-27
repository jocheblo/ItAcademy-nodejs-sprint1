"use strict"

class Persona {

    constructor() {
      if (this.constructor == Persona) {
        throw new Error("Clase abstracta, no puede ser instanciada");
      }
    }
  
  }
  
  let persona = new Persona();