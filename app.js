const hangman1 = new Hangman('Cat', 2)
const puzzleEl = document.querySelector('#puzzle')
const guessEl = document.querySelector('#guesses')
const messageEl = document.querySelector('#message')
const statusMsgEl = document.querySelector('#statusMessage')

puzzleEl.textContent = hangman1.getPuzzle()
guessEl.textContent = hangman1.remainingGuesses

window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode)
    hangman1.Guess(guess)
    puzzleEl.textContent = hangman1.getPuzzle()
    guessEl.textContent = hangman1.remainingGuesses
    messageEl.textContent = hangman1.status
    statusMsgEl.textContent = hangman1.message
})

getPuzzle().then((puzzle) => {
    console.log(puzzle)
}, (err) => {
    console.log(`Error: ${err}`)
})

