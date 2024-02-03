let computerNumber
let userNumbers = []
let maxGuesses = 10

function newGame() {
    window.location.reload(true)
}

function init() {
    computerNumber = Math.floor(Math.random() * 100 + 1)
    console.log(computerNumber)
}

function compareNumbers() {
   
   const userNumber = Number(document.getElementById('inputBox').value)
   userNumbers.push(' ' + userNumber)
   document.getElementById('guesses').innerHTML = userNumbers
   document.getElementById('attempts').innerHTML = userNumbers.length
   
    if (userNumbers.length < maxGuesses) {
        if (userNumber > computerNumber) {
            document.getElementById('textOutput').innerHTML = 'Your number is too high.'
            document.getElementById('inputBox').value = ''
          } else if (userNumber < computerNumber) {
            document.getElementById('textOutput').innerHTML = 'Your number is too low.'
            document.getElementById('inputBox').value = ''
          } else {
           document.getElementById('textOutput').innerHTML = 'Congratulations, you won!'
           document.getElementById('inputBox').setAttribute('Readonly', 'Readonly')

          }
    } else {
        document.getElementById('textOutput').innerHTML = 'You lose! The computer number was ' + computerNumber
        document.getElementById('inputBox').setAttribute('Readonly', 'Readonly')

    }
}

