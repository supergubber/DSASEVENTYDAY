function isMin(arr){
    let min = arr[0];
    for(let i=0;i<arr.length;i++){
        if(arr[i]<min){
            min = arr[i];
        }
    }
    return min;
}

module.exports = isMin;