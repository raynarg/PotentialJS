/* Crear array de longitud n, y sus elementos
deben ser desde 1 hasta n */
function nArray(n){
    if(n<=0){
        return [];
    }
    let result = [];
    for(let i=0;i<n;i++){
        result[i] = i+1;
    }
    return result;
}
let array = nArray(20);
for(let value of array){
    console.log(value);
}
