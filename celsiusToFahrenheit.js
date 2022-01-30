// Convert Celsius To Fahrenheit 
// Formula  °F = °C × (9/5) + 32.



function getFahrenheit(n){
    let result = n * (9/5) + 32;
    return "Your Fahrenheit Result Is A " + " : " + result
}
console.log(getFahrenheit(20))



// Another Idea To Find Out Celsius To Fahreheit 
// Formula °F = °C * 1.8000 + 32.00


function getFahrenheit(n){
    let result = n * 1.8000 + 32.00;
    return "Your Fahrenheit Result Is A " + " : " + result
}

console.log(getFahrenheit(20))
