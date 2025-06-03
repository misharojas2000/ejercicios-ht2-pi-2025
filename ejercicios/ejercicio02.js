const readline = require(`readline-sync`)
//Variables declaradas:
let precio = Number(readline.question('Por favor ingrese el precio del producto: \n')) //Se convierte de un string a un number
let descuento = Number(readline.question('Por favor ingrese el porcentaje de descuento: \n')) //Se convierte de un string a un number
let precioFinal = precio - (precio * descuento / 100) //Operación para calcular el precio final tomando en cuenta el descuento ingresado
console.log(`El precio final con descuento es: Q${precioFinal}`) //Muestra el precio final con descuento aplicado

let estatura = Number(readline.question('Por favor ingrese su altura en centimetros: \n')) //Se convierte de un string a un number
if(estatura >= 120 & estatura <= 200){ //Condicional, si la estatura es mayor o igual a 120 cm y es menor o igual a 200 cm, entonces si puede ingresar
console.log('Puede ingresar al juego, que se divierta')
} else {
    console.log('Disculpe, usted no puede ingresar al juego') //De lo contrario, no puede ingresar 
}