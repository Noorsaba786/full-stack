//Object Methods:

const user = {
  name: " Noorsaba",
  age: 10,
  greet: function () {
    return "hey my name is " + this.name;
  },
};

console.log(user.greet());
