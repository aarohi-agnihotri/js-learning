//*  Comments, Operators and Conditional Statements

//single  line comment
/* Multi-line comment
*/

//* Operators- used to perform some operation on data
//* Types- Arithmetic, Assignment, Comparison, Logical, Ternary

//* ARITHMETIC OPERATORS-  +, -, *, /, %, **, unary operators (++ and --)
//The numbers (in an arithmetic operation) are called operands.
let a=10, b=2;
console.log("a", a , "& b =", b);
console.log("a+b=", a + b);
console.log("ab", a - b);
console.log("ab", a*b);
console.log("a/b = ", a/b);
console.log("a % b = ", a%b);
console.log("a ** b = ", a**b);  //exponential a to the power of b
//a++  post increment,  used then increase
//++a  pre increment, increase  then used
//b--  post decrement, use then decrease
//--b  pre decrement, decrease then used

//* ASSIGNMENT OPERATORS- unary(=), +=, -=, *=, /=, %=, **=
let c = 7;
// c += 2;
// c -= 2;
// c *= 2;
// c /= 2;
// c %= 2;
// c **= 2;
console.log(c);

//* COMPARISON OPERATORS- ==, !=, === (equal to and type), !== (not equal to and type), > ,>= , < ,<=
let d= 4, e= 6;
console.log("d==e",d==e); 
console.log("d!=e",d!=e); 

let f=8;
let g="8"; //string, implicitly convert to number
console.log("f==g",f==g); //returns true 

// For strictness so that it doesn't convert to string (it checks)
console.log("f===g",f===g); //returns false
console.log("f!==g",f!==g); 

//* LOGICAL OPERATORS , logical- and &&, or ||, not !
let cond1 = 5<6;
let cond2 = 2!=2;
console.log("cond1 && cond2", cond1 && cond2);
console.log("cond1 && cond2", cond1 || cond2);
console.log("!(d<e)", !(d<e) ); 

//*TERNARY OPERATORS (? :) a shorthand for if-else

// * condition ? true : false

const iceTeaPrice  = 100
iceTeaPrice <=100 ? console.log("less than 100") : console.log("more than 100")

//* CONDITIONAL STATEMENTS=- To implement some condition in the code, it has 3 operands
// condition ? true output : false output
let numb = 20;
numb/2==0 ? "even" : "odd"; //simpler, compact if-else condition


//*IF STATEMENT
let age= 20;
if(age>=18){
    console.log("eligible for vote");
}
if(age<18){
    console.log("not eligible for vote");
}

let mode= "dark";
let color;
if(mode==="dark"){
    color= "black";
}
if(mode==="light"){
    color= "white";
}

//* IF_ELSE STATEMENT
let h=8;
if(h%2 === 0){
    console.log(h," is even");
}
else{
    console.log(h," is odd");
}

//* IF_ELSE_IF STATEMENT
let grade="A";

if(grade=="A+"){
    console.log("Excellent");
}
else if(grade=="A"){
    console.log("Very Good");
}
else if(grade=="B"){
    console.log(" Good");
}
else if(grade=="D"){
    console.log("Fair");
}
else{
    console.log("Poor");
}

//* SWITCH STATEMENT

//* PRACTICE QUESTION
// Qs1. Get user to input a number using prompt("Enter a number:"). Check if the number is a multiple of 5 or not.

// a method to input from user 
//let n = prompt("Enter a number");
// if(n % 5 === 0) {
//     console.log(n, " is a multiple of 5");
// }
// else{
//     console.log(n, " is not a multiple of 5");
// }

//* Qs2. Write a code which can give grades to students according to their scores:
//90-100, A
// 70-89, B
// 60-69, C
// 50-59, D
// 0-49, F

// let scores = prompt("Enter your scores (1-100)");
// if(scores >= 90 && scores <= 100){
//     console.log("Grade A");
// }
// if(scores >= 70 && scores <= 89){
//     console.log("Grade B");
// }
// if(scores >= 60 && scores <= 69){
//     console.log("Grade C");
// }
// if(scores >= 50 && scores <= 59){
//     console.log("Grade D");
// }
// if(scores >= 0 && scores <= 49){
//     console.log("Grade F");
// }

// * INTERESTING EXAMPLES ->

// * here no condition was given inside if block, but it still generate output that is true because of string given inside bracket, there is no empty string, to if wli condition true ho jayegi
const userEmail = "aarohi@gmail.com";

if(userEmail){
    console.log("got user email");
}else{
    console.log("don't have user email");
}


// * how to check if array is empty
const empArr = [];
if(empArr.length === 0){
    console.log("Arr is empty");
}

// * how to check if object is empty
const empObj = {};
if(Object.keys(empObj).length === 0){
    console.log("Obj is empty")
}

// *ON CONSOLE -
// false == 0 returns true
// false == '' returns true
// 0 == '' returns true

// * False and True Values
// * false values 
//* false, null, undefined, 0, -0, "", NaN, BigInt 0n

// * truthy values
"0", 'false', " ", [], {}, function(){}

// * Comparison of null and defined ---
console.log(null > 0) //  false because 0 is not greater than 0.
console.log(null == 0)  // false because null is only equal to undefined and nothing else in loose equality (==). So, null is not considered equal to 0.
console.log(null >= 0) // true because 0 is indeed greater than or equal to  0

// * with undefined it always results in false

// * STACK AND HEAP MEMORY

// stack => primitive data types -  u get copy of data
// heap => non -primitive data types -  u get reference of data

//  stack example -
let value = "A";

let value2 = value;
value2 = "B";

console.log(value);
console.log(value2);

// heap example -
let userOne = {
    email: "aarohi@gmail.com",
    password: 224311,
    followers: 9
}

let userTwo = userOne;
userTwo.email = "another@gmail.com";

console.log(userOne.email)
console.log(userTwo.email)

// values doesn't change because it creates a duplicate of the data. Changes to the copied data do not affect the original data.

// values change because refers to the same data. Changes to the referenced data affect the original data.

// * NULLISH COALESCING OPERATOR (??) with two keywords - null and undefined
// * The nullish coalescing operator (??) in JavaScript is a logical operator that returns the right-hand operand when the left-hand operand is null or undefined. It is useful for providing default values when dealing with potentially null or undefined variables.

// * let result = value1 ?? value2;
// *value1: The first operand (often a variable that might be null or undefined).
//* value2: The fallback value, which is returned if value1 is null or undefined.

// *-> USE CASES ->
// * API Responses-> APIs might return null or undefined for optional fields. For instance, if an API returns a user's profile data but doesn't include their bio, you can use ?? to display a default bio like "No bio available."
// * dark/light mode, subtitle coming soon (better than null/undefined) in case if subtitles are not available

let val1;

// val1 = 5 ?? 10 //5
// val1 = null ?? 10  //10
// val1 = undefined ?? 15 //15

// here in place of 10, 15 there can be functions

console.log(val1)