let num = Math.floor(Math.random()*10)
let userInput = parseInt(prompt('Enter a number'))

if (userInput == num) {
    document.write(`Bingo! Correct answer`)
} else if (userInput == num+1 || userInput ==  num-1) {
    document.write(`Close enough to the correct answer <br> Guess number is ${num}`)
} else {
    document.write(`Too Far <br> Guess number is ${num}`)
}
