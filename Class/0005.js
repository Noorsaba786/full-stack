// inheritance
// when a class extend another class methods and properties automaticallly thats call inheritance
// class animal
// this is the class of the animal
class Animal {
  constructor(name) {
    this.name = name;
  }
  // speak fucniton

  // it resturns  the name and the sounds which makes
  speak() {
    return "my " + this.name + " makes a sound";
  }
}
// here is the end of the function
//
// here is the class of dog
class Dog extends Animal {
  bark() {
    return "well here " + this.name + " barks ";
  }
}

// the name of the object is dog
// object created here
const dog = new Dog("Rockey");
console.log(dog.speak());
console.log(dog.bark());
