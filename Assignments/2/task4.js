inputData = () => {
    let inputVal = []
    for (let i = 0; i < 3; i++) {
        inputVal.push(parseInt(prompt(`Enter the marks of Subject ${i + 1}`)))
    }
    inputVal.push(parseInt(prompt('Enter total marks')))
    return inputVal
}

computation = (sub1,sub2,sub3,totalMarks) => {
    let displayData = [totalMarks]; 
    let obtainMarks = sub1+sub2+sub3
    displayData.push(obtainMarks)
    let percent = Number(((obtainMarks/totalMarks)*100).toFixed(2))
    displayData.push(percent)
    return displayData
}

decisionMaking = (percent) => {
    let grade, remarks
    if (percent > 80) {
        grade = 'A-one'; remarks = 'Excellent'
    } else if (80>percent>70){
        grade = 'A'; remarks = 'Good'
    } else if (70>percent>60){
        grade = 'B'; remarks = 'You need to improve'
    } else if (percent<60) {
        grade = 'F'; remarks = 'Sorry'
    }
    return [grade, remarks]
}

const userInput = inputData()
let [sub1, sub2, sub3, totalMarks] = userInput

const processData = computation(sub1, sub2, sub3, totalMarks)
let [totalMark, obtainMarks, percent] = processData

const grading = decisionMaking(percent)
let [grade, remarks] = grading

document.getElementById('lvl1').innerHTML = `Marks Sheet`
document.getElementById('content').innerHTML = `Total Marks: ${totalMarks} <br>
Marks Obtained: ${obtainMarks} <br>
Percentage: ${percent}% <br>
Grade: ${grade} <br>
Remarks: ${remarks}`