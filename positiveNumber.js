// Get Positive Number in Array

function positiveNumber(arr){
    let positiveNum = [];
    for( let i = 0; i < arr.length; i++){
        if( arr[i] >= 0){
            positiveNum.push(arr[i])
        }
        else{
            break
        }
    }
    return positiveNum
}

let arr = [ 2, 3, 56, 8, 45, -23, 96, -12, -2, 32];
 console.log( positiveNumber(arr))



