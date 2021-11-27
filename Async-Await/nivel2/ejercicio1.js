"use strict"

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
        const arr = await promesa(1);
        console.log(arr);
  } catch(err) {
      console.log(err)
  };

}

asincrona();