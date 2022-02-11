function anaToVori(num){
    if( typeof num != 'number'){
        return ' Please Enter A Number Value'
    }
    let getResult = num / 16;
    return getResult
 }
console.log(anaToVori(48))