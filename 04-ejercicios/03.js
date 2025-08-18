/**
 * Indice validar que no sea menor a cero 
 * y que el elemento exista en el array
 */
function getbyIdx(arr,idx){
    let largoArray = arr.length;
    let valor;

    if(idx<0){
        return ("Error");
    }
    else if (idx >= largoArray){
        return ("Elemento Inexistente");
    }
    else{
        valor = arr[idx];
        return valor;
    }
    
}


let resultado = getbyIdx([4,2],1);
console.log(resultado)