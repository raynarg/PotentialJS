/* crear un algoritmo que reciba una array de objetos
y devuelva un array de pares. */

let array = [{
    id:1,
    name: 'nicolas',
}, {
    id:2,
    name: 'pedro',
}, {
    id:3,
    name: 'juan'
}
]

function inPairs(arr){
    let result = [];
    for (let i=0;i<arr.length;i++){
        let obj = arr[i];
        let par = [i, obj]
        result.push(par)
    }
    return result;
}

test = inPairs(array);
/* console.log(test);
 */
for(par of test){
    console.log(par)
}
