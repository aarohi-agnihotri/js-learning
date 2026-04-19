// * IIFE - Immediately Invoked Function Expression, a function that is called immediately as soon as it is defined   (we are not using it too much)

// * it's inherently used only once in its intended context. After the IIFE has executed, its scope is discarded, and it doesn't run again unless explicitly defined and invoked again.

// * syntax -  (function)();
// * function is keyword here ,we don't actually name it, inside first parenthesis u can write any type of function- arrow func, normal func, async function etc. another parenthesis is used to call itself


// another way for async-await
(async function(){
    console.log("fetching dataAsync 1....")
    await getData3(1);
    console.log("fetching dataAsync 2....")
    await getData3(2);
    console.log("fetching dataAsync 3....")
    await getData3(3);
    console.log("fetching dataAsync 4....")
    await getData3(4);
  })();
  
  // * Why IIFE is used ->
  // * IIFEs allow you to create a private scope for variables and functions. This helps in avoiding naming conflicts with variables and functions in the global scope, thereby reducing the risk of accidental overwrites. 
  
  // * in interview - we use iife for immediately invoked and to avoid name conflicts with variables and functions in global scope 
  
  // * IMPORTAnt -  don't forget to use semicolon in the end of function if we have to use more than one IIFE functions
  
  // * IIFE more examples- 
  
  // * unamed IIFE
  (function(){
    console.log("unamed iife example")
  })();
  
  // * named IIFE 
  (function chai(){
    console.log("Code aur chai")
  })();
  
  // * using arrow function
  (() => {
    console.log("code aur chai 2") 
  })();
  
  // * using arrow func with parameters and arguments
  ((name) => {
    console.log(`hello, ${name}`) 
  })('aarohi')