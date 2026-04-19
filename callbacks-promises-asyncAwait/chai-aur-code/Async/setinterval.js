// * setInterval is asynchronous.
// *setInterval repeatedly runs a function at a set interval without blocking other code from running. It schedules tasks to run after a specified delay and does not pause the execution of the rest of the code. The function you provide to setInterval runs independently on the event loop whenever the time interval is reached.

// *setInterval(): Sets up a function to be called repeatedly at specified intervals (in milliseconds).
// *setInterval() can accept additional arguments after the delay parameter. These additional arguments are passed as arguments to the callback function when it is executed. 

// let myDate = new Date();
// const sayDate = (mssg) => {

// // console.log("HI", myDate.toLocaleTimeString());
// console.log(mssg, myDate.toLocaleTimeString());

// }

// setInterval(sayDate, 1000)

// *Pass parameters to the function (does not work in IE9 and earlier):
//  setInterval(sayDate, 1000, "hello")

// *However, if you use an anonymous(normal/arrow) function it works in all browsers: 
//  setInterval(() => {sayDate("hello")}, 1000)

// *clearInterval(): Stops the repeated execution set up by setInterval() using the interval ID returned by setInterval().

let myDate = new Date();
const sayDate = (mssg, name) => {
console.log(mssg, name, myDate.toLocaleTimeString());
}

// const intervalId = setInterval(sayDate, 1000, "hello", "aarohi");

// *on event
let intervalId;
document.querySelector("#start").addEventListener("click", () => { 
 intervalId = setInterval(sayDate, 1000, "hello", "aarohi");
 })

// clearInterval(intervalId);

// *on event =>
document.querySelector("#stop").addEventListener("click", () => {
    clearInterval(intervalId);
})


