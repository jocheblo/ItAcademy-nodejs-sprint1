"use strict"

function Persona(nombre, apellidos) {
    this.nombre = nombre;
    this.apellidos = apellidos;
}

//instancia para Victor
const persona1 = new Persona('Victor','Navarro');

//instancia para Manolete
const persona2 = new Persona('Manoleta','Bartolino');

console.log(`Las personas son: ${persona1.nombre} y ${persona2.nombre}`);