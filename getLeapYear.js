// Get Leap Year Prograam


function leapYear(number){
    if( number % 400 == 0 || (number % 100 != 0 && number % 4 == 0)){
        return "Yeah! This Is Leap Year."
    }
    else{
        return "OOPs! This Is Not Leap Year, Change Few Number"
    }
    
}
console.log(leapYear(2025))