const rec = (num) => {
  if (num == 0) {
    return 0;
  } else {
    return num + rec(num - 1);
  }
};

console.log(rec(4));





const count = (myNum) => {
  let sum = 0;
  for (let i = 0; i <= myNum; i++) {
    sum += i;
  }
  return sum;
};

console.log(count(4));
