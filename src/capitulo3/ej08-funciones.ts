function sumar(a:number,b:number){
    return a+b;
}

let resultadoSuma:number = sumar(5,3);
console.log(resultadoSuma); // Output: 8

//fucnion que no devuelve ningun valor
function saludar(nombre:string):void{
    console.log(`Hola, ${nombre}!`);
}

saludar("Andrés"); // Output: Hola, Andrés

//funcion con parametros opcionales
function saludarConApellido(nombre:string, apellido?:string):string{//el signo de interrogacion indica que el parametro es opcional
    if(apellido){
        return `Hola, ${nombre} ${apellido}!`;
    }else{
        return `Hola, ${nombre}!`;
    } 
}
console.log(saludarConApellido("Andrés")); // Output: Hola, Andrés 
console.log(saludarConApellido("Andrés","Panchi")); // Output: Hola, Andrés Panchi!

//Funciones con valores por defecto
function saludarConCiudad(nombre:string, ciudad:string = "Ciudad Random"):string{
    return `Hola, ${nombre} de ${ciudad}!`;
}

console.log(saludarConCiudad("Andrés")); // Output: Hola, Andrés de Ciudad Random!
console.log(saludarConCiudad("Andrés","Buenos Aires")); // Output: Hola, Andrés