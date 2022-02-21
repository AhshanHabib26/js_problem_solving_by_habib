// Get Total Cost Result

function pandaCost(count1, count2, count3){
   
    const num = count1 + count2 + count3
    if( typeof num != 'number'){
        return ' Please Enter A Number Value'
    }

    const shingahraPrice = 7;
    const samuchaPrice = 10;
    const zilapiPrice = 15;

    let shingharaTotalPrice = shingahraPrice * count1;
    let samuchaTotalPrice = samuchaPrice * count2;
    let zilapiTotalPrice = zilapiPrice * count3;

    const totalPrice = shingharaTotalPrice + samuchaTotalPrice + zilapiTotalPrice;

    return totalPrice
}

console.log(pandaCost(3, 15, 2))