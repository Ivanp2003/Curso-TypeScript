let apellido1:any //any es un tipo de dato que puede ser cualquier cosa, no se recomienda su uso porque pierde la seguridad de tipos y puede generar errores en tiempo de ejecución
apellido1="Panchi"
//apellido1 = 10
console.log("Apellido =",apellido1.toUpperCase());
console.log("Longitud apellido =",apellido1.length);


let apellido2:unknown //unknown es un tipo de dato que puede ser cualquier cosa, pero a diferencia de any, no permite realizar operaciones sin antes verificar el tipo de dato, es más seguro que any
apellido2="Panchi"
//apellido2 = 10
if(typeof apellido2 === "string"){
console.log("Apellido= ",apellido2.toUpperCase());
console.log("Longitud apellido =",apellido2.length);
}
