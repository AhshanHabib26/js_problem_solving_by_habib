
// To Get Factorial Result


function getFactorial(number){
    let getFact = 1;
    for( let i = 1; i <= number; i++){
        getFact = getFact * i;
    }
    return getFact
}

let myFact = getFactorial(10);
console.log(myFact)
