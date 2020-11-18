inputData = () => {
    let inputVal = []
    for (let i = 0; i < 3; i++) {
        inputVal.push(parseInt(prompt(`Enter the marks of Subject ${i + 1}`)))
    }
    inputVal.push(parseInt(prompt('Enter total marks')))
    return inputVal
}

computation = (sub1,sub2,sub3,totalMarks) => {
    let displayData = [totalMarks]; obtainMarks = sub1+sub2+sub3
    displayData.push(obtainMarks)
    let percent = (obtainMarks/totalMarks)*100
    displayData.push(percent)
    return displayData
}

decisionMaking = (percent) => {
    let grade, remarks
    if (percent > 80) {
        grade = 'A-one'; remarks = 'Excellent'
    } else if (80<percent<70){
        grade = 'A'; remarks = 'Good'
    } else if (70<percent<60){
        grade = 'B'; remarks = 'You need to improve'
    } else {
        grade = 'F'; remarks = 'Sorry'
    }
    return [grade, remarks]
}

