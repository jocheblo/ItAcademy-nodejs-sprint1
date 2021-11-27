"use strict"

let promesa = new Promise((resolve, reject) => {
    let numero = 1;
    setTimeout(() => {
        if(numero > 1) {
            resolve('El resultado es exitoso');
        } else {
            reject(new Error('Algo ha fallado'));
        }
    }, 1000);

});

promesa
    .then(msj => console.log(msj))
    .catch(error => console.log(error));