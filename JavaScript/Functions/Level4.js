//Q1. write a js function that  can  calculates the final price
// formula is distance multiply unitKmPrice
//expected output is 600 

const rideDetails= {
    pickup: 'balaju',
    destination: 'thamel',
    distance: '20km',
    unitKmPrice: 30
}


function pricing(){
 const distanceTravelled = parseInt(rideDetails.distance)
 return distanceTravelled * rideDetails.unitKmPrice
}

pricing()


//Q2 write a js function that checks if the object has status success or not
//should return true or false

const status1 ={
    status: 'onTheWay'
}
const status2 ={
    status: 'success'
}
const checkIfSuccess=(checkStatus)=>{
  if (checkStatus.status === "success")
    return true
  else if(checkStatus.status === "onTheWay")
    return false;
}


checkIfSuccess(status1)  //should return false

checkIfSuccess(status2)  //should return true