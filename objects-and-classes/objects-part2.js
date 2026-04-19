// * OBJECT LITERAL => An object literal in JavaScript is a way to create objects using a simple and direct syntax. It involves defining an object by listing its properties and their values inside curly braces {}.

// *DECLARATION with the help of Object Literal
// const jsUser = {}

//* how to use symbol as a key
const mySym = Symbol("key1");

// *declaration and initialization
const jsUser = {
  name: "Aaro",
  "full name": "Aarohi Agnihotri",
  age: 20,
  location: "Lucknow",
  email: "aaro@gmail.com",
  isLoggedIn: false,
  1: "a",
  [mySym]: "myKey1", // it is required to put inside []
  // mySym: "myKey2" -> u can't write like this, as now its type is string with new value, that's why not to use
};

// * to log on on console - 2 methods
console.log(jsUser.name); // 1st method

// 2nd method -> square notation
console.log(jsUser["name"]); // inside commas because it is string type
console.log(jsUser[1]);
console.log(jsUser[mySym]); // u can only use this to log not 1st method

console.log(jsUser["full name"]); // way to log to this type - "full name", as u can't log this using dot operator (1st method)

// * to change value of key
jsUser.email = "aarohiAgni@gmail.com";

// * if u don't want to change object's values, the u can use Object.freeze()
// Object.freeze(jsUser)
// jsUser.name = "Vaish"
// console.log(jsUser)  // name doesn't change

jsUser.greetings = function () {
  console.log("Hello, JS User");
};
jsUser.greetings2 = function () {
  console.log(`Hello, JS User ${jsUser.name}`);
};

console.log(jsUser.greetings());
console.log(jsUser.greetings2());

// * DECLARATION using new keyword
// const tinderUser = new Object()

// * NESTED OBJECT
const regularUser = {
  email: "some@gmail.com",
  fullname: {
    userfullname: {
      firstname: "Aarohi",
      lastname: "Agnihotri",
    },
  },
};

console.log(regularUser.fullname.userfullname.firstname);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };
const obj3 = { 5: "e", 6: "f" };

// * COMBINING OBJECTS

// * 1st method ->  (less prefer)
// const obj4 = {obj1, obj2}
// console.log(obj4)  // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }

// * 2nd method -> Object.assign(target, source)        (better hai)
// const obj4 = Object.assign(obj1, obj2, obj3)
// const obj4 = Object.assign({}, obj1, obj2, obj3)  //* better to use this, because {} is treated as target while others are source, so not confusion ki kise target banaya jaye
// console.log(obj4) // { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }

// * 3rd method -> Spread operator  (u will use mostly this)
const obj4 = { ...obj1, ...obj2, ...obj3 };
console.log(obj4);

// * OBJECTS INSIDE ARRAY ->
const userArr = [
  {
    id: 1,
    email: "some@gmail.com",
  },
  {
    id: 1,
    email: "some@gmail.com",
  },
  {
    id: 1,
    email: "some@gmail.com",
  },
  {
    id: 1,
    email: "some@gmail.com",
  },
];

// * to access first value->
userArr[1].email;

// * Object.keys / values / entries -> generate output in array form

const user2 = {
  name: "Shris",
  email: "shris@gmail.com",
  phnNo: 1234567890,
  city: "Lucknow",
};

console.log(Object.keys(user2));
console.log(Object.values(user2));
console.log(Object.entries(user2));

// * TO check if object has that property or not -> returns in true/false
console.log(user2.hasOwnProperty("phnNo"));

// * OBJECTS DESTRUcTURING  (IMP TOPIC)  =>
// * Destructuring is a feature in JavaScript that allows you to extract values from arrays or properties from objects and assign them to variables in a very concise and readable way. It's a form of pattern matching that enables you to unpack values from data structures into distinct variables.

const course = {
  coursename: "js in hindi",
  price: "999",
  courseInstructor: "hitesh",
};

// * here courseInstructor is variable that hold the value of corresponding property from 'course' object
// const {courseInstructor} = course;
// console.log(courseInstructor)

//* renaming variables and adding more
// const {courseInstructor: instructor, coursename, price} = course;

// console.log(instructor)
// console.log(coursename)
// console.log(price)

//* u can provide DEFAULT VALUES
const { age = 20, price } = course;
console.log(age);
console.log(price);

// * NESTED DESTRUCTURING =>

const person = {
  name: "John",
  age: 21,
  address: {
    city: "Lucknow",
    country: "India",
  },
};

// performing destructuring -
const {
  name,
  address: { city, country },
} = person;

console.log(city)
