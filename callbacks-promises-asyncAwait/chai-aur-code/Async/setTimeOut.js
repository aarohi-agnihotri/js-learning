// *handler is a function that responds to specific events or actions. Common examples include:

// *Event Handlers: Functions that run when an event occurs, like a button click.
// *Promise Handlers: Functions used to handle the outcome of a promise, such as .then() for success or .catch() for errors.
// * Callback Handlers: Functions passed as arguments to other functions to be executed after a certain operation is completed.

// * SETTIMEOUT()

// * A timeout is a specified period of time after which an action is triggered or a process is stopped if a certain condition is not met.
// *Example => You set a 5-minute timer to boil water for tea. If the water boils before 5 minutes, you make the tea. If not, when 5 minutes are up (timeout), you stop waiting and decide not to make tea. The 5-minute timer is the timeout period.

// *setTimeout() is part of the web APIs provided by the browser environment, not JavaScript itself. JavaScript, as a language, does not have built-in functions for handling timers; instead, the browser or the host environment (such as Node.js) provides these functions.
// *in setTimeout(), inside func is callback handler and second parameter is called delay or timeout duration
// *setTimeout() is used to execute a function after a specified delay

// *using handler
// setTimeout(()=> {
//     console.log("helloooo")
// }, 2000)

// *as an reference
// const sayHello = () => {
//     console.log("Hellooo")
// }

// setTimeout(sayHello, 2000)

// *changing text of h1
// const sayHello = () => {
//     console.log("Hellooo")
// }

// const changeText = () => {
//     document.querySelector('h1').innerHTML = "i love programming"
// }

// setTimeout(changeText, 2000)

// *TO STOP setTimeout(), we use clearTimeout()

// *clearTimeout() is a JavaScript function used to cancel a timeout that was previously set with setTimeout(). If you’ve set a timeout using setTimeout() but want to prevent the scheduled function from running, you can use clearTimeout() to stop it.

//* How clearTimeout() Works

// *Setting a Timeout: When you use setTimeout(), it returns a unique identifier (a timeout ID).
const sayHello = () => {
  console.log("Hellooo");
};

const changeText = () => {
  document.querySelector("h1").innerHTML = "i love programming";
};

// * that is timeout ID => setTimeout(sayHello, 2000) , now we have stored this is in changeMe variable
const changeMe = setTimeout(changeText, 2000);

// *Clearing a Timeout: You pass the timeout ID to clearTimeout() to cancel the scheduled function call.
// *Remember -> you must pass the timeout ID, not the function itself
// clearTimeout(changeMe)

// * clearTimeout on event
document.querySelector("#stop").addEventListener("click", () => {
  clearTimeout(changeMe);
  console.log("stopped"); // to check
});
