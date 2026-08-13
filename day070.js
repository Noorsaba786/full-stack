// factorail with loop
// factorail a n! = n * (n-1)!
// factorail 0! = 1
// 4! = 1 x 2 x 3 x 4 = 24

const factorail = (num) => {
  let result = 1;
  for (let i = 1; i <= num; i++) {
    result *= i; // 1 , 2 , 6 ,24
  }
  return result;
};

console.log(factorail(3));
