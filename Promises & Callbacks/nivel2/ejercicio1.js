"use strict"

let employees = [{
    id: 1,
    name: 'Linux Torvalds'
}, {
    id: 2,
    name: 'Bill Gates'
},{
    id: 3,
    name: 'Jeff Bezos'
}];
 
let salaries = [{
    id: 1,
    salary: 4000
}, {
    id: 2,
    salary: 1000
}, {
    id: 3,
    salary: 2000
}];

const getEmployee = (findableObj, id) => {
     return new Promise((resolve, reject) => {
          findableObj.filter( personaje => {
              if(personaje.id === id) {
                   resolve(personaje);
              }
          });
         reject(new Error('No se han encontrado resultados!'));
    });
}

getEmployee(employees, 1)
  .then( encontrado => console.log(encontrado) )
  .catch( error => console.log(error))