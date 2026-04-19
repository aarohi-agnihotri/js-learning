// * JS objects have a special property called prototype.
// * prototype is already made,in which there are some properties and methods in general and when object is created, prototype are inherited by default
//* type of prototype is actually an reference to an object

// * An object associated with every JavaScript function and object, from which properties and methods can be inherited. Each function in JavaScript has a prototype property that can be used to add shared properties and methods for all instances created by that function.

const employee = {
    // method-1 to define function, generally this is used
    calcTax() {
      console.log("tax rate is 10%");
    },
    //this is second one, using function keyword
    /* calcTax2: function(){
          console.log("tax rate is 10%");
      } */
  };
  
  const karanArjun = {
    salary: 50000,
  };
  
  // * We can set prototype using __proto__
  karanArjun.__proto__ = employee; // if we want to use functions of another object, then we can set it as a prototype AND karanArjun will inherit properties and methods from employee.
  
  // if we have 3 more persons, then we don't have need to create calcTax() function every time, we will set 5 different prototypes, example-
  const karanArjun2 = {
    salary: 50000,
  };
  const karanArjun3 = {
    salary: 50000,
  };
  const karanArjun4 = {
    salary: 50000,
  };
  
  karanArjun2.__proto__ = employee;
  karanArjun3.__proto__ = employee;
  karanArjun4.__proto__ = employee;
  
  // here reference/ address of employee object is passed to karanArjun object means u are able to directly access to employee object
  
  // *If object & prototype have same method, object's method will be used, example-
  const fruits = {
    favFruit() {
      console.log("Mango");
    },
  };
  
  const aarohi = {
    favFruit() {
      console.log("Sitafal");
    },
  };
  aarohi.__proto__ = fruits;
  // on console-  aarohi.favFruit() - it display output of aarohi object
  