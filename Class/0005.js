// inheritance
// when a class extend another class methods and properties automaticallly thats call inheritance
// class animl
class Animal {
  constructor(name) {
    this.name = name;
  }
  // speak fucniton
  speak() {
    return "my " + this.name + " makes a sound";
  }
}

// here is the class of dog
class Dog extends Animal {
  bark() {
    return "well here " + this.name + " barks ";
  }
}

// object created here
const dog = new Dog("Rockey");
console.log(dog.speak());
console.log(dog.bark());
