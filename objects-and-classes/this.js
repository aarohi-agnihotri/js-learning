// * THIS KEYWORD

// * In JavaScript, the "this" keyword refers to the current object that is being used or accessed. In the given code snippet, the "this" keyword is used to refer to the object on which the "setBrand" function is being called.

//*(see example in classes.js) The purpose of the "this.brand = brand;" line is to assign the value of the "brand" parameter to the "brand" property of the current object. By using "this.brand", we are accessing the "brand" property of the current object and assigning it the value of the "brand" parameter passed to the function.

//* Overall, the "this" keyword is used to access and modify properties or methods of the current object within a method or function. It allows for dynamic referencing of object properties and is commonly used in object-oriented programming in JavaScript.

const user = {
  username: "Aarohi",
  price: "999",

  welcomeMssg: function () {
    console.log(`${this.username}, welcome to website`);

    //* as 'this' is current context, so it returns all properties and methods of the current context 'user'
    console.log(this);
  },
};

user.welcomeMssg();
user.username = "John";
user.welcomeMssg();

console.log(this); //*on browser environment, if u log this on console, it returns window (global object) , this is ultimate parent of all objects, so ultimate its current context/object is window AND if u run this on terminal, which is node environment it returns nothing

function chai() {
  let username = "Jenny";
  console.log(this); // it returns {} on terminal and window on browser
  console.log(this.username); // it returns {} on terminal and window on browser
  // that means this works for only object's properties and values
}

function User(username, loginCount, isLoggedIn){
  this.username = username;
}