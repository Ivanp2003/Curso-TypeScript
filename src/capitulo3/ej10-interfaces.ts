/*
Define la forma  de un objeto,
es ideal para describir objetos,
clases y funciones
Es un contrato de como debe lucir un ibjeto
*/


interface ProductoComercial{
    nombre: string,
    precio: number,
    stock:boolean,
    color?: string, // el signo de interrogacion hace que la propiedad sea opcional
}

const miProducto : ProductoComercial={
    nombre: "computador",
    precio: 1000,
    stock: true,
    color: "gris"
}


