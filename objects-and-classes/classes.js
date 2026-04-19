// *CLASSES IN JS

// * what is blueprint and template?

// *Blueprint
// A blueprint is like a detailed plan or drawing used to build something. In programming, a blueprint is an idea or a guide that tells you how to create an object with specific properties and behaviors.

//* Example in Real Life:
// Imagine an architect’s blueprint for a house. It shows how the house should look, the number of rooms, their sizes, etc. You can build many houses using this same blueprint.

// *In Programming (Classes):
// A class is like a blueprint for creating objects. It defines the properties (like brand, model) and methods (like display()) an object should have. You can use the class to create multiple objects with the same structure.

// *Template
// A template is a pre-designed structure that you can use to create new items quickly without starting from scratch every time. It's like a mold or a pattern.

// *Example in Real Life:
// Think of a cookie cutter used in baking. The cookie cutter (template) allows you to make many cookies of the same shape.

//* In Programming (Classes):
// A class is also like a template. It lets you create many objects with the same set of properties and methods without writing the same code repeatedly.

// * Those objects will have some state (variables) & some behavior (functions) inside it.

// * "a class is a template," they mean that a class in programming is like a blueprint or a recipe that defines the structure and behavior of objects. A class specifies what properties (data) and methods (functions) the objects created from it will have, but it doesn't create any actual objects by itself. Instead, it provides a template that can be used to create multiple objects with the same structure and behavior.

/*
 class MyClass {
constructor() {...}
myMethod() {...}
 }
 */

//* method-1 to create objects
const obj = {};

//*  let myObj = new MyClass();    -- method 2 to create object
// * Constructor() method -> automatically invoked by new and initializes object
// * u can declare only one constructor in a class

class ToyotaCar {
  // constructor(){
  //     console.log("creating new object");
  // }
  constructor(brand, mileage) {
    this.brand = brand; // after initializing this, i comment out the func -> setBrand()
    this.mileage = mileage;
  }
  start() {
    console.log("start");
  }
  stop() {
    console.log("stop");
  }

  /*
      setBrand(brand){
          this.brand = brand;  //see  meaning of this keyword in file this.js
          console.log("Brand: " + this.brand);
      } */
}

//* new keyword is used to create objects through classes
let lexus = new ToyotaCar("lexus", 10);
console.log(lexus);
let fortuner = new ToyotaCar(); //now fortuner is new car, which created on template of ToyotaCar AND fortuner object stores all methods and variables of class ToyotaCar
console.log(fortuner); // if u didn't pass any value, then it display undefined

// fortuner.setBrand("fortuner"); //calling comment out function

// *key points new keyword =>
// new makes a fresh, new object based on a class or constructor function.
// The constructor function or class initializes the properties of the new object.
// The new keyword automatically returns the new object created, so you don’t need to explicitly return it from the constructor.

//* Constructor function
function Animal(name) {
  this.name = name;  // Initialize the name property
}

// Creating a new object with 'new'
let myAnimal = new Animal("Lion");

console.log(myAnimal.name);  // Output: Lion

// * the parentheses indicate that you’re invoking the constructor to create the instance of an object

//* Defining a class
class Animal {
  constructor(name) {
    this.name = name;  // Initialize the name property
  }
}

// Creating a new instance with 'new'
let myAnimal2 = new Animal("Lion");

console.log(myAnimal2.name);  // Output: Lion

// *how constructor create new instance?
// A constructor function in JavaScript is a special type of function used to create and initialize objects. When you use the new keyword with a constructor, here’s what happens:

// Object Creation: A new, empty object is created.
// Setting this: The this keyword inside the constructor refers to the newly created object.
// Initialization: The constructor function runs and initializes properties and methods on the new object.
// Returning the Object: By default, the new object is returned from the constructor

// Define a constructor function
function Person(name, age) {
  this.name = name;  // Initialize the 'name' property
  this.age = age;    // Initialize the 'age' property
}

// Create a new instance of Person
const person1 = new Person('Alice', 30);

// Access the properties of the new instance
console.log(person1.name); // Output: Alice
console.log(person1.age);  // Output: 30
