// *FOR-OF/ FOR_IN LOOP - to iterate on some special data type

//* For-of loop (to iterate on arrays and strings (most preferable)
// * in case of object values, for of loop throws error
// for (const element of object) {

// }

//* string example of for-of loop
let word = "Javascript";
let size = 0;
// here initialization, condition and updation occurs automatically
for (let i of word) {
  console.log("i= ", i);
  size++;
}
console.log("Size of string: ", size);

// * array example of for-of loop
const ar = [1, 2, 3, 4];
for (const num of ar) {
  console.log(num);
}
// * object example of for-of loop
const obJ = {
  names:"aarohi",
  fav: "cat"
}

// * it throws error as object is not iterable using for-of loop
// for (const ele of obJ) {
//   console.log(ele)
// }

// * For-in loop (to iterate object and arrays)
// for(let key in objVar){
//do some work
// }

// * object example of for-in loop
let data = {
  name: "Aarohi",
  age: "20",
  cgpa: 8.2,
  isPass: true,
};
//  here key is variable name and data is object name
for (let key in data) {
  console.log("Key is: ", key, " and Value is: ", data["cgpa"]);
  // data[key] VS data["key"]
  // search for all keys & print their values VS search for specific 'key' and print their value in object
}

// *array example of for-in loop
const alphaBets = ["a", "b", "c", "d", "e"];
for (const keys in alphaBets) {

  // * output -> 0 1 2 3 4 that's happened because by default array keys are start from 0 are in number, but for objects u can define keys  
  // *so 0 1 2.. are keys and their values are a b c..
  // console.log(keys) 
  
  // * to print values of keys in array
  console.log(alphaBets[keys]) 
}

// * string example of for-in loop
const str = "august"
for (const char in str) {
  // * output is index value (in number starts from 0), so for string that also default behaviour as arrays's keys
  console.log(char)

  // * to print values of keys(index) in string
  console.log(str[char])
}

// * MAP - (OBJECT)

// *Purpose: Map is a built-in object in JavaScript that allows you to store key-value pairs. It is primarily used to store data with unique keys, where both keys and values can be of any type.
// *Features: Supports various methods like set(), get(), has(), delete(), and iteration through key-value pairs.

//* A Map remembers the original insertion order of the keys.
// * agr pairs duplicate hogi to ye ek hi rkhega

// *creating a map -
const map = new Map();

// *Adding Items: Use set() to add key-value pairs.
map.set("IN", "India");
map.set("USA", "United States Of America");
map.set("Fr", "France");
map.set("IN", "India");

// console.log(map)

// * example of for of loop on Map
// what's inside bracket is syntax
for (const [key, value] of map) {
  console.log(`${key}:- ${value}`);
}

const myObj = {
  game1: "NFS",
  gam2: "Spiderman",
};

// *example of for-in loop on Map
for (const key in map) {
  // * so iteration on map using for-in loop is not possible
  console.log(key) // nothing print
}

// *forEach LOOP IN ARRAYS - It is used to iterate over an array. This is only used for arrays
// *arr.forEach(callBackFunction)
// *CallbackFunction: Here, it is a function to execute for each element in the array
// *A callback is a function passed as an argument to another function.

const number = [1, 2, 3, 4, 5, 6];

number.forEach(function printValue(val) {
  console.log(val); //val - value at each index
});

// *Generally we use arrow function-
const number2 = [1, 2, 3, 4, 5, 6];

number2.forEach((val) => {
  console.log(val);
});

//Callback function takes 3 values - value, index, array
const alphabets = ["a", "b", "c", "d", "e"];

alphabets.forEach((val, idx, arr) => {
  console.log(val.toUpperCase(), idx, arr);
});

//* this is called Higher Order Function/Method because a function that either take another function as parameter inside them or they return another function as their output

//*Ques - for a given array of numbers, print the square of each value using the forEach loop
const numb = [1, 2, 3, 4, 5];
numb.forEach((val) => {
  console.log(val * val); //val**2
});

// *Another way to write callBack function, first define function then pass it as an argument inside forEach() function

let calSquare = [1, 2, 3, 4, 5];

//this is arrow function
let calSquareFunc = (val) => {
  console.log(val * val); //val**2
};

//this is higher-order func, in which calSquareFunc() func passed as argument
calSquare.forEach(calSquareFunc); //here arrow function used as parameter inside forEach function

// * common scenerio for forEach Func-
// *objects inside array
// * [{}, {}, {}]

const myCoding =[
  {
    langName: 'javascript',
    langFileName: 'js'
  },
  {
    langName: 'java',
    langFileName: 'java'
  },
  {
    langName: 'python',
    langFileName: 'py'
  }
]

