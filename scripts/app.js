let hangman1
const puzzleEl = document.querySelector('#puzzle')
const guessEl = document.querySelector('#guesses')
const messageEl = document.querySelector('#message')
const statusMsgEl = document.querySelector('#statusMessage')

window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode)
    hangman1.Guess(guess)
   render()
})

const render = () => {
    puzzleEl.textContent = hangman1.getPuzzle()
    guessEl.textContent = hangman1.remainingGuesses
    messageEl.textContent = hangman1.status
    statusMsgEl.textContent = hangman1.message
}

const startGame = async () => {
    const puzzle = await getPuzzle()
    hangman1 = new Hangman(puzzle, 5)
    render()
}
document.querySelector('#reset').addEventListener('click', startGame)

startGame() 

getPuzzle().then((puzzle) => {
    //console.log(puzzle)
}, (err) => {
    console.log(`Error: ${err}`)
}).catch((err) => {
    console.log(err)
})

