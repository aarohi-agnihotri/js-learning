// * Async-await  >>  promise (promise-chain)  >>  callback (callback-hell)

// * Synchronous -> Synchronous means the code runs in a particular sequence of instructions given in the program. Each instruction waits for the previous instruction to complete its execution.

// * Synchronous programming-, program executes in sequence
console.log("one");
console.log("two");
console.log("three");

// * Asynchronous -> Due to synchronous programming, sometimes imp instructions get blocked due to some previous instructions, which causes a delay in the UI. Asynchronous code execution allows to execute next instructions immediately and doesn't block the flow.

// * Asynchronous programming -
console.log("A");
console.log("B");

//  delay the execution of the provided function by 2000 milliseconds (2 seconds).
setTimeout(() => {
  console.log("hello!");
}, 4000); // 4s = 4000 ms

console.log("C");
console.log("D");