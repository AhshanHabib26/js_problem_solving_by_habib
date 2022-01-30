// Convert Fahrenheit To Celsius 
//  Formula °C = (°F - 32) × 5/9 

function getCelsius(n){
    let result = (n-32) * 5 / 9;
    return "Your Celsius Result Is A " + " : " + result
}
console.log(getCelsius(10))


// Another Idea To Find Out Fahrenheit To Celsius 
// Formula °C = °F - 32 / 1.8000

function getCelsius(n){
    let result = (n-32) / 1.8000;
    return "Your Celsius Result Is A " + " : " + result
}
console.log(getCelsius(10))