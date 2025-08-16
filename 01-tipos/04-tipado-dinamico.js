let numero = 33;
let nombre = "Hola m"
let verdadero = true;
let undef;
let nulo = null;

nombre = 53; //cambio de tipo de dato

console.log(typeof(nombre))
console.log(typeof(nulo)) //Esperariamos que de #null, sin embargo obtenemos object
/**
 * ¿Por que?
 * null esta siendo utilizado cuando existe un listado de objetos
 * entonces lo que null hace es representar es un objeto vacio
 * o la ausencia de un objeto
 */

