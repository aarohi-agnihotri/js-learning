// Variable naming rules, Cases,let, const and var, Datatypes,console.table, alert, type of undefined and null, Type conversion

console.log("Hello world!");
// it can be print without semicolon but it's better to use ; to avoid unexpected errors
console.log("Hello world!")
//you can also use single inverted commas
console.log('Hello world!');

//VARIABLE RULES
// • Variable names are case sensitive; "a" & "A" is different.
// • Only letters, digits, underscore(_) and $ is allowed. (not even space)
// • Only a letter, underscore(_) or $ should be 1st character.
// • Reserved words cannot be variable names.

a=9;
A=9;
length=20;

radius= 89.0;
name= "Aarohi";

//Cases
//fullName  (Camel Case)...we use this
//full name  (illegal to use)
//full_name  (Snake Case)
//full-name (Kabab case)
//FullName  (Pascal Case)

fullName= "Aarohi Agnihotri";

//let, const & var
//var: Variable can be re-declared & updated. A global scope variable.
//let: Variable cannot be re-declared but can be updated. A block scope variable.
//const: Variable cannot be re-declared or updated. A block scope variable.

// The var keyword was used in all JavaScript code from 1995 to 2015.
//The let and const keywords were added to JavaScript in 2015.
//The var keyword should only be used in code written for older browsers.

//var can be re-declared and updated
var age= 9;
var age= 14;
var age= 20;
var name= "Abc";
name= "def"
console.log("age");
console.log("name");

// let cannot be re-declared but can be updated
let year= 9;
//let ageb= 10;
console.log("year");

let month= 12;
month= 4;
console.log("month");

//const cannot be re-declared or updated
const marks= 366;
//const marks= 364;

//output- undefined
let z;
console.log(z);

//var is global scope variable
// even i have declared variable "scope" inside brackets but still it's scope is global because of var keyword
{
    var scope= 4;
}
console.log(scope);

//let is block scope variable, same for const
{
    let g=9;
    console.log(g);
}
{
    let g=10;
    console.log(g);
}

//JavaScript has 8 Datatypes-
 //String, Number, Bigint, Boolean, Undefined, Null, Symbol, Object
 //The object data type can contain: An object, An array, A date

// first seven are primitive and last one, "object" is non-primitive

//Primitive data types are immutable, which means that they cannot be changed. For example, if you create a string variable and assign it the value "hello", you cannot change the value of the variable to "world" without creating a new variable. They are stored on the stack.

//Non-primitive data types are objects, which are collections of properties and methods. Objects are mutable, which means that their properties and methods can be changed. They are stored on the heap (tree-based data structure).

let num= 9;      //Number
let numb= 56.7;

// to know data type of variable, type "typeof variableName" on console

let myName= "Aarohi"; //String
let isFollow= false; //Boolean
let x; //Undefined, by default every variable is undefined if didn't assign value to it
let n= null; //Null
let big= BigInt(123); //Bigint, output- 123n
let sym= Symbol("Hello"); //Symbol, output- Symbol(Hello)

// OBJECT-  object is collection of Values or different datatypes
// generally we use const keyword, u can also use let keyword
//keyword object-name
const student={
    //key : value,                      in object, there is pairs of key and value
    studentName: "Aarohi Agnihotri", // here keys are studentName, age, cgpa and isPass
    age: 20,                        // Aarohi Agnihotri, 20, 8.0 and true are values
    cgpa: 8.0,
    isPass: true,
};

// to access particular key and values, there are two methods-
// obj.key   OR      obj["key"]       (same for console)
console.log(student);
console.log(student.isPass);
console.log(student["age"]);

//to assign new value OR to update variables in Object
// accessing 'age' variable in 'student' object, student["age"] 
student["age"] = student["age"] + 1;
console.log(student["age"]);

student["studentName"] = "Shristi Singh";
console.log(student["studentName"]);
// console.log(student.cgpa+1);
// console.log(student["studentName"] = "Anup jalota");

//Qs1. Create a const object called "product" to store information shown in the picture. (image1)
const product={
    productName : "Ball Pen",
    productRating : "4.0",
    productOffer : "5",
    productPrice : "260",
}
console.log(product);

//Qs2. Create a const object called "profile" to store information shown in the picture. (image2)
const profile={
    userName : "@shradhakhapra",
    isFollow : true,
    posts : 195,
    followers: 569000,
    following: 4,
    bio: "Apna College",
}

console.log(profile);
console.log( typeof profile["isFollow"]);

let accountEmail = "aarohi@gmail.com";
let accountId = "aarohi12";
let accountPassword = "221234";
let accountCity = "Bengaluru";

// * console.table is a method in JavaScript that displays data in a table format within the console. It is useful for visualizing arrays or objects in a more readable and structured way compared to console.log.
console.table([accountEmail, accountId, accountPassword, accountCity]);

// alert(3); // it throws error on terminal, because this in nodeJS not in browser

console.log(typeof undefined); // undefined
console.log(typeof null); //object

// * TYPE CONVERSION

let score = "33";
console.log(typeof score);
console.log(typeof(score)); //now this is a method

// * all datatypes's first letter is written in capital for conversion
let valueInNumber = Number(score);
console.log(typeof valueInNumber);  // number

// *conversion occurred but output is NaN
let score2 = "33ab";
let valueInNum2 = Number(score2); // number
console.log(valueInNum2) //NaN


// * converting null
let value = null;
let value3 = Number(value);
console.log(typeof value3);  // number
console.log(value3) // 0

// * for undefined => NaN
// * for boolean => true -> 1   false -> 0

// * conversion in boolean => "" -> false   "aa"  -> true    0 -> false   1 -> true
let emptyString = "";
let convEmpString = Boolean(emptyString);
console.log(convEmpString); // false

