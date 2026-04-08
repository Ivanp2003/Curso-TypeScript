//Imagina que tenemos la respuesta de una API que nos devuelve un objeto con el nombre y la edad de una persona, pero no sabemos exactamente qué tipo de datos va a devolver. En este caso, podríamos usar una tupla para almacenar esta información.
// que me devuelve codigo numerico(status)
// y el mensaje de las respuesta(message
//la tupla seria [status,message]
//los tipos de datos de la tupla serian [number,string]

let respuesta:[number,string]
respuesta=[200,"Exitoso"];//Asignamos un valor a la tupla, el primer elemento es un numero y el segundo es una cadena de texto

console.log("status= ",respuesta[0]);
console.log("message= ",respuesta[1]);

let usuario:[number,string,boolean];
usuario=[200,"miclave.01",true];

console.log("ID= ",usuario[0]);
console.log("Password= ",usuario[1]);
console.log("Estado= ",usuario[2]);