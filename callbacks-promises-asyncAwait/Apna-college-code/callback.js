// * Callbacks -> it is a function passed as an argument to another function

//* callback synchronous example -
function sum(a, b) {
    // console.log(a + b);
  }
  
  function calculator(a, b, sumCallback) {
    sumCallback(a, b);
  }
  
  // calculator(1, 2, sum);
  calculator(1, 2, (a, b) => {
    // console.log(a + b);
  });
  
  //* callback asynchronous example -
  const hello = () => {
    // console.log("Hello java script");
  };
  
  setTimeout(hello, 3000); // hello() is callback func and setTimeout() is higher-order function
  
  // * Callback Hell: Nested callbacks stacked below one another forming a pyramid structure. (Pyramid of Doom)
  // *  This style of programming becomes difficult to understand & manage.      example ->
  function getData(dataId, getNextData) {
    setTimeout(() => {
      console.log("data", dataId);
      //
      if (getNextData) {
        getNextData();
      }
    }, 2000);
  }
  
  // calling-
  //* getData(1, getData(2));
  //passing function with parentheses is execution then getData(2) executes first, then getData(1, getData(2)), as it doesn't work what (nesting of callbacks) we want , so we use arrow function in 2nd argument as it doesn't executes immediately and call getData(2) in this, see below
  
  //* callback hell
  getData(1, () => {
    console.log("getting data 2....");
    getData(2, () => {
      console.log("getting data 3....");
      getData(3, () => {
        console.log("getting data 4....");
        getData(4);
      });
    });
  });

