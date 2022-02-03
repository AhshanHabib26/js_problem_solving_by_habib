// Get Book Print Paper Count

function paperRequirments(firstBook, secondBook, thirdBook ){
   let  firstBookPaperCount = firstBook * 100
   let secondBookPaperCount = secondBook * 200
   let thirdBookPaperCount = thirdBook * 300
   let getTotalPaper = firstBookPaperCount + secondBookPaperCount + thirdBookPaperCount
   return getTotalPaper

}

let programmingBook = 10
let storyBook = 20
let englishBook = 30
let totalBook = programmingBook + storyBook + englishBook
let totalPaperCount = paperRequirments(10, 20, 30)

let getResult = ' Your Total Book: ' + totalBook + ' & ' + ' Your Total Book Paper: ' + totalPaperCount

console.log(getResult)
