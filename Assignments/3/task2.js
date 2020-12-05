let studentName = new Array()
let studentScore = new Array()
const totalMarks = 500

for (let i=0; i<3; i++){
    studentName.push(prompt(`Enter the name of student ${i+1}`))
    if (studentName.length == 3){
        for (let j=0; j<3; j++)
        studentScore.push(parseInt(prompt(`Enter the score of student ${j+1}`)))
    }
}

for (i=0; i<3; i++){
    document.write(
        `Score of ${studentName[i]} is ${studentScore[i]}. Percentage: ${(studentScore[i]/totalMarks)*100}% <br>`
        )
}