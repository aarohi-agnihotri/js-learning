//* DOM Manipulation, window and document object, dir() display, 
//* Accessing elements - selecting with id, class and tag, query selectors
// * Property  value - tagName, innerText, innerHTML, textContent
//* Attributes - getAttribute(attr), setAttribute(attr, value)
//* Style -  node.style
//* insert elements- let el = document.createElement("div") AND node.append, prepend, before and after
// * delete elements - node.remove()
//* classList() => className.classList.add("newClassName")

// * WINDOW Object
//* The window object represents an open window in a browser. It is browser's object (not JavaScript's) & is automatically created by browser.
//* It is a global object with lots of properties & methods.

//* When a webpage is loaded, the browsers creates a DOM (document object model) of the page.

console.log(document);  // display objects as element
console.dir(document); // display properties and methods of  special kind of objects, better one is this

//* ================ dir() ========================= 
// *display properties of an object in the console

// console.dir(window.document); 
// console.dir(document.body); 
// console.log(document.body); 
// console.dir(document.body.childNodes); 

// console.log(document.body.childNodes[1]); 
// console.dir(document.body.childNodes[1]); 

// document.body.style.background = "green"; 

//* ========== window object ========> document object (representation of HTML code)

//* if u write script tag in head, then script will load before body tag, so if u print console.dir(document.body);  output is "null" which means that document elements are no more accessible

//* Selecting with Id
console.dir(document.getElementById("firstHeading"));

// * Selecting with Class
const textClass = document.getElementsByClassName("text")
console.dir(textClass);
//*return HTML collections (similar to array, but exactly not)

// * and there is no looping related method for this, u can see in console
// * so we convert it into array element, using Array.from()

const convertedTextClass = Array.from(textClass)

//* now we access all array methods like map, filter etc.
convertedTextClass.forEach(function(id) {
    id.style.backgroundColor = "purple"
})

//console.dir(document.getElementById("Heading"));  
// if u search id which is unknown then it display "null"

// console.dir(document.getElementsByClassName("textUnknown"));  
// HTMLDocument(0)

// console.log(document.getElementsByClassName("textUnknown"));  
// HTMLDocument[] (empty HTML collection)

//* Selecting with tag
console.dir(document.getElementsByTagName("div"));

// * QUERY SELECTOR

let firstElement = document.querySelector("li"); //* querySelector() returns first element
console.dir(firstElement); //display first element

let allElements = document.querySelectorAll("li");  //* querySelectorAll() returns a nodeList
console.dir(allElements); //display all elements

// * for class - query selector
let oneClass = document.querySelector(".navOption");  
console.dir(oneClass); 

let allClass = document.querySelectorAll(".navOption");
console.dir(allClass); 

// * u cannot style all at once, u have to specify separately jis jis ko style deni h
// allClass.style.backgroundColor = "red";  
// throws error

allClass[1].style.backgroundColor = "red"; 
//about was coloured

// * using forEach
allClass.forEach(function(s) {
    s.style.fontSize = "2em"
})

//* for Id = query selector (querySelectorAll() doesn't make sense for id)
console.dir(document.querySelector("#navId")); 

// * for attribute (complex one)
let password = document.querySelector('input[type="password"]') 
password.style.backgroundColor = "yellow"

// * PROPERTIES
//* • tagName: returns tag for element nodes
//* • innerText: returns the text content of the element and all its children
//* • innerHTML: returns the plain text or HTML contents in the element
//* • textContent: returns textual content even for hidden elements

let ul = document.querySelector("ul");
console.dir(ul.innerHTML);
console.dir(ul.innerText);

let text = document.querySelector(".demo");
console.dir(text.innerText="change text");
console.dir(text.innerHTML="<i>change text</i>");
console.dir(text.tagName);

let hidden = document.querySelector("p");
console.dir(hidden.textContent);

// . Create a H2 heading element with text - "Hello JavaScript". Append "from Apna College students" to this text using JS.
let element = document.querySelector(".secondH2");
//my code-
// console.dir(element.innerText = "Hello JavaScript Apna College Students"); 

// video code-
element.innerText = element.innerText +  " Apna College Students";
console.dir(element.innerText);

