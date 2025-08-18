/**
 * que imprima del numero 0 al 10 solo los impares
 */
function showImpar(){
    for(let i = 0; i < 10; i++){
     if (i%2 !== 0){
        console.log(i);
     }
    }
}
showImpar();