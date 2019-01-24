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

        
    })
    document.querySelector(".show-info").innerHTML = HTMLRepresentation
}


// Simon Says
// There are two separate scoping issues in this code. Remember, for and if are their own block scopes and if something is declared with let or const then that variable only exists in that scope.

let locations = [[1,1], [1,2], [1,3], [2,1], [2,2], [2,3]]
// initialize a variable outside the for loop to count invalid locations
let invalidCount = 0;

for (let k = 0; k < locations.length; k++) {
    const currentLocation = locations[k]
//looks a the current locator points within the array.  If Y value is greater than 2, it is invalid.
    if (currentLocation[1] > 2) {
        const invalidLocation = true
        console.log("This location", k-1, "is invalid")
        //increment the counter for invalid locations
        invalidCount = invalidCount + 1;
    }
//No need for this additional if statement.  Perform all actions inside the other if statement.
    // if (invalidLocation) {
      

    // }
}

/*
    Since k is used as the loop counter, it will be the
    total number of locations, not the invalid ones. Use the variable set in the global scope
*/
console.log(`There were ${invalidCount} invalid locations`)


// Advanced Challenge: Lambda Llama
// Not only can functions take other functions as arguments, but functions can also return functions! This is marked as an advanced challenge because you haven't been introduced to this concept yet.

// The llamaNamer function defines an internal function and your job is to rewrite this code so that the internal function gets returned.

// Remember, come to the staff and ask questions if you decide to take this one on and get stuck.

const llamaNamer = function () {
    const possibleNames = ["Larry", "Leon", "Leona", "Les", "Laura", "Lemony", "Lars", "Lekisha"]
    const randomizer = Math.floor(Math.random() * 7)

    const namer = function () {
        const suffix = " the Llama"
        const name = possibleNames[randomizer]
        //console log to check 
        console.log("this is the random name", name);
        //return the name and suffix to be used outside namer()
        return name + suffix
    }
//call the function "namer" and catch the name and suffix to be used outside namer()
randomNameString = namer()

//console log to check
console.log("this is the random name string", randomNameString)
//return the randomNameString from the function so it is available outside namer(), inside llamaNamer()
return randomNameString;
    
}
//catch the variable randomNameString so you can use it in the global scope (outside llamaNamer)
nameMaker = llamaNamer()

//nameMaker is a variable, not a function.  Show accordingly.
console.log(nameMaker)