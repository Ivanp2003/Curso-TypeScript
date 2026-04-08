/* 
Aserciones de Tipo

Las aserciones de tipo en TypeScript son una forma de 
indicarle al compilador que tú conoces mejor el tipo 
de una variable de lo que él podría inferir.
*/

let mensaje: unknown// el tipo unknown es un tipo seguro que puede contener cualquier valor, pero no se puede usar sin una aserción de tipo o una verificación de tipo

mensaje = "Hola mundo"//distinto a string

let resultado = (<string>mensaje).toUpperCase();// con la aserción de tipo le decimos al compilador que mensaje es un string, lo que nos permite usar métodos de string como toUpperCase()

console.log("resultado = ",resultado)
