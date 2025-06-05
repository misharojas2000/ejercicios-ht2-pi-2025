const productos = [
    { nombre: 'Zapatos', precio: 100 },
    { nombre: 'Camisa', precio: 80 },
    { nombre: 'Pantalón', precio: 120 },
    { nombre: 'Corbata', precio: 50 },
]
let productosIVA = productos.map(producto => {
    return{
        nombre: producto.nombre, //Agrega el nombre del producto primero
        precioIVA: Number((producto.precio * 1.12).toFixed(2) )//Muestra el precio del producto con el valor del IVA
    }
})
console.log(`
    El precio original de los productos es:\n`,
    productos,
    `El precio de los productos con IVA incluido es:\n`,
    productosIVA)

let preciosFiltrados = productosIVA.filter(producto => producto.precioIVA >= 100)
console.log(`Los productos con precio mayor a 100 con IVA incluido son:\n`,
    preciosFiltrados
)

let productosOrdernados = productosIVA.sort((a, b) => {
    return a.precioIVA - b.precioIVA})
console.log(`Los productos ordenados de precio menor a mayor son:\n`,
productosOrdernados
)