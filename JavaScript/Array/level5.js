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




