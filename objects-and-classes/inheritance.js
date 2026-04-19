// * INHERITANCE IN JAVASCRIPT -> it is passing down properties and methods from parent class to child class

/* class parent{
    --code--
}
class child extends parent{
    --Code--
} */

// * if child and parent have same methods, child's method will be used -> method overloading

class Person {
  constructor() {
    this.species = "homo sapiens";
  }
  eat() {
    console.log("Eat");
  }
  sleep() {
    console.log("Sleep");
  }
  work() {
    console.log("do nothing");
  }
}

class Engineer extends Person {
  work() {
    console.log("solve problems, build something");
  }
}
class Doctor extends Person {
  work() {
    console.log("treat patients");
  }
}

let e1 = new Engineer();
let d1 = new Doctor();

//* super keyword -> it is used to call the constructor of its parent class to access the parent's properties and methods
// * use super keyword to avoid errors --> Must call super constructor in derived class before accessing 'this' or returning from derived constructor

//* super(args)  -> calls parent's constructor
//* super.parentMethod(args)  -> calls parent's methods     ---> example-

class Fruits {
  // constructor(){
  //     console.log("enter super constructor");
  //     this.fav = "watermelon";
  // }
  constructor(fav2) {
    this.fav2 = fav2;
  }
  healthy() {
    console.log("healthy");
  }
}
class Summer extends Fruits {
  // constructor(sumfav){
  //     console.log("enter child constructor");
  //     super(); //to invoke parent class constructor
  //     this.sumfav = sumfav;
  //     console.log("exit child constructor");
  // }

  constructor(fav2) {
    super(fav2);
  }
  summer() {
    super.healthy(); //* to call parent's function, u cannot call without super keyword, otherwise it shows error
    // on console - sumObj2.summer()
    console.log("lichi, banana");
  }
}
// let fruit = new Fruits();
// let sumObj = new Summer("mango");
let sumObj2 = new Summer("custard apple");

// * PRACTICE QUESTIONS -
//* Qs. You are creating a website for your college. Create a class User with 2 properties, name & email. It also has a method called viewData() that allows user to view website data.

let Data = "some information ";
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
  viewData() {
    console.log("Data :", Data);
  }
}

let student1 = new User("aarohi", "aarohiagnihotri@gmail.com");
let student2 = new User("shristi", "shristisingh@gmail.com");

let teacher1 = new User("CB", "cb@gmail.com");

// * Qs. Create a new class called Admin which inherits from User. Add a new method called editData to Admin that allows it to edit website data.

class Admin extends User {
  constructor(name, email) {
    super(name, email);
  }
  editData() {
    Data = "some new information";
  }
}

let admin = new Admin("admin", "admin@gmail.com");
