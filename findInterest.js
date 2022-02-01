// P = Principal Amount
// T = Time
// R = Annual Interest Rate
// N = Number Of Times That Interest 12 / 4


// function calculateInterest(p, t, r, n){
//     const amount = p * (Math.pow ((1 + ( r / n )), ( n * t)));
//     const interest = amount - p;
//     return interest;
// }

// console.log( calculateInterest(10000, 2, 5 , 4 ));


function calInterest( p , t , r){
    let result = p*t*r/100;
    return result
}
console.log(calInterest(2000, 12 , 10))