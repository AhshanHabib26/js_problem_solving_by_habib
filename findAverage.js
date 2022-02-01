// Get Average Number in Array

function getAverageNum(n){
    let sum = 0;
    for( let i = 0; i < n.length; i++){
        sum += n[i]
    }
    return sum / n.length
}

let arr = [ 10, 20, 35, 64, 28, 54, 50, 85, 20]
console.log(getAverageNum(arr))