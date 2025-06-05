const readline = require('readline-sync')
//Se usa new Date para convertir el dato ingresado en una fecha
let FechaNacimiento = new Date(readline.question('Por favor ingrese su fecha de nacimiento: (YYYY-MM-DD)\n'))
let añoNacimiento = FechaNacimiento.getFullYear()
//Al ingresar el new Date vacío, genera el año actual
let añoActual = new Date().getFullYear
let edad = añoActual - añoNacimiento

if(edad < 12){
    console.log(`Eres un niño`)
} else if(edad >= 12 && edad <= 17){
    console.log(`Eres un adolescente`)
} else if(edad >= 18 && edad <= 64){
    console.log(`Eres un adulto`)
} else {
    console.log(`Eres un adulto mayor`)
}

let nota = Number(readline.question(`Por favor ingrese la nota de examen: (0 - 100):\n`))

if (nota >= 90){
    console.log(`Su calificación es "A"`)
} else if(nota >= 80 && nota <= 89){
    console.log(`Su calificación es "B"`)
} else if(nota >= 70 && nota <= 79){
    console.log(`Su calificación es "C"`)
} else if(nota >= 60 && nota <= 69){
    console.log(`Su calificación es "D"`)
} else {
    console.log(`Su calificación es "F"`)
}