const hangman1 = new Hangman('Cat', 2)
const puzzleEl = document.querySelector('#puzzle')
const guessEl = document.querySelector('#guesses')
const messageEl = document.querySelector('#message')
const statusMsgEl = document.querySelector('#statusMessage')

puzzleEl.textContent = hangman1.getPuzzle()
guessEl.textContent = hangman1.remainingGuesses

getPuzzle((error, puzzle) => {
    if (error) {
        console.log(`Error: ${error}`)
    } else {
        console.log(puzzle)
    }
    
})


window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode)
    hangman1.Guess(guess)
    puzzleEl.textContent = hangman1.getPuzzle()
    guessEl.textContent = hangman1.remainingGuesses
    messageEl.textContent = hangman1.status
    statusMsgEl.textContent = hangman1.message
})