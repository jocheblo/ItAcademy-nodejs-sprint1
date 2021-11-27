"use strict"

const returnParameter = (param, callback) => {
    let mensaje = param === "Victor" ? "Hola soy Victor" : "Hola no soy Victor";
    callback(mensaje);
  };
  
  const imprimirMensaje = (mensaje) => {
    console.log(mensaje);
  };
  
returnParameter("Victor", imprimirMensaje);