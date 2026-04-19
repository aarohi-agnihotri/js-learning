//def
// function functionName() {
//do some work
// }

// functionName(); //*calling/invoke function

//function save us from redundancy(repetition of code) by calling/invoking

function myFunction() {
  console.log("I am currently learning javascript");
  console.log("IT's Awesome!!");
}

// myFunction; //* this is reference
myFunction(); //* this is execution
myFunction(); //  calling again

function funcPara(msg, n) {
  //parameters
  console.log(msg * n); //output- NaN (not a number)
}

//* func parameters are like local variables(block scope)

funcPara("This is a message", 10); //*arguments

//* function 2 numbers sum
function sum(a, b) {
  console.log(a + b);
}
sum(10, 20);

//* function multiplication of 2 numbers using return
function multi(a, b) {
  let c = a * b;
  console.log("before return"); //print
  return c;
  console.log("after return"); //doesn't print
}

let val = multi(2, 3);
console.log(val);

//* if don't passed any value as argument, then result will be undefined AND if don't write anything after return or only write return keyword, doesn't specify what to return, then it return "undefined' (U have to log the value)

function example1(number){
  console.log(example1)
  return
}
console.log(example1())

// * REST OPERATOR

// * in case of cart system, where user add items(arguments -> value) in cart as much as he want, so we don't know tha exact number of parameters to store the value 
// * we use rest operator (it store in array form) -> jo saari cheezon ko collect krke ek bna dega

const storeItems = function(...item){
  return item
}

console.log(storeItems("frock", "shirt", "microwave", "comb", "lehenga"))

//* one more example -> in this function, first argument takes 300 and 2nd argument takes 400 and rest are in array
const storeCartPrice = function(item1price, item2price, ...itemPrice){
  return item1price, item2price, itemPrice
}
console.log(storeCartPrice(300, 400, 500, 600, 700, 800)) // [ 500, 600, 700, 800 ]

// * FUNCTIONS WITH OBJECT ->
const userName = {
  userName: "Aarohi",
  price: 590
}

const handleObject = function(userObj){
  return `user is ${userObj.userName} and price is ${userObj.price}`
}
console.log(handleObject(userName))


// * u can also pass direct object
// handleObject({
//   userName: "Aarohi",
//   price: 590
// })

// * FUNCTIONS WITH ARRAY ->
const cartPrice = [200, 600, 100, 500]

const handleArray = function(userArr){
  console.log(userArr);
}

handleArray(cartPrice)

// * u can also pass direct array
// handleArray([200, 300, 100, 600]

// * ONE example of SCOPE -> when function is nested, then inner function's variable can access outer function's variable
function one(){
  const username = "aarohi"
  
  function two(){
    const website = "youtube"
    console.log(username)
  }
  // this inside inner function
  // console.log(website)
    two()
}

one()

//* ARROW FUNCTION - compact way fo writing function
// this is introduced in modern javascript

// const funcName = (param1, param2..) => {
//do some work
// };

// * basic syntax -- () => {}
// *u can hold it in variable and give parameters -- const print = (print1, print2) => {  }

const addTwo = (num1, num2) => {
  return num1 + num2
}
console.log(addTwo(1, 2))

//* another syntax (that's called implicit return) -- jaha pr haam mann lete h ki function return krega, no need to write return keyword

const subTwo = (num1, num2) => num1- num2
console.log(subTwo(3,2))

// * one more if we got confused, to put inside () brackets
const mulTwo = (num1, num2) => (num1*num2)
 
// *IMPORTANT -- always use this () in case of implicit return not this {}, if u use this bracket then u have to definitely use return keyword 

// * how to return object in arrow func, write objet inside {} curly braces and outer () normal braces
const objFunc = () => ({user: "Jennie"})
console.log(objFunc)

//* division using  arrow function
const div = (a, b) => {
  console.log(a / b);
};
div(10, 20);

const mul = (a, b) => {
  console.log("Multiplication using arrow function : ", a * b);
};
mul(10, 20);
console.log(mul); // u can print arrow function

const addArrow = (a, b) => {
  return a + b;
}; // return keyword in arrow function

// let keyword
let chn = (a, b) => {
  console.log(a + b * b); // expression
};

chn = 8; // value can be changed if u r using let, basically a variable "chn" store function but now it's change and it's store a number
console.log(chn);

//* Qs. Create a function using the "function" keyword that takes a String as an argument & returns the number of vowels in the string.
/* function vowel(str) {
  let count = 0;
  for(let ch of str){
    if (
      "A" == ch ||
      "E" == ch ||
      "I" == ch ||
      "O" == ch ||
      "U" == ch ||
      "a" == ch ||
      "e" == ch ||
      "i" == ch ||
      "o" == ch ||
      "u" == ch
    ) {
      count++;
    }
  }
  return count;
}
str = "This is a message";
returnValue = vowel(str);
console.log(`Number of vowels in "${str}" is ${returnValue}`);  */

//* Ques- perform above using arrow function
const vowel = (str) => {
  let count = 0;
  for (let ch of str) {
    if (
      "A" == ch ||
      "E" == ch ||
      "I" == ch ||
      "O" == ch ||
      "U" == ch ||
      "a" == ch ||
      "e" == ch ||
      "i" == ch ||
      "o" == ch ||
      "u" == ch
    ) {
      count++;
    }
  }
  return count;
};
str = "This is a message";
returnValue = vowel(str);
console.log(`Number of vowels in "${str}" is ${returnValue}`);

// * HOISTING -> invoking function before declaration
// * Hoisting in JavaScript is the process where variable and function declarations are moved to the top of their scope during compilation. This allows you to use functions and variables before they are declared in the code. However, only declarations are hoisted, not initializations, leading to undefined for variables until they are assigned a value.

// * When we say that a function is hoisted, we mean that the entire function declaration (both its name and its body) is moved to the top of the scope

// * it works fine because function declarations are hoisted. The entire function is moved to the top of its scope during compilation phase , so it can be invoked before its definition in the code 
addOne(5)
function addOne(num){
  console.log(num + 1)
}
// * it throws error because only declaration is hoisted, not its initialization (function expression)  
// addTwo(5)
// const addTwo = function(num){
//   console.log(num + 2)
// }

// *logging before declaration

// console.log(hello)
// var hello = "hello js"  - undefined
// let hello = "hello js" - throws error
// const hello = "hello js" - throws error

// *ARROW FUNCTION DON'T HAVE THIS BINDING

// * What is Binding? -> binding is how JavaScript decides what object this should refer to when you run a function

// *When compared to regular functions, arrow functions handle this differently. In other words, there is no binding of this with arrow functions. In regular functions, the object that is called the function was represented by the this keyword. This object could be a window, document, button, or anything else in case of regular functions.

// *Arrow functions do not bind their own this, instead, they inherit the one from the parent scope, which is called "lexical scoping"

// define a function
const myFunction = () => {
  console.log(this);
};

// call it
myFunction();

// *What can we expect this to be?.... exactly, same as with normal functions, window or global object. Same result but not the same reason. With normal functions the scoped is bound to the global one by default, arrows functions, as I said before, do not have their own this but they inherit it from the parent scope, in this case the global one.

// * When to Use Arrow Functions vs. Regular Functions

// *Arrow Functions: Use them when you need to maintain this from the surrounding context (like when you want to access this from the parent scope).
// * Regular Functions: Use them when you need to control this or when you want to use thisArg in methods like find(), map(), etc.


// * Summary:

// *Arrow Functions: Inherit this from the surrounding scope. They don’t bind this to any new object
//* Regular Functions: Bind this to the object that calls them


