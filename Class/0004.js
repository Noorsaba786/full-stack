// class example
// here i add class named User
class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  // here i wrote the function greet ()
  greet() {
    return "hello my name is " + this.name + " and i have " + this.age;
  }
}

const user1 = new User("saba", 20);

const user2 = new User("noor", 12);
console.log(user1.greet());

console.log(user2.greet);
