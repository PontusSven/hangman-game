const Hangman = function (word, remainingGuesses) {
    this.word = word.toLowerCase().split('')
    this.remainingGuesses =  remainingGuesses
    this.guessedLetters = []
}

Hangman.prototype.getPuzzle = function () {
    let puzzle = ''
    this.word.forEach(letter => {
        if(this.guessedLetters.includes(letter) || letter === ' ') {
            puzzle += letter
        } else {
            puzzle += '*'
        }
    });
    return puzzle
}

Hangman.prototype.Guess = function (guess) {
    guess = guess.toLowerCase()
    const isUnique = !this.guessedLetters.includes(guess)
    const isBadGuess = !this.word.includes(guess)

    if (this.remainingGuesses <= 0) {
        console.log('No guesses left!')
    } else {
        if (isUnique && !isBadGuess) {
            this.guessedLetters.push(guess)
            console.log(this.getPuzzle())
            console.log('You guessed right!')
        }
    
        if (isUnique && isBadGuess) {
            this.remainingGuesses --
            console.log(this.getPuzzle())
            console.log('Bad Guess!')
            console.log(`Remaining guesses: ${this.remainingGuesses}`)
        }
    }
  
}

const hangman1 = new Hangman('Cat', 2)

window.addEventListener('keypress', function (e) {
    const guess = String.fromCharCode(e.charCode)
    hangman1.Guess(guess)
})

