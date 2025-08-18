/**
 * funcion que devuelva el elemento mayor y menor de un array
 */
function getMenorMayor(arr){
    let auxMin, auxMax; 
    auxMin = arr[0];
    auxMax = arr[0];
    //FOR CLASICO
    /* for (let i=0; i<arr.length; i++){
        if (arr[i]<auxMin){
            auxMin = arr[i];
        } 
        if (arr[i]>auxMax){
            auxMax = arr[i];
        }
    } */
    for(value of arr){
        if(value<auxMin){auxMin=value}
        if(value>auxMax){auxMax=value}
    }
    
    let valoresExtremos = [auxMin,auxMax];
    return valoresExtremos;
}

let array = [10, 3, -3, 0, -4]
resultado = getMenorMayor(array);

for (let valor of resultado){
    console.log(valor);
}