myCoding.forEach((item) => {
  console.log(item)
  console.log(item.langName)
})

// * REMEMBER foreach() never returns a value, so no use of return keyword

// *map() - (ARRAY METHOD)
// * Purpose: map() is an array method that creates a new array by applying a provided function to every element of the original array. It is used for transforming data in an array.

// * Features: Iterates over the array, applies a callback function to each element, and returns a new array with the results.
//* arr.map(calBackFUnc (val, index, array))
//generally we don't use index and array with forEach and map function in array

let sq = [11, 12, 13, 14, 15];

// sq.map( (val) => {
//   console.log(val**2);
// })

const newSq = sq.map((val, index, array) => {
  return val ** 2;
});
console.log(newSq);

// * DIFF BTW forEach() AND map()
//* forEach() never returns a new array but instead modifies an old array
const names = ["Rohit", "Aakash", "Vinay", "Ashish", "Vasu"];
const newNames1 = names.forEach(function (name, index, array) {
  array[index] = name + "DEV";
});
// console.log(newNames); // Undefined
console.log(names); //changed

//* map() return the new Array with updated value and the original value of Array is not changed
const names2 = ["aarohi", "naincy", "raksha", "archita", "anshika"];
const newNames2 = names2.map((val, index) => {
  return val + " hi";
});


console.log(names2); // unchanged
console.log(newNames2);

//* filter() method - creates a new array of elements that gives true for a condition, it doesn't change original one instead it returns a new array
let arr = [1, 2, 3, 4, 5];
let newArr = arr.filter((val) => {
  return val > 3; //right condition here only
});
console.log(newArr);

// * filter example-
const books = [
  { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
  { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
  { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
  { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
  { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
  { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
  { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
  { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
  { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

let userBooks= books.filter((bk) => bk.genre === 'Science')

userBooks = books.filter((bk) => {
  return bk.publish >= 2000 && bk.genre === 'Science'
})

console.log(userBooks)

// *compact way to write
// let newArr = arr.filter((val) => val > 3);
// console.log(newArr);

//  * Reduce() method - Performs some operations & reduces the array to a single value. It returns that single value
// previousValue = 1, currentValue = 2
// 1+2 = 3, 3+3 = 6, 6+4 = 10
const array1 = [1, 2, 3, 4];
const sumOfValue = array1.reduce((previousValue, currentValue) => {
  // result, current
  return previousValue + currentValue;
});
console.log(sumOfValue);

//*one more example-  find the largest one
const array2 = [1, 10, 55, 27, 33, 46];
const result = array2.reduce((result, current) => {
  return (result = result > current ? result : current);
});
console.log(result);

// * previousValue is actually called accumulator
// * u can give accumulator value also
const myNums = [1,2,3,4]

const myTotal = myNums.reduce((acc, cuurVal) => {
  console.log(`acc = ${acc} and cuurVal = ${cuurVal}`);
  return acc + cuurVal  
}, 4)

// *compact way
// const myTotal = myNums.reduce((acc, cuurVal) => acc + cuurVal, 4)

// * objects inside array example
const arrExample = [
  { course: "dsa with java",
    price: 3000
  },
  { course: "web dev",
    price: 8000
  },
  { course: "data science",
    price: 12000
  }
]

const arrResult = arrExample.reduce((acc, cuurVal) => cuurVal.price + acc, 0)
console.log(arrResult) //230000

// * Chaining 
//* Chaining in JavaScript refers to the practice of calling multiple methods on an object consecutively, in a single statement. This is made possible because methods return the object itself (or another object), allowing the next method to be called on the result of the previous one.

// * chaining is commonly used with array methods and in class where two-three or more functions called consecutively

// * chaining with array methods

const cal = [1,2,3,4,5]
const calResult = cal.map((num) => num*10)
    .map((num) => num+1)
    .filter((num)=> num>=40)

console.log(calResult) // [41, 51]

//  * Qs. We are given array of marks of students. Filter out of the marks of students that scored 90+.
const marks = [97, 66, 77, 45, 91, 80];
const marksResult = marks.filter((val) => {
  return val > 90;
});
console.log(marksResult);

//* Qs. Take a number n as input from user. Create an array of numbers from 1 to n.
//* Use the reduce method to calculate sum of all numbers in the array.
//* Use the reduce method to calculate product of all numbers in the array.

// let n = prompt("Enter a number :");
// const arrCalc = [];
// for (let i = 0; i <= n; i++) {
//   arrCalc[i] = i;
// }
// console.log(arrCalc);
// const calcSum = arr.reduce((acc, val) => {
//   return acc + val;
// });
// const calcMul = arr.reduce((acc, val) => {
//   return acc * val;
// });
// console.log(calcSum);
// console.log(calcMul);
