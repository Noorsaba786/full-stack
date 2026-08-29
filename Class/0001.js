/* const user1 = {
  name: "muzhgan ",
  age: 12,

  greet: function () {
    return "hello " + this.name + " your age is " + this.age;
  },
};

console.log(user1.greet());

//obj 2
const user2 = {
  name: "saba ",
  age: 15,

  greet: function () {
    return "hello " + this.name + " your age is " + this.age;
  },/*  */
/* };

console.log(user2.greet());

//obj 3
const user3 = {
  name: "muqadas ",
  age: 19,

  greet: function () {
    return "hello " + this.name + " your age is " + this.age;
  },
};

console.log(user3.greet());
 */

class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return "hello " + this.name + " your age is " + this.age;
  }
}

const user1 = new User("muzhgan janm", 12);
const user2 = new User("saba jan", 11);
const user3 = new User("muqadas jan", 19);

console.log(user1.greet());
console.log(user1.age);

console.log(user2.name);
