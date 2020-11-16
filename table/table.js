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
let final_result = table(inputNum())

function display(resultArray) {
    for (let i=1; i<=10; i++){
        document.getElementById('table').innerHTML = resultArray[i] + 'x' + 1 + '=' + resultArray + '<br>'
    }
}

display(final_result)