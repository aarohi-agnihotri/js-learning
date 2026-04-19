// * Promises -> it is for eventual completion of task. It is an object in JS/ A Promise represents a value that may be available now, or in the future, or never. It represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

// *when promises are not available directly in js, people use promise library - Q or bluebird

// *declaring promise object
//* const promiseOne = new Promise(callback function)

//* Promise creation
const promiseOne = new Promise(function (resolve, reject) {
  // Do any async task
  // Do calls, cryptography, network calls
  setTimeout(function () {
    console.log("Async task is complete");
    //* to connect with.then(), u have to call resolve, resolve is a method
    resolve();
  }, 1000);
});

//* Promise Consumption
// .then is connect with resolve
// promiseOne.then(callback)
promiseOne.then(function () {
  console.log("Promise consumed");
});

// *u don't need to store in variable. AND without variable u can write .then directly as u can see below
new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task 2");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Async 2 resolved");
});

// *passing parameters in resolve(), u can pass object, array, function
const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task 3");
    //* resolve is method and can take callback function
    resolve({ username: "Chai", email: "chai@example.com" });
  }, 1000);
});

promiseThree.then(function (user) {
  console.log(user); // {username: 'Chai', email: 'chai@example.com'}
});

// *passing parameters in reject also
const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({ username: "aarohi", password: "1234" });
    } else {
      reject("ERROR : Something went wrong");
    }
  }, 1000);
});

// *promise is pending and it throws error
// const username = promiseFour.then((user) => {
//     console.log(user)
//     return user.username
// })

// console.log(username)

// * it throws error because => inside callback func
// *console.log(user) logs the resolved value {username: "aarohi", password: "1234"}.
// *return user.username returns "aarohi", which becomes the resolved value of the new promise returned by then.
// *However, console.log(username) is called immediately after the .then(...) method is chained. At this point, the promise returned by then is still pending (since the asynchronous operation inside promiseFour hasn't completed yet).
// *Thus, console.log(username) logs the promise object, not the actual username value.

// *this is promise chain
promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("It verily execute");
  });

const promiseFive = new Promise((resolve, reject) => {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({ username: "javascript", password: "1234" });
    } else {
      reject("ERROR : JS went wrong");
    }
  }, 1000);
});

//* for error handling u can use try-catch block in case of async-await
async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch {
    console.log(error);
  }
}

consumePromiseFive();

// *why await is used with response.json() =>
// *When you make a network request using fetch, it returns a Promise that resolves to a Response object once the request is complete. However, the response body (the actual data you want) still needs to be processed or parsed from a stream to a more usable format, such as JSON.
// *To get the actual data from the response in a usable format (like JSON), you use response.json(). This method takes some time because it reads the response data from the network.
//* await with response.json(): Since reading the response and converting it to JSON is not immediate, response.json() returns a Promise. You use await to wait for this promise to resolve, so your code pauses until the data is ready.
// *await is used with response.json() because response.json() is an asynchronous operation that returns a Promise.

// * example=>  fetching data using async await
// *u can also wrap in try-catch block
// async function getAllUsers()
// {
//    const response = await fetch('https://jsonplaceholder.typicode.com/users')
//    const data = await response.json()

// }

// getAllUsers();


// * same example => fetching using promise
const response = fetch("https://jsonplaceholder.typicode.com/users");
response
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch(console.log("oops! error"));



