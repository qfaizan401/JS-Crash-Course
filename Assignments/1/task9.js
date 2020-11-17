calcucaltor()

function calcucaltor() {
    let num1 = parseInt(prompt(`Enter first number`))
    let num2 = parseInt(prompt(`Enter second number`))

    document.write(`Sum of ${num1} and ${num2} is ${num1 + num2}.<br>
    Subtraction of ${num1} and ${num2} is ${num1-num2}.<br>
    Division of ${num1} and ${num2} is ${num1/num2}.<br>
    Modulus of ${num1} and ${num2} is ${num1%num2}`)
}
