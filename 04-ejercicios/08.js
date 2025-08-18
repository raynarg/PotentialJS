let pairs = [
    [ 0, { id: 1, name: 'nicolas' } ],
    [ 1, { id: 2, name: 'pedro' } ],
    [ 2, { id: 3, name: 'juan' } ]
];

function inversePair(arr){
    let result = [];
    for (let i=0; i<arr.length; i++){
        let par = arr[i];
        let aux = par[1];
        result.push(aux);
    }
    return result;
}

console.log(inversePair(pairs));