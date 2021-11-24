"use strict"

const repeaterFunc = () => {
    for(let i = 0; i < 10; i++) {
        console.log(i)
    }
}

const functionsArr = [repeaterFunc, repeaterFunc, repeaterFunc, repeaterFunc, repeaterFunc, repeaterFunc, repeaterFunc, repeaterFunc, repeaterFunc, repeaterFunc]

functionsArr.forEach(funcion => console.log(funcion()));