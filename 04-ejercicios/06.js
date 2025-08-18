/* 
Crear algoritmo que devuelva cantidad de numeros
positivos en un array */
function cantidadPositivo(arr){
    let contador = 0;
    for(let value of arr){
        if (value>0){
            contador++;
        }
    }
    return contador;
}

let array = [3, 9, 2, -3, -4, 1];
console.log(cantidadPositivo(array))