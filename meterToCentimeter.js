// Convert Meter To Centimeter

function meterToCentimeter(n){
    getCentimeter = n / 0.010000

    return 'Your Result: ' + getCentimeter + ' cm '
}

let inputNumber = 12;
let getResult = meterToCentimeter(inputNumber)
console.log(getResult)