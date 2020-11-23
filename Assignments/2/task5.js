let num = Math.floor(Math.random()*10)
let userInput = parseInt(prompt('Enter a number'))

if (userInput == 7) {
    document.write('Bingo! Correct answer')
} else if (userInput == num+1 || userInput ==  num-1) {
    document.write('Close enough to the correct answer')
} else {
    document.write('Too Far')
}