// *JavaScript does not support Function Overloading. The following shows function overloading −
function funcONE(x,y) {
    return console.log(x*y)
 }
 function funcONE(z) {
    return console.log(z);
 }

//*  The above will not show an error, but you won't get desired results. On calling,

//* prints 5, not 30
funcONE(5,6);

//* prints 5
funcONE(5);

// * JavaScript does not support function overloading natively. If we will add functions with the same name and different arguments, it considers the last defined function.