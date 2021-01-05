let wordBank = ['tornado', 'spider', 'fork', 'hurricane', 'can', 'giratina', 'coballion', 'verizion', 'terekion', 'shiny']
let randomWordChoice = (wordBank) =>{
    let choice = Math.floor(Math.random() * (wordBank.length - 1))
    return wordBank[choice]
}
let display = document.getElementById("guessword")
let pic = document.getElementById('pic')
let blankword = ["_","_","_","_","_","_","_","_","_","_","_","_",]
let n = 1
let gameWord = randomWordChoice(wordBank)
let blank = blankword.slice(0, gameWord.length)
let generateButton = () =>{
    let buttonsHTML = 'abcdefghijklmnopqrstuvwxyz'.split("").map(letter=>
        `
        <button
        style="font-size:45px;color:red;width:55px;height:60px;background-color:rgb(0,255,0);"
        class="btn btn-lg btn-primary m-2"
        id= `+ letter + `
        onclick="userGuess('` + letter + `'); image()"
        >
        ` + letter + `
        </button>
        `).join("")
        document.getElementById('keyboard').innerHTML = buttonsHTML
    }
    let isthere = true
    function image(){
        if(n > 8){
            location.reload()
        }
            pic.src=`images/step${n}.jpg`}

    generateButton()
    function  userGuess(answer){
        let guessWord = gameWord.split("")
        if(!gameWord.includes(answer)){
            n = n + 1
        }

    for (let i = 0; i < guessWord.length; i++){
        if (guessWord[i].includes(answer)){
            blank[i] = answer
        }
    }
    display.innerHTML = blank.join("")
    if(!blank.includes("_")){
        window.alert("WINNER!!!")
        location.reload()

    }

}
