const userDetails={
    name: "kaylin",
    maths: 23,
    science: 35,
    gk:30
}

// {
//     userName: 'kaylin',
//     subjectCodes: ['M','S','G'],
//     subjectScores: [23,35,30]
// }


const arr = Object.entries(userDetails);
console.log(arr)

const details ={
  userName: arr[0][1],
  subjectScores: [],
  subjectCodes: []
  }

for (let i = 1; i < 4; i++) {
  details.subjectScores.push(arr[i][1]);
  details.subjectCodes.push(arr[i][0][0].toUpperCase())
}

console.log(details)