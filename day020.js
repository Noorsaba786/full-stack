const makeCounter = () => {
  let counter = 0;

  return {
    increment: () => {
      counter++;
    },

    decrement: () => {
      counter--;
    },

    getCount: () => {
      return counter;
    },
  };
};

const funCounter = makeCounter();

funCounter.increment();
funCounter.increment();
funCounter.decrement();
console.log(funCounter.getCount()); // should print 1
