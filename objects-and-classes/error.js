// * ERROR HANDLING - try-catch
// * try block: Contains code that may throw an error.
// * catch block: Contains code to handle the error.
// * finally block (optional): Contains code that runs regardless of whether an error occurred or not.
let a = 3,
  b = 5;
console.log("a =", a);
console.log("a =", b);
console.log("a+b =", a + b);

try {
  console.log("a+b =", a + c);
} catch (err) {
  //err is error object
  console.log(err); //handling error
  //* The error object err contains information about the error, including its name (ReferenceError) and message (c is not defined).
} finally {
  console.log("this runs anyway");
}
console.log("a+b =", a + b);
console.log("a+b =", a + b);
