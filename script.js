// C is for Cookie
const cookies = ["Oatmeal Raisin", "Chocolate Chip", "Sugar", "Peanut Butter", "Snickerdoodle", "Ginger"]
let y = 1

//to fix the scope, had to replace 'y' with 'x'
for (let x = 1; x < cookies.length; x++) {
    const currentCookie = cookies[x]
    console.log(`Mmmmmmm... that's a good ${currentCookie} cookie`)
}

// Conjunction Function
const conjunction = function (firstWord, secondWord) {
    const conjoinedWord = `${firstWord} ${secondWord}`
    //to fix, had to return the variable conjoinedWord
    return conjoinedWord;
}
//had to catch the variable in order to use it in te console log
conjoinedWordPrint = conjunction("Master", "Card")
console.log(conjoinedWordPrint)