// * SOME POINTS

//* ARRAYS -  storing a collection of multiple items under a single variable
// * JS arrays are resizable
//* JS arrays are not associative arrays, so array elements cannot be accessed using arbitrary strings as indexes
//*JS array-copy operation create  shallow copies (properties share the same reference)
// * deep copy - properties don't share the same reference

const cars = []; //*declaration
cars[0] = "volvo"; //*initialization one by one
cars[1] = "hundai";
cars[2] = "lamborghini";

console.log(cars);

//*  access an array element by referring to the index number:
let favCar = cars[2];
console.log(favCar);

//* converting an array to a string
console.log(cars.toString());

let colors = ["violet", "indigo", "blue", "green", "yellow"]; //* declaration and initialization
console.log(colors);
console.log("Length of array (color):", colors.length); //property

// * 2nd method of declaration
const myArr = new Array(1, 2, 3, 4);
console.log(myArr);

//*adding an element through length property
colors[colors.length] = "cyan";
console.log(colors);

// * TYPE OF ARRAY = object
console.log(typeof colors);
// object because it is object type
// like in object there is key: value
// but in array there is index: value  means at index 0, value is 40

//* ARRAY INDICES
console.log(colors[3]); //green
console.log(colors[5]); //undefined colors[0] = 55;
colors[0] = "orange"; //changing value at index 0 from 40 to 55
console.log("Modified Array: ", colors); //array is mutable

// LOOPING OVER ARRAYS - print all elements of an array
console.log("Using for loop");
for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}
// we can also use for-in loop but for-of preferred more
console.log("Using for-of loop");
for (let color of colors) {
  console.log(color);
}

//* ques- Qs. For a given array with marks of students -> [85, 97, 44, 37, 76, 60] Find the average marks of the entire class.

let marks = [85, 97, 44, 37, 76, 60];
let sum = 0;
for (let value of marks) {
  sum += value;
}
console.log("Average marks : ", sum / marks.length);

//* Qs. For a given array with prices of 5 items -> [250, 645, 300, 900, 50] All items have an offer of 10% OFF on them. Change the array to store final price after applying offer

let prices = [250, 645, 300, 900, 50];
console.log("Original price", prices);
// how to calculate-  divide the price by 10(offer) and then subtract that from the price

// using for loop
// for( let i=0; i<prices.length; i++){
// let offer = prices[i]/10 ;
// prices[i] -= offer;
// }

// u cannot directly access index value using for-of loop, so we do indirectly
//*  using for-of loop

let i = 0;
for (let itemPrice of prices) {
  let offer = itemPrice / 10; // let offer = prices[i]/10 ;
  prices[i] -= offer;
  i++;
}
console.log("Final price after 10% offer");
console.log(prices);
  
//* ARRAY METHODS

//*push() - add to end,
let clothes = ["shirt", "top", "jeans", "shocks"];
// clothes.push("kurti");  // u can add one or more
clothes.push("kurti", "maxi", "plaazzo");
console.log(clothes);

//* pop() - delete from end and return
let foodItems = ["potato", "carrot", "banana", "mango"];
console.log("Before deletion", foodItems);
console.log(foodItems.pop()); //print deleted item which is always last on
console.log("After deletion", foodItems);

//* toString() - converts array to string
let mobile = ["moto", "oppo", "samsung", "nokia"];
console.log(mobile);
console.log(mobile.toString());
console.log(mobile); //doesn't change the original one

let values = [89, 79, 60, 50];
console.log(values.toString());

//* concat - join multiple arrays and returns result
let marvelHeroes = ["thor", "spiderman", "ironman"];
let dcHeroes = ["sierran", "batman"];
console.log(marvelHeroes.concat(dcHeroes));

let indianHeroes = ["shaktiman", "krish"];
console.log(marvelHeroes.concat(dcHeroes, indianHeroes)); //u can add more

//* unshift method - add to start (works as pop)
marvelHeroes.unshift("antman");
console.log(marvelHeroes); //change the original one

//* shift method -  delete from start (works as push)
dcHeroes.shift();
console.log(dcHeroes); //change the original one

//* slice() - returns a piece of array  (doesn't change original one)
// strSlice(startIdx, endIdx)   - ending index is excluded
let days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
console.log(days.slice(1, 3)); //index 1 to index 2
console.log(days.slice(2)); // print all except 0,1 means before 2
console.log(days.slice()); //print all

//*splice() method - change original array(add, remove, replace)
// splice(startInd, delCount, newElement)
//* The difference between the new toSpliced() method and the old splice() method is that the new method creates a new array, keeping the original array unchanged, while the old method altered the original array.

//startInd decide from where newElement has to added and which element has to be removed
let element = [0, 1, 2, 3, 4, 5, 6];
// element.splice( 2, 3, 55, 66);
//above, starting index is 2 | from index2 , 3 elements  deleted | 55 and 66 added

// add element
// element.splice(2, 0, 55);  // 0, 1, 55, 2, 3, 4, 5, 6

// delete element
// element.splice(2, 3);  //0, 1, 5, 6

// replace element
// element.splice(3, 1, 44); // 0, 1, 2, 44, 4, 5, 6

