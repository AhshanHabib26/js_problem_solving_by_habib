function picnicBudget(num){

    if( typeof num != 'number'){
        return ' Please Enter Only Number Value'
    }

    const firstGroup = 5000;
    const secondGroup = 4000;
    const thirdGroup = 3000;
 
    if ( num <= 100){
        const totalCost = num * firstGroup;
        return totalCost
    }
    else if( num <= 200){
        const firstGroupTotal = 100 * firstGroup;
        const dicreemnetTotal = num - 100;
        const secondGroupTotal = dicreemnetTotal * secondGroup;
        const totalCost = firstGroupTotal + secondGroupTotal;
        return totalCost
    }
    else{
         const firstGroupTotal = 100 * firstGroup;
         const secondGroupTotal = 100 * secondGroup;
         const dicreemnetTotal = num - 200;
         const thirdGroupTotal = dicreemnetTotal * thirdGroup;
         const totalCost = firstGroupTotal + secondGroupTotal + thirdGroupTotal;
         return totalCost
    }
 }
 
 console.log(picnicBudget(50))