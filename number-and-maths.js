// * NUMBER AND METHODS

// * DIff btw these two-

const score = 400;
console.log(score);


const balance = new Number(100);
console.log(balance); //specifically cast kiya h i.e. number

// another benefit of explicitly define it - in prototype it shows properties and methods related to numbers only

// * Methods-

console.log(balance.toString()); //it converts into string
console.log(balance.toString().length); // after conversion, its length

console.log(balance.toFixed(2)); // 100.00


// Number of significant digits. Must be in the range 1 - 21, inclusive. and it returns a string
const num2 = 23.89966;
console.log(num2.toPrecision(3));  // 23.9

const num3 = 244.6789;
console.log(num3.toPrecision(3));  //245

const num4 = 1122.3378;
console.log(num4.toPrecision(3));  //1.12e+3

const hundreds =  100000;
console.log(hundreds.toLocaleString()); //US standard - 100,000
console.log(hundreds.toLocaleString('en-IN')); //Indian standara - 1,00,000

//* on console-
// Number is datatype, log below 

// Number.MAX_VALUE
// Number.MIN_VALUE
// Number.MIN_SAFE_INTEGER
// Number.MAX

// * -----MATHS-----

// Here Math is datatype
console.log(Math); //type on console

console.log(Math.abs(-4)); //returns positive value
console.log(Math.round(4.6)); //roundoff to nearest
console.log(Math.floor(4.9)); //roundoff to lowest
console.log(Math.ceil(4.2)); //roundoff to highest