// element.splice(4); // it return after index 4
// element.splice(); // it doesn't make any change

// * diff btw splice() and slice ->
// splice cause change in original array while slice not

// * include() method -> to check whether it include or not, result in boolean type
const myArr2 = [1, 2, 3, 4];
console.log(myArr2.includes(9)); // false

// * indexOf - return index, if index not found it returns -1
console.log(myArr2.indexOf(9)); // -1

// * join() method - to join and convert it to string
const newArr = myArr2.join();
console.log(newArr);
console.log(typeof newArr); // string

//* Qs. Create an array to store companies -> "Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"
// a. Remove the first company from the array
// b. Remove Uber & Add Ola in its place
// c. Add Amazon at the end

let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
console.log(companies);

companies.shift();
companies.splice(2, 1, "Ola");
companies.push("Amazon");

//* ARRAY SEARCH

//* find() ->  array.find(function(currentValue, index, arr), thisValue)
// * It is used to return the first element in an array that satisfies a specified test function. 
// *It iterates through each element of the array and returns the first one that meets the condition defined in the callback function.0
// * If no element satisfies the condition, the method returns `undefined`. 
// * Doesn't alter the original array.

// *Note that the function takes 3 arguments:
/* The item value
  The item index
  The array itself  */

let temperature = [22,33,44,55,66,77]
const weatherSetting = {maxComfortTemp: 40}

const firstHostDay = temperature.find( function(temp, idx, arr) {
  console.log(`Index: ${idx} and array: ${arr}`)
  return temp > this.maxComfortTemp
}, weatherSetting)

console.log(firstHostDay)

// * VERY IMPORTANT -> in above example i have used before arrow function so it results undefined , so what's the reason behind that? 
// * Arrow functions work differently. Arrow functions don't have their own this. Instead, they inherit this from their surrounding context (the place where the function is defined). This is called "lexical this."
// *Lexical this means that arrow functions take this from the scope where they are defined, not where they are called.

// *The arrow function you wrote doesn't have its own this, so it inherits this from the surrounding context (outside of find()), which doesn't know anything about weatherSetting.This is why this.maxComfortTemp becomes undefined, and the condition fails.

//* ARRAY SORT -

console.log(companies.sort()); //*sort() -sorted the array
console.log(days.reverse()); //*reverse() - reverse the array

// By combining sort() and reverse(), you can sort an array in descending order:
console.log(animals.sort());
console.log(animals.reverse());

//* toSorted() and toReversed() method-
// The difference between toSorted() / toReversed() and sort() / reverse() is that the first method creates a new array, keeping the original array unchanged, while the last method alters the original array.
const months = ["Jan", "Feb", "Mar", "Apr"];
const sorted = months.toSorted();
const reversed = months.toReversed();
console.log(months);
console.log(sorted);
console.log(reversed);

//* flat() method
const word1 = ["jan", "Feb", "Mar", "Apr"];
const word2 = ["May", "Jun", "Jul"];
const word3 = ["Aug", "Sep", "Oct"];
const word4 = ["Nov", "dec"];

const combword = [word1, word2, word3, word4];
console.log(combword.flat());

// * JOINING ARRAYS BY USING DIFFERENT METHODS, WHICH ONE IS BETTER AND WHAT'S IMPACT OF JOINING

const marvel_heros = ["thor", "Ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

// * using push
// marvel_heros.push(dc_heros)

// array inside array, that's what we don't want
console.log(marvel_heros); // [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]

// to access 3rd element
// console.log(marvel_heros[3][2])  // batman

// * using concat - it returns new array, doesn't change the original one
const allHeros = marvel_heros.concat(dc_heros);
console.log(allHeros); // [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

// * using spread operator (best use)
const all_new_heroes = [...marvel_heros, ...dc_heros];
console.log(all_new_heroes);

// * flat method
const another_array = [1, 2, 3, [4, 5], [6, 7, [5, 6]]];
const arr_output = another_array.flat(2); // value inside flat() specifies the depth level up to which the array should be flattened
// const arr_output = another_array.flat(infinity)
console.log(arr_output);

// * SOME OTHER METHODS
console.log(Array.isArray("Hitesh")); // to know whether it is array or not

// * from() method - used for converting array-like-objects  and mapping functions
console.log(Array.from("Hitesh")); // creates an array from iterable objects
console.log(Array.from({ name: "hitesh" })); //it returns [],  this will not work, as this is neither array not iterable object

// * It accepts a second argument, which is a map function, to apply on each element as the array is created.
const arrWithMapping = Array.from([1, 2, 3], (x) => x * 2);
console.log(arrWithMapping);

// * Array.of() => creates a new array with the given elements
let score1 = 100;
let score2 = 200;
let score3 = 300;

// returns new array from set of elements(array, variable, strings etc)
console.log(Array.of(score1, score2, score3));

const mixedArray = Array.of(1, "hello", true, { name: "Alice" });
console.log(mixedArray); // [1, 'hello', true, { name: 'Alice' }]

const arrayOfObjects = Array.of({ id: 1 }, { id: 2 }, { id: 3 });
console.log(arrayOfObjects); // [{ id: 1 }, { id: 2 }, { id: 3 }]
