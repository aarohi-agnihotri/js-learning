// *Promise as a class
// Definition: A class in JavaScript defines a blueprint for creating objects. It is a function that provides a template for objects.
// Promise as a Class: In JavaScript, Promise is a built-in class that provides a standard way to represent asynchronous operations.

// Creating a new instance of Promise class
const promise = new Promise((resolve, reject) => {
    // asynchronous operation here
  });

// Characteristics:
// The Promise class has a constructor that takes a function (executor) with two parameters: resolve and reject.
// Promise class methods include .then(), .catch(), and .finally() which are used to handle the outcomes of the promise (resolved or rejected).


// *Promise as an Object
// Definition: An object is an instance of a class. In JavaScript, when you create an instance of a class using the new keyword, you create an object.
// Promise as an Object: When you create a new promise using the Promise class, you create a promise object.

const myPromise = new Promise((resolve, reject) => {
  // Simulate an asynchronous operation
  setTimeout(() => {
    resolve("Data received");
  }, 2000);
});

console.log(typeof myPromise); // "object"

// Characteristics:
// myPromise is an object because it is an instance created from the Promise class.
// The promise object has methods like .then(), .catch(), and .finally() that can be used to handle the result of the asynchronous operation.

// *Promise as a Method
// Definition: A method in JavaScript is a function that is a property of an object.
// Promise Methods: A promise itself is not a method, but it has methods that can be called on promise objects.

//* Common Promise Methods:
// .then(): Attaches callbacks for the resolution (fulfilled) and/or rejection of the promise.
// .catch(): Attaches a callback for only the rejection of the promise.
// .finally(): Attaches a callback that will run regardless of the promise's outcome.

// * What is a Promise by Default?
// *by default it is class
// * when we refer to a promise, we are typically talking about a promise object created from the Promise class, which is used to manage asynchronous operations in JavaScript.
