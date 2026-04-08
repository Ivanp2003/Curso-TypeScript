/*Tenemos un objeto persona que tiene las propiedades
 ID, que es numerico , no es modificable
nombre, que es string
email que es string y opcional
esAdmin, que es booleano
 */

type Persona = {// el tipo Persona es un objeto con los siguientes atributos
    readonly id:number,// el atributo id es de tipo numero y readonly indica que no se puede modificar
    nombre:string,
    email?:string, // el signo de interrogacion indica que es opcional
    esAdmin:boolean
}

const persona1: Persona = {// el objeto persona1 es de tipo Persona
    id: 1,
    nombre: "Andres",
    email: "andres@email.com",
    esAdmin:false
}

const persona2: Persona = {
    id: 2,
    nombre: "Ivan",
    email: "ivan@email.com",
    esAdmin:true
}

