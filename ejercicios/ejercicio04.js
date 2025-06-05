const readline = require(`readline-sync`)
let numero = Number(readline.question(`Por favor ingrese un numero del 1 al 7:\n`))

switch(numero){
    case 1:
        console.log(`Lunes`)
        break
    case 2:
        console.log(`Martes`)
        break
    case 3:
        console.log(`Miércoles`)
        break
    case 4:
        console.log(`Jueves`)
        break
    case 5:
        console.log(`Viernes`)
        break
    case 6:
        console.log(`Sábado`)
        break
    case 7:
        console.log(`Domingo`)
        break
    default:
        console.log(`Día inválido`)
}

let semaforo = readline.question(`Por favor ingrese un color del semaforo: (verde, amarillo, rojo)\n`).toLowerCase()

switch(semaforo){
    case "verde":
        console.log(`Puede avanzar`)
    break
    case "amarillo":
        console.log(`Pase con precaución`)
    break
    case "rojo":
        console.log(`Deténgase`)
    break
    default:
        console.log(`Color no válido`)
}