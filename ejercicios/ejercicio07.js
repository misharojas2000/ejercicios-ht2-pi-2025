const readline = require('readline-sync')
let nombre = readline.question('Por favor ingrese su nombre\n')
let base = Number(readline.question('Por favor ingrese la base del triangulo:\n'))
let altura = Number(readline.question('Por favor ingrese la altura del triangulo:\n'))
function calcularAreaTriangulo(base, altura){
    area = (base * altura) / 2
    return area
}
function mostrarSaludo(nombre){
    return `Hola, ${nombre}. Bienvenido al sistema de geometría`
}
console.log(mostrarSaludo(nombre))
console.log(`El área del triángulo es: `, calcularAreaTriangulo(base, altura), `unidades`)