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
         reject(new Error('No se han encontrado empleados!'));
    });
}

const getSalary = (employee) => {
    return new Promise((resolve, reject) => {
           salaries.filter((salary) => {
                    if(salary.id === employee.id) {
                        resolve(salary.salary);
                    }
           });
           reject(new Error('No se han encontrado salarios!'));
    });
}

//async function
const getEmployeeInfo = async (idEmp) => {
  try{
      const employee = await getEmployee(employees, idEmp);
      const salary = await getSalary(employee);
      console.log(`El empleado es ${employee.name} y tiene un salario de ${salary} euros.`);
  } catch (err) {
     console.log(err);
  }
  
}

//promise function
const promesa = (number) => {
    return new Promise((resolve, reject) => {
       if(number === 1) {
           setTimeout(() => {
               resolve('test');
           }, 2000);
          return
       }
      reject(new Error('Ha habido un error!'));
    });
}


//async await function
const asincrona = async () => {
  try{
        const employee = await getEmployee(employees, 4);
        const salary = await getSalary(employee);
        const arr = await promesa(0);
  } catch(err) {
      console.log(err)
  };

}

asincrona();

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
         reject(new Error('No se han encontrado empleados!'));
    });
}

const getSalary = (employee) => {
    return new Promise((resolve, reject) => {
           salaries.filter((salary) => {
                    if(salary.id === employee.id) {
                        resolve(salary.salary);
                    }
           });
           reject(new Error('No se han encontrado salarios!'));
    });
}

//async function
const getEmployeeInfo = async (idEmp) => {
  try{
      const employee = await getEmployee(employees, idEmp);
      const salary = await getSalary(employee);
      console.log(`El empleado es ${employee.name} y tiene un salario de ${salary} euros.`);
  } catch (err) {
     console.log(err);
  }
  
}

//promise function
const promesa = (number) => {
    return new Promise((resolve, reject) => {
       if(number === 1) {
           setTimeout(() => {
               resolve('test');
           }, 2000);
          return
       }
      reject(new Error('Ha habido un error!'));
    });
}


//async await function
const asincrona = async () => {
  try{
        const employee = await getEmployee(employees, 4);
        const salary = await getSalary(employee);
        const arr = await promesa(0);
  } catch(err) {
      console.log(err)
  };

}

asincrona();

