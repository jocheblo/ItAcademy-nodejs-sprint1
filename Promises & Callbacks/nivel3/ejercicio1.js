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
},{
    id: 4,
    name: 'Manolo el del Copete'
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

const getSalary = (employee) => {
    return new Promise((resolve, reject) => {
           salaries.filter((salary) => {
                    if(salary.id === employee.id) {
                        resolve([employee.name, salary.salary]);
                    }
           });
           reject(new Error('No se han encontrado salarios!'));
    });
}

getEmployee(employees,2)
    .then( employee => getSalary(employee) )
    .then( (data) => console.log(`${data[0]} gana un salario de ${data[1]}`) )
    .catch( err => console.log(err));