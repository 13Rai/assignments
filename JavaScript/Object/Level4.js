const obj = {
    computer: 42,
    maths: 42,
    science: 50
}

//calculate the percentage he scored in the exams out of total 150 score

arr = Object.values(obj)

totalMarks = arr.reduce(calc)
percentage = Math.floor((totalMarks/150)*100)

function calc(accumulator, indexValue){
  const total = accumulator + indexValue
  return total
}

const arr1 = ['ram', 'shyam', 'hari']
const arr2 = ['ram', 'shyam', 'hari', 'gopal', 'krish']
//[gopal, krish]

let newArr= [];
 
for (let i = 0; i < arr2.length; i++) {
  if (arr1[i] !== arr2[i]) {
    newArr.push(arr2[i])
  }
}

console.log(newArr)


//filter method

arr2.filter((item)=>{
    if (!arr1.includes(item))
      return item
})
