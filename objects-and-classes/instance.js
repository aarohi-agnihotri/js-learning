// * diff btw object and instance
//* Object: Any JavaScript object, such as { name: "Alice", age: 30 }, is an object.
// *Instance of an Object:  When we refer to an instance of an object, we're usually talking about an object created from a class or constructor function.

// Constructor function
function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  
  // Creating instances
  let person1 = new Person("Alice", 30); // person1 is an instance of Person
  let person2 = new Person("Bob", 25);   // person2 is another instance of Person
  
  console.log(person1); // Output: Person { name: 'Alice', age: 30 }
  console.log(person2); // Output: Person { name: 'Bob', age: 25 }
  
  // *In this example:
  // person1 and person2 are both instances of the Person constructor function.
  // Each of these instances is an object created from the Person blueprint.
  // So, an instance of an object is just another way to refer to objects created from a class or constructor, where the class or constructor serves as the blueprint.