// Qs. Create 3 divs with common class name "box". Access them & add some unique text to each of them.
let boxes = document.querySelectorAll(".box");
// console.dir(boxes[0].innerText = "box 1");
// console.dir(boxes[1].innerText = "box 2");
// console.dir(boxes[2].innerText = "box 3");

let idx = 1;
for (box of boxes) {
    console.dir(box.innerText = `box ${idx}`);
    idx++;
}

// * ATTRIBUTES
//*  getAttribute(attr)  -> to get the attribute value
//*  setAttribute(attr, value) -> to set the attribute val th

let h4 = document.querySelector("h4");
console.dir(h4.getAttribute("id"));
console.dir(h4.setAttribute("id" , "abc"));

//* Style =>  node.style  (it displays inline css style)
let node = document.querySelector("button");
console.dir(node.style);
node.style.backgroundColor="pink";
node.style.fontSize="20px";

// * INSERT ELEMENTS  =>  let el = document.createElement("div")
let insertEl = document.createElement("div");
insertEl.innerText = "this is an element";
console.log(insertEl);

// * node.append(el) => adds at the end of node (inside)
let  ulEl = document.querySelector("ul");
// ulEl.append(insertEl);

// * node.prepend(el) => adds at the start of node (inside)
// ulEl.prepend(insertEl);

// * node.before(el) => adds before the node (outside)
// ulEl.before(insertEl);

// * node.after(el) => adds after the node (outside
ulEl.after(insertEl);

//more example-
let newHeading = document.createElement("h1");
newHeading.innerText = "This is new heading";
document.querySelector("body").prepend(newHeading);

//* Delete Element => node.remove() -> removes the node
document.querySelector("h2").remove();

// Qs. Create a new button element. Give it a text "click me", background color of red & text color of white. Insert the button as the first element inside the body tag.

let newBtn = document.createElement("button");
newBtn.innerText = "click me";
newBtn.style.color="white"; //this is inline style means styles are directly add to element
newBtn.style.backgroundColor="red";
document.querySelector("body").prepend(newBtn);

// Qs. Create a <p> tag in html, give it a class & some styling. Now create a new class in CSS and try to append this class to the <p> element.
// Did you notice, how you overwrite the class name when you add a new one? Solve this problem using classList.
let para = document.querySelector(".para");
console.log(para.classList.add("newPara"));

// *ON CONSOLE-

//* document.getElementById("title")
// <h1 id=​"title" class=​"heading">​DOM learning Chai aur code​</h1>​

// *document.getElementById('title').id
// 'title'
//* document.getElementById('title').class
// undefined

// *document.getElementById('title').className
// 'heading'

// *document.getElementById('title').getAttribute('id')
// 'title'

// *document.getElementById('title').getAttribute('class')
// 'heading'

// *document.getElementById('title').setAttribute('class', 'test')
// undefined

// *document.getElementById('title').setAttribute('class', 'test', 'heading')
// undefined

// * const title = document.getElementById('title')
// undefined

// * title
//<h1 id=​"title" class=​"test">​DOM learning Chai aur code​</h1>​

// *STYLING -----------

// *title.style.backgroundColor = 'green'
// 'green'

// * title.style.padding= '15px'
// '15px'

// *title.style.borderRadius= '5px'
// '5px'

// * TEXT  ------------

//* title.innerText 
// 'DOM learning Chai aur code'

//* title.textContent
// 'DOM learning Chai aur code test code'

// *title.innerHTML
// 'DOM learning Chai aur code <span style="display: none;">test code</span>'

// * DIFF BTW ABOVE THREE ----
// * innerText - doesn't display hidden or invisible text
// * textContent - display text (even if it is hidden or invisible)
// * innerHTML - display html tags also

// * IN CASE OF QUERY SELECTOR ALL-----

// *const tempList = document.querySelectorAll(".unique")
// * tempList
// it returns nodeList (remember it is not an array)

// *to style nodelist elements jo ki 3 h , so u cannot style all at once, u have to specify separately jis jis ko style deni h

// * tempList.style.color = 'green' ----- it throws error
// * tempList[1].style.color = 'green' ----- it works

// * FOR EACH ----------
// tempList.forEach(function (l)  {
//     l.style.backgroundColor = 'green'
// })



