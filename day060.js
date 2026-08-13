// array [2, 5,1 , 3] write a recusive fun which takes an array and retun its sum
// 2 + 5 + 1 + 3 = 11
/* 0-1 = -1

3 + 1 + 5 + 2  */
myArray = [2, 5, 1, 3];

const sumarray = (myArray, index) => { // index =3
  if (index < 0) {
    return 0;
  } else {
    return myArray[index] + sumarray(myArray, index - 1);
  }
};

console.log(sumarray(myArray, myArray.length - 1));

// (myarray, 3)
// return 3+ sumarray (myarray ,2 )
//  3 + 1+ sumarray (myarray ,1 )
//  3 + 1+ sumarray (myarray ,1 )
//  3 + 1+ 5+  sumarray (myarray , 0)
//  3 + 1+ 5+  sumarray (myarray , 0)
//  3 + 1+ 5+2+  sumarray (myarray , -1)
//  3 + 1+ 5+2+  sumarray (myarray , -1)
//  3 + 1+ 5+2+0 
//backward  0 + 2 + 5 + 1 + 3 = 11