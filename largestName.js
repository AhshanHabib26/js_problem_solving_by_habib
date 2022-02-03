// Get Largest Number in Array

function bestFriend(arr){
    let largeName = ''
    for( let i = 0; i < arr.length; i++){
        if ( arr[i].length > largeName){
            largeName = arr[i] + ' ' + ' Total: ' + arr[i].length + ' Letter'
        }
    }
    return largeName
}

let friendName =  [ 'Mohammad Ahshan Habib', 'Abu Yousuf', 'Nory Alom Rony', 'Hasan Ahmad Foyez']
let getLargeName = bestFriend(friendName)
console.log(getLargeName)