isVowel = (alpha) => {
    let setVowel = ['a', 'e', 'i', 'o', 'u']
    if (alpha in setVowel) {
        return document.write(`True`)
    } else {
        return document.write(`False`)
    }
}

let userInput = prompt(`Enter an alphabet`)
console.log(userInput)
isVowel('u')