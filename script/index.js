import { Suma } from './Ejercicio1.js'
import {Multiplicacion} from './Ejercicio2.js'

let num1;
let num2;

let btnEj1 = document.getElementById('Ejercicio1');
let btnEj2 = document.querySelector('#Ejercicio2');
let Resultado1 = document.getElementById('ResEj1')

function LeerDatos(){
    num1 = Number(prompt('Ingrese Número 1'));
    num2 = Number(prompt('Ingrese Número 2'));
}


btnEj1.addEventListener('click', () => {
    LeerDatos()
    console.log(Suma(num1, num2))
    console.log(`La suma es ${Suma(num1, num2)}`)
    Resultado1.innerHTML = `La suma es ${Suma(num1, num2)}`
})

btnEj2.addEventListener('click', ()=>{
    LeerDatos()
    console.log(Multiplicacion(num1, num2))
    console.log(`La Multiplicación es ${Multiplicacion(num1, num2)}`)
    Resultado1.innerHTML = `La Multiplicación es ${Multiplicacion(num1, num2)}`
})


// console.warn(Suma(4,5))
// console.error(Suma(4,5))
// console.info(Suma(4,5))