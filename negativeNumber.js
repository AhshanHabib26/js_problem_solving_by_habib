// Get Negative Number in Array

function negativeNumber(arr){
    let positiveNum = [];
    for( let i = 0; i < arr.length; i++){
        if( arr[i] < 0){
            positiveNum.push(arr[i])
        }
    }
    return positiveNum
}

let arr = [ 2, 3, 56, 8, 45, -23, 96, -12, -2, 32, 15, -5, -8, 98, 26, -13];
 console.log( negativeNumber(arr))