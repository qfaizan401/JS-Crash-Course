let numbers = inputs()
const firstNum = numbers[0], secondNum = numbers[1]

let answer = calculation(firstNum, secondNum)
const addition = answer[0], subtract = answer[1], multiply = answer[2], divide = answer[3]

function display() {
    document.getElementById('title').innerHTML = "Calculator using HTML and JS"
    document.getElementById('inputs').innerHTML = "Your input values are: " + firstNum + " and " + secondNum
    document.getElementById('output').innerHTML = "Results"
    document.getElementById('results').innerHTML = "Addition: " + addition + "<br>" + 
    "Subtraction: " + subtract + "<br>" + 
    "Multiplication: " + multiply + "<br>" +
    "Division: " + divide
}

display()

function inputs() {
    let num1 = parseInt(prompt('Enter 1st number'))
    let num2 = parseInt(prompt('Enter 2nd number'))
    return [num1,num2]
}

function calculation(num1, num2) {
    let add = num1 + num2
    let sub = num1 - num2
    let mul = num1 * num2
    let div = num1 / num2
    let result = [add,sub,mul,div]
    return result
}
