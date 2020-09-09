const hangman1 = new Hangman('Cat', 2)
const puzzleEl = document.querySelector('#puzzle')
const guessEl = document.querySelector('#guesses')
const messageEl = document.querySelector('#message')

puzzleEl.textContent = hangman1.getPuzzle()
guessEl.textContent = hangman1.remainingGuesses
console.log(hangman1.status)

window.addEventListener('keypress', function (e) {
    const guess = String.fromCharCode(e.charCode)
    hangman1.Guess(guess)
    puzzleEl.textContent = hangman1.getPuzzle()
    guessEl.textContent = hangman1.remainingGuesses
    messageEl.textContent = hangman1.status
    console.log(hangman1.status)
})