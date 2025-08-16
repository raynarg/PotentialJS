/**
 * Los objetos son un tipo de dato de referencia
 * Esto significa que la variable no guarda el valor directamente,
 * sino una referencia en el stack que apunta al valor real
 * almacenado en el heap.
 * 
 * Los objetos son una agrupación de datos que 
 * hacen sentido tenerlos juntos.
 * Lapiz (-color -longitud -fabricante)
 */

//Personaje de TV
const nombre = "Tanjiro";
const anime = "Demon";
const edad = 16;

let personaje = {
    nombre: nombre,
    anime: anime,
    edad: edad,
};

let personaje2 = {
    nombre: "javier",       // Par llave - valor -> [nombre] : ["Javier"] -> llave es tambien conocida como propiedad.
    apellido: "santaolla",
};


console.log(personaje.nombre);
console.log(personaje2["nombre"]);

delete personaje.anime;

console.log("\n"+personaje.anime)