
// Find Largset Number In Array 

// 1st Method

function getLargestNum(n){
    let largestNumber = 0;
    for( let i = 0; i < n.length; i++){
        let element = n[i]
        if( element > largestNumber){
            largestNumber = element
        }
    }
    return " Largest Number Is a : " + largestNumber
}

let arr = [ 20, 30, 52, 89, 12, 32, 45, 86, 120, 125]
console.log(getLargestNum(arr))



// Or 2nd Method

let num = [12, 45, 36, 78, 8, 98];
let largestNum = Math.max(...num);
console.log(largestNum)