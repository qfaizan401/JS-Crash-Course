/*
console.log("Hello world");
//alert("This is a Home Page");

// Variables

var someText = "My first variable in JS";
console.log(someText);

var someNumber = 18;
//alert(someNumber);
console.log(someNumber);

var age = prompt('What is your age?');
document.getElementById('boldText').innerHTML = age;
document.getElementById('para').innerHTML = "I am changing HTML by JS";

// Function

function fun() {
    console.log('tihs is a function')
}

fun()

function greeting(yourName) {
    var result = 'Hello ' + yourName
    document.getElementById('name').innerHTML = result
    console.log(result)
}
var name = prompt('What is your name?')
greeting(name)

function sumNum(num1, num2) {
    var sum = num1 + num2
    console.log (sum)
}

var numbers = [4,4]
sumNum(numbers[0],numbers[1])


//Loops
for (let i = 0; i<10; i++) {
    console.log(i)
}

for (let i=1; i<=10; i++) {
    console.log(i*2)
}

var i = 0
while (i<100) {
    i += 1
    console.log(i)
}
*/
/*
// Table example
function inputNum() {
    let num = parseInt(prompt("Enter any number"))
    return num
}

function table(number) {
    let final_result = []
    for (let i=1; i<=10; i++){
        let result = i*number
        final_result.push(result)
    }
    return final_result
}

console.log(table(inputNum()))
*/
/*
//Data Types
let yourAge = 20                                                                //int
let percentage = 66.5                                                           //float
let yourName = 'Faizan'                                                         //string
let address = {personA:'Karachi', personB:'Hyderabad', personC:'Lahore'}        //object
let rollNum = [181,182,197,103,173]                                             //array
let isYourAge_18 = true                                                         //boolean
let future_variable                                                             //undefined
let nothing = null                                                              //value null

let moreCities = 'karachi\nlahore' //line break, new line
console.log(moreCities)

let city = 'karachi'
console.log(city)
console.log(city.length)
console.log(city.charAt(4))
console.log(city.charCodeAt(4))
console.log(city.concat('\nhyderabad'))
console.log(city.endsWith('rac',5))
console.log(city.includes('ach',3))
console.log(city.indexOf('a',2))
console.log(city.toUpperCase())
console.log(city.replace('rac','123'))
*/
//Arrays

let myArray = ['banana', 'apple', 'mango', 'kiwi']
console.log(myArray)

let newArray = new Array()
console.log(newArray)

let emptyArray = []
console.log(emptyArray)

emptyArray[9] = 100
console.log(emptyArray)

emptyArray[16] = 200
console.log(emptyArray)

newArray.push('toyota')
console.log(newArray)

for (let i=0; i<=5; i++){
    let inputVal = prompt('Enter your data')
    newArray.push(inputVal)
}
console.log(newArray)

for (let j=0; j<newArray.length; j++){
    console.log(newArray[j])
}

