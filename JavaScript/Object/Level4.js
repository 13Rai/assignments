const obj = {
    computer: 42,
    maths: 42,
    science: 50
}

//calculate the percentage he scored in the exams out of total 150 score

const total = (obj.computer + obj.maths + obj.science)

const percentage = Number((total /150) * 100)

console.log(Math.floor(percentage))