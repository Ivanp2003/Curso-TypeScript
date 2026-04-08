let frutas:string[] = ["Manzana", "Pera", "Naranja"];

console.log(frutas[0]);
console.log(frutas[1]);
console.log(frutas[2]);

// let calificaciones:number[] = [8, 9, 10, 7, 6];
let calificaciones:Array<number> = [8, 9, 10, 7, 6]; //Otra forma de declarar un array, usando genéricos

calificaciones.forEach(calificacion => {//calificacion es el valor actual del array en cada iteración
    console.log(calificacion);
});
/*
console.log(calificaciones[0]);
console.log(calificaciones[1]);
console.log(calificaciones[2]);
console.log(calificaciones[3]);
console.log(calificaciones[4]);
*/