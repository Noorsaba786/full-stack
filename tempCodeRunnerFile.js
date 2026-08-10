const doTwince = (fn) => {
  fn();
  fn();
};

const sayHi = () => {
  console.log("hiii");
};

doTwince(sayHi());
