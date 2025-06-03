
const readline = require('readline-sync')
//Variables declaradas:
let nombre = readline.question('Por favor ingrese su nombre: \n')
let edad = Number(readline.question('Por favor ingrese su edad: \n')) //Se convierte de un string a un number
let activo = readline.question('Está activo(a)? Si / No\n').toLowerCase() //La respuesta se convierte a minúscula para que no de error más adelante
//en caso el usuario ingrese mayúsculas
let activoTrue = false
let valorNulo = null
let valorNoAsignado
//Se usó el if para declarar si la respuesta a si el usuario está activo es verdadera o falsa, y en base a la respuesta genera el mensaje 
//correspondiente
if(activo === "si"){
activoTrue = true
console.log(`Hola, me llamo ${nombre}, tengo ${edad} años y estoy activo(a): ${activoTrue}`)
} else {
    activoTrue = false
console.log(`Hola, me llamo ${nombre}, tengo ${edad} años y no estoy activo(a): ${activoTrue}`)
}
//Typos de variables
console.log(`Tipo de nombre: ${typeof nombre}`)
console.log(`Tipo de edad: ${typeof edad}`)
console.log(`Tipo de activo: ${typeof activo}`)
console.log(`Tipo de activoTrue: ${typeof activoTrue}`)
console.log(`Tipo de valorNulo: ${typeof valorNulo}`)
console.log(`Tipo de valorNoAsignado: ${typeof valorNoAsignado}`)

