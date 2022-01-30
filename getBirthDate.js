// Get Birth Year Odd Or Even 

function birthCheck(yourBirth){
    if( yourBirth % 2 == 0){
        return "Your Birth Date is: Even" 
    }
    else if( yourBirth % 2 == 1){
        return "Your Birth Date is: Odd" 
    }
    else{
        return false
    }
}

let myBirthDate = birthCheck(2000); 
console.log(myBirthDate)