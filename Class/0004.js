// class example
// here i add class named User
class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return "hello my name is " + this.name + " and i have " + this.age;
  }
}

const user1 = new User("saba", 16);

console.log(user1.greet());
