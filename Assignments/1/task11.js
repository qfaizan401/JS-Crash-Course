let celsiusTemperature = parseInt(prompt('Enter Celsius Temperature'))
c2f = (c) => {
    let f = (c*(9/5))+32
    return f
}

let fahrenheitTemprature = parseInt(prompt('Enter Fahrenheit Temprature'))
f2c = (f) => {
    let c = (f-32)*(5/9)
    return c
}

document.write(`${celsiusTemperature} C is ${c2f(celsiusTemperature)} F <br>
${fahrenheitTemprature} F is ${f2c(fahrenheitTemprature)} C`)