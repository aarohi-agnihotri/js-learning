// Loops and Strings
//LOOPING STATEMENTS- for, while, do-while, for-of, for-in
// STRINGS- declaration, template literals, escape characters, string-methods


// LOOPS- to execute a piece of code again  and again
//types- for, while, do-while, for-of, for-in
// FOR LOOP
// initalization;  condition; updation
for (let count = 1; count <= 10; count++) {
  console.log("Aarohi");
}

// calculate sum 1 to 5
// let sum=0;
// for(let num=1 ; num <= 5 ; num++){
//     sum = sum + num;
// }
// console.log("Sum is : ", sum);

//calculate sum 1 to n
let n = 6,
  sum = 0;
for (let num = 1; num <= n; num++) {
  sum = sum + num;
}
console.log("Sum is : ", sum);

//* Infinite loop- loop that never ends (never run that loop , system will hang)
// for(let count=1 ; count >=0 ; count++ ){
//     console.log("Aarohi");
// }

//* WHILE LOOP
// initialisation
// while (condition){
//   some code + updation
// }

let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}

//* DO_WHILE LOOP  - at least run one time
// initialisation
// do{
//  updation
// }while (condition);

let j = 20;
do {
  console.log("Hii");
} while (j <= 10);

// * LOOP WITH BREAK AND CONTINUE

// * for loop with break
// * break -> immediately exits the current loop or switch statement. ending its execution entirely
// * continue -> skips the current iteration of the loop and proceeds with the next iteration
for (let index = 1; index <= 20; index++) {
  if (index === 5){
    console.log("5 detected")
    // break;
    continue;
  }
  console.log(`Value of i is ${index}`)  
}

// *Ques1: Print all even numbers from 0 to 100
console.log("Even numbers: ");
for (let i = 0; i <= 100; i += 2) {
  console.log(i);
}

//* ques2: Create a game where you start with any random game number. Ask the user to keep guessing the game number until the user enters correct value.

//let gameNum = 25;
// let guessNum = prompt("Guess the game number");

//while (gameNum != guessNum) {
// guessNum = prompt("Oops! try again");

//}
console.log("Yay! You have guessed the right number");

//* STRINGS -> sequence of characters used to represent text
// * string is object type

// two ways to declare a string
let str= "Apna College";  //*first method => most preferred
let str2= 'Hello';

//* second method => using new keyword
// on console if u enter gameName , u will see its key value pairs, 
const gameName = new String("Tic Tac Toe");
console.log(gameName);

console.log("Length of String: ", str.length);  // to store total number of characters in the string

//obj.key = str.length   AND      obj[key] = str[position/index]

// to access character at specific position
console.log("String Index", str[8]);   //plural of index is indices

//* TEMPLATE LITERALS - a way to have embedded expressions in strings
let specialString = `This is a template literal`;  //It is type of special string
console.log(typeof specialString);

//In this case this is better to use, see below example
const obj= {
  item: "pen",
  price: 10,
}

//* String interpolation allows injecting variables, function calls, and arithmetic expressions directly into a string (line 136)
// * nowadays, use string interpolation is highly recommended

// console.log("The cost of", obj.item , "is", obj.price, "rupees");   in output 10 is highlighted because this is in number form

// let output= `The cost of ${obj.item} is ${obj.price} rupees`;
// console.log(output);
console.log(`The cost of ${obj.item} is ${obj.price} rupees`);  //in output 10 is not highlighted because now it is in string form

// u can also add expression
console.log(`This is a template literal ${1+2+3}`);  //It is type of special string

//* Escape characters
console.log("Next\nLine");  // 
let tab="to give\tspace";
console.log(tab);
console.log(tab.length);  //13 because "/t" represent as 1 character

//* str.length is property, not method because it gives a value  while method perform some operations

//* STRING METHODS - built-in functions to manipulate a string
let strName = "bca";
strName.toUpperCase(); 
console.log(strName);  //see here after applying function to string it doesn't print the change one because those in-built function never change original string, they create a new string

// *In JAVASCRIPT, strings are immutable (unchangeable) that's why they never change the original one, they create new one 

// so to print the change one, we need to put it in new string variable
let strNameChn = strName.toUpperCase(); 
console.log(strNameChn); 

let strUpper = "SCHOOL"
let strUpperchn = strUpper.toLowerCase();
console.log(strUpperchn);

let strTrim = "       hello  js      ";
let strTrimChn = strTrim.trim();   //removes whitespace (start and end)
console.log(strTrim);
console.log(strTrimChn);

let strSlice = "abcde"
// str.slice(start, end?);    end is excluded
let strSliceChn = strSlice.slice(1,3);
console.log(strSliceChn);

let strSlice2 = "01234"
let strSliceChn2 = strSlice2.slice(1,3);
console.log(strSliceChn2);

//* CONCATENATION
let strCon1 = "Hello"
let strCon2 = "Aarohi"

let strConChn = strCon1.concat(strCon2);
let strConChn2 = strCon2.concat(strCon1);
let strConChn3 = strCon1 + strCon2;

console.log(strConChn);
console.log(strConChn2);
console.log(strConChn3);

// * REPLACE
let strReplace1 = "hellolo";
console.log(strReplace1.replace("lo" , "p"));  // replace first matching character(s)

let strReplace2 = "hellololo";
console.log(strReplace2.replaceAll("lo" , "p"));  //replace all matching character(s)

// to return Character of string at specific index 
let strChar = "IloveJS";
console.log(strChar.charAt(3)); //v

// to change character of string
let strRandom = "IloveJS";
strRandom[0] = "A";
console.log(strRandom); //assume AloveJS , but it doesn't print because string is immutable, so to change this, we will replace()
console.log(strRandom.replace("I" , "A"));

//* Qs1. Prompt the user to enter their full name. Generate a username for them based on the input. Start username with @, followed by their full name and ending with the fullname length.

// let userFullName = prompt("Enter your full name without spaces");
console.log(`@${userFullName}${userFullName.length}`);