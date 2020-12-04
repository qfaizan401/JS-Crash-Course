validatePassword = (userPassword) => {
    let adminPassword = '21fce692'
    if (userPassword == ''){
        document.write('Please enter your password')
    } else if (userPassword == adminPassword) {
        document.write('Correct')
    } else {
        document.write('Incorrect password')
    }
}

validatePassword(prompt('Enter your password'))