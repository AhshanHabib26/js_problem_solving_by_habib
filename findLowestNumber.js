// Find Lowest Number In Array Elements

// 1st Method

function findLowestNum(n){

    let lowestNum = n[0];
    for( let i = 1 ; i < n.length; i++){
        let element = n[i];
        if( element < lowestNum){
            lowestNum = element
        }
    }
    return " Lowest Number Is a : " + lowestNum
}

let arr = [ 12, 35, 4, 85, 78, 25, 3]
console.log(findLowestNum(arr))

// Or  2nd Method

let num = [12, 45, 36, 78, 8, 98];
let lowestNum = Math.min(...num);
console.log(lowestNum)


