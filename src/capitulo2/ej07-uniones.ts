//Union
/*
let idPersona:number|string;

//idPersona puede ser un numero o una cadena de texto, pero no ambos al mismo tiempo
idPersona = 123;
idPersona = "456";
*/

type IDPERSONA = number | string;
let idPersona:IDPERSONA;
idPersona="123";
idPersona=11;

imprimirCodigo(idPersona)

function imprimirCodigo(id:IDPERSONA){
    if(typeof id === "string"){
        console.log(id.toUpperCase());
    } else {
        console.log(id);
    }
}

//Interseccion

type Producto={//Un producto tiene un id, un nombre y un precio
    id:number;
    nombre:string;  
    precio:number;
}

type ConDescuento={//Un producto con descuento tiene un descuento
    descuento:number;
}

type ProductoConDescuento = Producto & ConDescuento;

const libroEnOferta:ProductoConDescuento={
    id:12454,
    nombre:"Typescript",
    precio:20.00,
    descuento:0.15 //15% de descuento
};

