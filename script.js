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

// Mod Squad
{
    const ModSquad = {
        "members": ["Pete Cochran", "Linc Hayes", "Julie Barnes", "Capt. Adam Greer", "Chief Barney Metcalf"],
        "series": {
            "start": "1968",
            "end": "1973"
        }
    }
//cannot append to a const.  Change to Let 
let HTMLRepresentation = `<h1>The Mod Squad</h1>`

    ModSquad.members.forEach(member => {
        
        HTMLRepresentation += `<div>${member}</div>`
        console.log(HTMLRepresentation)

        //return the variable so the rest of code can see it
        return HTMLRepresentation;
    })
    document.querySelector(".show-info").innerHTML = HTMLRepresentation
}
//catch the HTMLRepresentation variable coming out of the function
// catchString = member;
