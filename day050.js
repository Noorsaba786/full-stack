// sum of nums in array recursive

let myArray = [10 , 2 , 5 , 7 ,1];

const sumArray = (myArray, index) => {
  if (index < 0) {
    return 0;
  } else {
    return myArray[index] + sumArray(myArray, index - 1);
  }
};

console.log(sumArray(myArray, myArray.length - 1));


// return 1 + sumarray (myarray , 3)

// 1 + 7 + sumarray (myarray , 2)
// 1 + 7 + 5 + sumarray (myarray , 2) 
// 1 + 7 + 5 + sumarray (myarray , 1) 
// 1 + 7 + 5 + 2 +  sumarray (myarray , 0)
 // 1 + 7 + 5 + 2 + 10  sumarray (myarray , -1) : return 0 
 // / 1 + 7 + 5 + 2 + 10  + 0 = 
