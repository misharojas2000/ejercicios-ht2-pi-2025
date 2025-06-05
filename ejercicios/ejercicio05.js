const readline = require('readline-sync')
let cantidadSegundos = Number(readline.question(`Cuantos segundos desea temporizar?\n`))
const hora = new Date().toLocaleTimeString()

while(cantidadSegundos >= 0){
    console.log(`Faltan ${cantidadSegundos} segundos`)
    cantidadSegundos --
}
console.log(`El tiempo finalizó`)

let menu = ""
do{
    menu = readline.question(`
        Menu de opciones:\n
        1. Saludar
        2. Mostrar hora actual
        3. Salir\n
        `)

        
    switch(menu){
       case "1":
        let nombre = readline.question('Por favor ingrese su nombre:\n')
        console.log(`Hola ${nombre}, que tengas bonito día!`) 
        break
       case "2":
        console.log(`La hora actual es: ${hora}`) 
        break
       case "3":
        console.log(`Saliendo del menú`) 
        break
        default:
            console.log(`Esa opción no es válida, intente nuevamente`)
    }
} while(menu != "3")