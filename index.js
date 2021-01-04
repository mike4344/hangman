const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
let wordBank = ['tornado', 'spider', 'fork', 'hurricane', 'can', 'giratina', 'coballion', 'verizion', 'terekion', 'shiny']
let randomWordChoice = (wordBank) =>{
    let choice = Math.floor(Math.random() * (wordBank.length - 1))
    return wordBank[choice]
}

let gameWord = randomWordChoice(wordBank)
let blankword = ["_","_","_","_","_","_","_","_","_","_","_","_",]
let blank = blankword.slice(0, gameWord.length)

let userGuess = (gameWord, answer = null) =>{
    let guessWord = gameWord.split("")
    for (let i = 0; i < guessWord.length; i++){
        if (guessWord[i].includes(answer)){
            blank[i] = answer
        }
    }
    console.log(blank.join(""))
    rl.question("guess a letter ", answer=>{
        if(!blank.includes("_")){
            console.log("winner")
           return rl.close()
        }
        userGuess(gameWord, answer)
    })
}
userGuess(gameWord)
