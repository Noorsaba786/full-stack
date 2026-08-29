class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return "hello " + this.name + ", your age is " + this.age;
  }
}

const user1 = new User("saba", 12);
const user2 = new User("muzhgan", 15);

console.log(user1.greet());
console.log(user2.greet());
