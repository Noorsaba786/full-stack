class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  isAdult() {
    return this.age >= 19;
  }

  introduce() {
    const status = this.isAdult() ? "an adult" : "a minor";
    return `My name is ${this.name} and I am ${status}`;
  }
}

const user1 = new User("muzhgan janm", 12);
const user2 = new User("saba jan", 11);
const user3 = new User("muqadas jan", 19);

console.log(user1.isAdult());
console.log(user3.isAdult());
console.log(user1.introduce());
console.log(user3.introduce());
