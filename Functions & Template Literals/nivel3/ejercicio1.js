"use strict"

function repeaterFunc() {
    return new Promise((resolve, reject) => {
      for(let i = 0; i < 10; i++) {
          console.log(i);
      }
      resolve();
    });
 }
 
 let functionsArr = Array.from(Array(10));
 functionsArr.fill(repeaterFunc);
 
 functionsArr.forEach( funcion => {
     funcion().then( result => result);
 });
 