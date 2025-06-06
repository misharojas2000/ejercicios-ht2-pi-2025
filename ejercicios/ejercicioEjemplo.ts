
//Ejercicio enum
enum RolUsuario {
    Administrador,
    Editor,
    Lector
}
function mostrarPermisos(rol: RolUsuario): void{
    switch(rol){
        case RolUsuario.Administrador:
            console.log(`Permisos Administrador: Ver, editar y eliminar contenido`)
        break
        case RolUsuario.Editor:
            console.log(`Permisos Editor: Ver y editar contenido`)
        break
        case RolUsuario.Lector:
            console.log(`Permisos Lector: Ver contenido`)
        break
        default:
            console.log(`Rol no encontrado`)
    }
}
mostrarPermisos(RolUsuario.Administrador)
mostrarPermisos(RolUsuario.Editor)
mostrarPermisos(RolUsuario.Lector)


//******************************************************************************************************************************************** */
//ejercicio clase
class Producto{
    nombre: string
    precio: Number
    categoria: string

    constructor(nombre: string, precio: Number, categoria: string){
        this.nombre = nombre
        this.precio = precio
        this.categoria = categoria
    }

    mostrarInformacion(): void {
        console.log(`Producto: ${this.nombre}`)
        console.log(`Precio: Q${this.precio}`)
        console.log(`Categoria: ${this.categoria}`)
    }
}

const producto1 = new Producto("Chocolate", 50.00, "Dulce")
const producto2 = new Producto("Computadora", 8500.00, "Electrónico")
const producto3 = new Producto("Blusa", 25.00, "Ropa")

producto1.mostrarInformacion()
producto2.mostrarInformacion()
producto3.mostrarInformacion()
