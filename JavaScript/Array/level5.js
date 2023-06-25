const arr = [2, 5, 6, 7]
//calculate the sum of the array using either for of for in

//high level
const users = ['hari', 'shyam', 'hari']
//remove from array if duplicate

const newArr = [[4,5], [5,7], [7,2]]
//calculate the sume of all the odd numbers inside the nested array

//question 1

let sum1 = 0
for (let counter1 of arr){
    sum1= sum1 + counter1
}


//question 2

const removeDupe = [...new Set(users)];

console.log(removeDupe);


//question 3

let sum3 = 0;
//2D array

/*
for i in range(len(newArr))
 for j < 2
  if newArr[i][j] mod 2 != 0
   sum += newArr[i][j]
   i += 1
   j += 1
*/

for (let i = 0; i < newArr.length; i++) {
  for (let j = 0; j < 2; j++) {
    if (newArr[i][j] % 2 !== 0) {
      sum3 = sum3 + newArr[i][j];
    }
  }
}

console.log(sum3);

//Q3 classroom solved

/*
const newArr = [[4,5], [5,7], [7,2]]
let sum = 0

newArr.flat().map((item)=>{
  if(item % 2 !== 0){
    sum = sum + newArr[i]
  }
})
*/

//Q4

const myDetails = [
  {id:3, name: 'hari'},
  {id:5, name: 'shyam'},
  {id:6, name: 'gopal'},
]

// return only array of ids: expected output  [3,5,6]

myDetails.map((item)=>{
  return item.id
})

//Q5

const userDetails= [
  {score: 0, name:'hari', marks: [10,3,23]},
  {score: 0, name:'shyam', marks: [50,23,23]},
  {score: 0, name:'shyam',marks: [20,13,43]},
]
//loop over the arr of objects and calculate total score, expected output is:

// [
//     {score: 36, name:'hari', marks: [10,3,23]},
//     {score: 96, name:'shyam', marks: [50,23,23]},
//     {score: 76, name:'shyam',marks: [20,13,43]},
// ]

userDetails.map((item)=>{
let sum5 = 0
item.marks.map((value)=>{
  sum5 = sum5 + value
})
item.score = sum5
return item

})
