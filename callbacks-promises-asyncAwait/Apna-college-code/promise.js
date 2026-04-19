// * Promises -> it is for eventual completion of task. It is an object in JS. It is a solution to callback hell. A Promise represents a value that may be available now, or in the future, or never. It represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

// * A JS object can be-
//* Pending - the result is undefined
//* Resolved - the result is  a value (fulfilled)
//* Rejected - the result is an error object

// * on console, when u enter promise - promise has prototype, promiseState (pending, fulfilled) and promiseResult ((result for resolve & error for reject).

//* Promise is a class in JavaScript.
// * When you create a new promise with new Promise, you provide an executor function that runs immediately.
// * The resolve and reject functions are used within the executor to indicate the completion status of the asynchronous operation, these are provided by JS

//* resolve(result)    AND     reject(error)
// let promise = new Promise((resolve, reject) => {
//   console.log("this is promise");

// resolve is a function, here we pass 123
// resolve(123);   // on console- promise
// reject("some error occurred");    // on console- promise
// });

// * Here we create the promise object ourselves, but in general programming we don't create promise object, if we sent request to an api to send some data, then that api sends us a promise in return and then we deal with that data of promise..so we just handle with that promise, as it already created by the api

// how promises are use in general programming, let's suppose below function is an API which returns data, so API doesn't directly return data, they return promise object

// in below func, The function returns a new Promise object. The executor function (resolve, reject) => { ... } is executed immediately. The Promise constructor takes a function as an argument. This function is called immediately with two arguments: resolve and reject.

// function getAPIExample(dataId, getNextData) {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         console.log("data", dataId);
//         resolve("Success");
//         // reject("Error occured");
//         if (getNextData) {
//           getNextData();
//         }
//       }, 5000);
//     });
//   }

//* on console - let result = getAPIExample(123);
// *  on console - before(5sec) enter "result" -promise state is pending
// * on console - after output was displayed enter "result" - promise state is fulfilled and result is Success
// * on console - enter same for reject

//* above, we create, resolve and reject Promise but now we use Promise by using two functions - .then() and .catch(), we can also pass parameters

// const getPromise = () => {
//   return new Promise((resolve, reject) => {
//     console.log("I am a promise");
//     // resolve("success");
//     reject("Network error");
//   });
// };

// let promise = getPromise();

// * The .then method is used to specify what to do when the Promise is fulfilled (resolved).
// promise.then((res) => {
//   console.log("Promise fulfilled", res);
// });

// * The .catch method is used to specify what to do when the Promise is rejected.
// promise.catch((err) => {
//   console.log("Promise rejected", err);
// });

// * PROMISE CHAIN  - Promise chaining allows you to perform multiple asynchronous operations in sequence, where each operation starts when the previous one completes.

// *below example-1 display this output but
// Fetching data1...
//  Fetching data2...
//  data 1
//  data 2

// *  we want this output -  that's what concept of promise chain, we overcome the callback - hell
// Fetching data1...
//    data 1
//    Fetching data2...
//    data 2

//  * example-1
function asyncFunc1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data 1");
      resolve("success");
    }, 4000);
  });
}

function asyncFunc2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data 2");
      resolve("success");
    }, 4000);
  });
}

// * code for the output we get
// console.log("Fetching data1...");
// let p1 = asyncFunc1();
// p1.then((res) => {
//   console.log(res);
// });

// console.log("Fetching data2...");
// let p2 = asyncFunc2();
// p2.then((res) => {
//   console.log(res);
// });

// *code for the output we want -
// console.log("Fetching data1...");
// let p1 = asyncFunc1();

// p1.then((res) => {
//   console.log("Fetching data2...");
//   let p2 = asyncFunc2();
//   p2.then((res) => {});
// });

// * in more simplify form-
// console.log("Fetching data1...");
// asyncFunc1().then((res) => {
//   console.log("Fetching data2...");
//   asyncFunc2().then((res) => {});
// });

// * example - 2 (this is same as example used in callback-hell, diff is here we use promise chain to overcome callback-hell) and a better way to write code to get output
function getData2(dataId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data", dataId);
      resolve("success");
    }, 5000);
  });
};

// console.log("getting data1...");

// getData2(1).then(() => {
//   console.log("getting data2...");
//   getData2(2).then(() => {
//     console.log("getting data3...");
//     getData2(3).then(() => {
//       console.log("getting data4...");
//       getData2(4).then(() => {
//         console.log("finished");
//       });
//     });
//   });
// }); 

//* there is one more better way to write above code, and that's actual promise chain
console.log("getting data1...");
getData2(1)
.then(() => {
  console.log("getting data2...");
  return getData2(2);
})
.then(() => {
  console.log("getting data3...");
  return getData2(3);
})
.then(() => {
  console.log("getting data4...");
  return getData2(4);
})
.then(() => {
  console.log("finished");
});


