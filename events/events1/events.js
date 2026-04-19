// * The change in the state of an object is known as an Event
// * Events are fired to notify code of "interesting changes" that may affect code execution.
// * => Mouse events (click, double click etc.)
// * => Keyboard events (keypress, keyup, keydown)
// * => Form events (submit etc.)
// * => Print event & many more

let btn = document.querySelector("#btn");

btn.onclick = () => {
  console.log("button was clicked");
  let a = 25;
  a++;
  console.log(a);
};

let box = document.querySelector("div");
box.onmouseover = () => {
  console.log("u are inside a box");
};

// * JS event handle has priority over inline event handler

// * Event Object
/*  It is a special object that has details about the event.
All event handlers have access to the Event Object's properties and methods.
node.event = (e) => {
handle here
}
e.target, e.type, e.clientX, e.clientY */
let btn2 = document.querySelector("#btn-2");

// "e" is event's object, u can give any name other than "e"
btn2.onclick = (evt) => {
  console.log(evt);
  console.log(evt.type);
  console.log(evt.target);
  console.log(evt.clientX, evt.clientY);
};

let box2 = document.querySelector(".box2");
box2.onmouseover = (evt) => {
  console.log(evt);
  console.log(evt.type);
  console.log(evt.target);
  console.log(evt.clientX, evt.clientY);
};

//* Event Listeners     (node is HTML element)
//* node.addEventListener(event, callback)
//* node.removeEventListener(event, callback)
// *Note: the callback reference should be same to remove

// * Drawback -> inline event handling has bulkiness in html code
// * Drawback -> JS event handling has that we can handle only one function at one time
// * that's why event listeners are here

//* benefit of event listener ->  ability to add multiple event handlers to a node.

//function is event handler
let btn3 = document.querySelector("#btn-3");
btn3.addEventListener("click", () => {
  console.log("button3 clicked");
});
btn3.addEventListener("click", () => {
  console.log("button3 clicked - handler2");
});

// passing object "evt"
btn3.addEventListener("click", (evt) => {
  console.log(evt);
  console.log(evt.type);
});

// remove func example
let btn4 = document.querySelector("#btn4");
btn4.addEventListener("click", () => {
  console.log("btn4 clicked - handler1");
});

const handler2 = () => {
  console.log("btn4 clicked - handler2");
};
btn4.addEventListener("click", handler2);
btn4.addEventListener("click", () => {
  console.log("btn4 clicked - handler3");
});

btn4.removeEventListener("click", handler2);

// Qs. Create a toggle button that changes the screen to dark-mode when clicked & light-mode when clicked again.
let mode = document.querySelector("#mode");
let currentMode = "light-mode";
mode.addEventListener("click", () => {
  if (currentMode === "light-mode") {
    mode.innerText = "dark-mode";
    document.querySelector("body").style.backgroundColor = "black";

    currentMode = "dark-mode";
  } else {
    currentMode = "light-mode";
    mode.innerText = "light-mode";
    document.querySelector("body").style.backgroundColor = "white";
  }
});
