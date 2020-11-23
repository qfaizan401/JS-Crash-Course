let num1 = parseInt(prompt(`Enter first number`))
let num2 = parseInt(prompt(`Enter second number`))
let operation = prompt(`Enter operation`)

if (operation == '+') {
    document.write(`The addition of num1 and num2 is: ${num1+num2}`)
} else if (operation == '-') {
    document.write(`The subtraction of num1 and num2 is: ${num1-num2}`)
} else if (operation == '*') {
    document.write(`The product of num1 and num2 is: ${num1*num2}`)
} else if (operation == '/') {
    document.write(`The division of num1 and num2 is: ${num1/num2}`)
} else {
    document.write('Invalid operation')
}