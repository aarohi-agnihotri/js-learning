//* reference, object            

// * A javaScript object is an entity having state and behavior (properties and method).

const student = {
  fullName: "Aarohi",
  marks: 90, // these 2 are properties/ states
  printMarks: function () // this is method/ behavior
  {
    console.log("marks = ", this.marks); // it means student.marks, we cannot access marks directly here
  },
};
// * why can't you directly access the property- Inside the printMarks method, if you try to access marks directly without this, JavaScript will look for a variable named marks in the local scope of the function. Since there is no such local variable, it won't find the marks property of the student object.

// on console-  student, student.fullname, student.printMarks, student.printMarks()

// * what is reference?
// a reference is when a variable points to the same object in memory rather than holding a copy of the object itself.
//* example =>
// If you have a book (an object), a reference is like having a library card that points to where the book is kept in the library. Multiple people (variables) can have a card pointing to the same book.
// If one person changes the content of the book, everyone else with a card pointing to that book will see the changes.

let car1 = { brand: "Toyota" }; // car1 points to the object in memory
let car2 = car1; // car2 points to the same object as car1

car2.brand = "Honda"; // Changing the object through car2

console.log(car1.brand); // Output: "Honda" (car1 sees the change too)
