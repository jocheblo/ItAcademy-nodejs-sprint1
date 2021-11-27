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


const getSalary = (employee) => {
    return new Promise((resolve, reject) => {
           salaries.filter((salary) => {
                    if(salary.id === employee.id) {
                        resolve(salary.salary);
                    }
           });
           reject(new Error('No se han encontrado resultados!'));
    });
}


getSalary({id: 1, name: 'Linux Torvalds'})
  .then( salary => console.log(`El salario del empleado es: ${salary}`))
  .catch(error => console.log(error));