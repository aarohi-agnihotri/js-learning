// * Async-await -

// * The async keyword is used to declare an asynchronous function. An asynchronous function is a function that returns a Promise. Inside an async function, you can use the await keyword to wait for a Promise to settle (either resolve or reject).

async function helloJS() {
  console.log("hello JS");
}

// on console - helloJS();   ------ (inside promise will be shown and stage is fullfilled bcoz it was returned)

// * Await means to wait --- it pauses the execution of its surroundings async function until the promise is settled.
// * await keyword can only used in async function

function api() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("weather data");
      resolve(200);
    }, 3000);
  });
}

async function getWeatherData() {
  await api();
  await api();
  await api();
}

// * the need is to wait for certain data before proceeding to the next operation. async/await allow you to write code that clearly specifies the order of asynchronous operations, ensuring that each step waits for the previous one to complete before moving on.

// * same example used above in callback-hell and promise chain, we do using async await
function getData3(dataId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("dataAsync", dataId);
      resolve("success");
    }, 5000);
  });
}

async function getAsyncData() {
  console.log("fetching dataAsync 1....");
  await getData3(1);
  console.log("fetching dataAsync 2....");
  await getData3(2);
  console.log("fetching dataAsync 3....");
  await getData3(3);
  console.log("fetching dataAsync 4....");
  await getData3(4);
}

getAsyncData();

// *for error handling, we can use try-catch block

//* if we have choice, then we use either async-await OR .then() & .catch(),  are not recommended to use together

//* in promise and callback, to display final output, we don't need to use function for execution, but for async-await we have to use function to display final output and then calling that function also, that call is unnecessary, to avoid the call, we use IIFE
