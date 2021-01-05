let wordBank = ['tornado', 'spider', 'fork', 'hurricane', 'can', 'giratina', 'coballion', 'verizion', 'terekion', 'shiny']
let randomWordChoice = (wordBank) =>{
    let choice = Math.floor(Math.random() * (wordBank.length - 1))
    return wordBank[choice]
}
let display = document.getElementById("guessword")
let blankword = ["_","_","_","_","_","_","_","_","_","_","_","_",]
let gameWord = randomWordChoice(wordBank)
let blank = blankword.slice(0, gameWord.length)
let generateButton = () =>{
    let buttonsHTML = 'abcdefghijklmnopqrstuvwxyz'.split("").map(letter=>
        `
        <button
        style="font-size:45px;color:red;width:70px;height:70px;background-color:rgb(0,255,0);"
        class="btn btn-lg btn-primary m-2"
        id= `+ letter + `
        onclick="userGuess('` + letter + `')"
        >
        ` + letter + `
            </button>
    `).join("")
document.getElementById('keyboard').innerHTML = buttonsHTML
}
generateButton()

function  userGuess(answer){
    let guessWord = gameWord.split("")

    for (let i = 0; i < guessWord.length; i++){
        if (guessWord[i].includes(answer)){
            blank[i] = answer
        }
    }
    display.innerHTML = blank.join("")
    if(!blank.includes("_")){
        window.alert("WINNER!!!")

        }

}
