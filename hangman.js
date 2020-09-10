class Hangman {
    constructor(word, remainingGuesses) {
        this.word = word.toLowerCase().split('')
        this.remainingGuesses =  remainingGuesses
        this.guessedLetters = []
        this.status = 'playing'
        this.message = ''
    }

    getPuzzle() {
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

    Guess(guess) {
        guess = guess.toLowerCase()
        const isUnique = !this.guessedLetters.includes(guess)
        const isBadGuess = !this.word.includes(guess)
    
        if (this.status === 'playing') {
            if (isUnique && !isBadGuess) {
                this.guessedLetters.push(guess)
            }
        
            if (isUnique && isBadGuess) {
                this.remainingGuesses --
            } else if (!isUnique) {
                console.log('Value has already been guessed!')
            }
    
            this.caluclateStatus()
            this.statusMessage()
        }
    }

    caluclateStatus() {
        let finished = true

        this.word.forEach(letter => {
            if (!this.guessedLetters.includes(letter)) {
                finished = false
            } 
        });

        if (this.remainingGuesses === 0) {
            this.status = 'failed'
        } else if (finished) {
            this.status = 'finished'
        } else {
            this.status = 'playing'
        }
    }

    statusMessage() {
        if (this.status === 'finished') {
            this.message = 'Great work! You guessed the word.'
        } else if (this.status === 'failed') {
            const word = this.word.join('')
            this.message = `Nice try! The word was "${word}"`
        } else {
            this.message = `Guesses left: ${this.remainingGuesses}`
        }
    }
}



