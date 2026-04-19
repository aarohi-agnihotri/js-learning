// *Properties => firstElementChild, lastElementChild, parentElement. nextElementSibling. parent.childNodes, 
// *creating new element with some properties and to make it appear on page
// * avoid using innerHTML 
// * edit or remove element 

const parent = document.querySelector(".parent");
// console.log(parent)

// console.log(parent.children)
// it returns html collection

// console.log(parent.children[1].innerHTML)

for (let i = 0; i < parent.children.length; i++) {
  console.log(parent.children[i].innerHTML);
}

parent.children[1].style.color = "yellow";

//  Accessing first and last element of class parent-
console.log(parent.firstElementChild);
console.log(parent.lastElementChild);

const dayOne = document.querySelector(".day");
console.log(dayOne);

// accessing parent element and sibling element
console.log(dayOne.parentElement);
console.log(dayOne.nextElementSibling);

console.log("NODES: ", parent.childNodes);
//NODES:  NodeList(9) [text, div.day, text, div.day, text, div.day, text, div.day, text]

// * =========== Creating new element with some properties =========
const div = document.createElement("div");
console.log(div);
div.className = "main";

// div.id = "logo"
div.id = Math.round(Math.random() * 10 + 1);

div.setAttribute("title", "generated title");

// *setting style
div.style.backgroundColor = "green";
div.style.padding = "12px";

// this div till now isn't appear on the page because it was created on memory

//* =========== to make it appear on page ===========

//* this prefer less because it overwrites the value
// div.innerText = "today is thursday"

//* this prefer more -----
const addText = document.createTextNode("today is thursday");
div.appendChild(addText);
document.body.appendChild(div);

// * Adding list items 

function addLang(langName){
    const li = document.createElement('li')
    li.innerHTML = `${langName}`
    document.querySelector('.language').appendChild(li)
}
addLang("python")
addLang("java")

// * reparsing is when the browser reads and processes HTML again to update the dom structure of the page.

// *Using innerHTML can be less efficient because it makes the browser reparse and rebuild part of the DOM tree, which can slow things down, especially with frequent updates.
// * not optimized for larger projects, on small scale u can use this

// *For better performance:

//* Use textContent to safely update just the text.
//* Use appendChild to add new elements without affecting the rest of the DOM.
//* Use insertAdjacentHTML to insert HTML without replacing existing content.
//* These methods reduce unnecessary work for the browser, making your code faster and more efficient.

//*other methods that like innerHTML are outerHTML, innerText, insertAdjacentHTML, replaceChildren, document.write()

// *OPTIMIZED WAY TO WRITE ->

function addOptiLang(langName){
    const li = document.createElement('li')
    li.appendChild(document.createTextNode(langName))
    document.querySelector('.language').appendChild(li)
}
addOptiLang("goLang")

// *EDIT VALUE -  we did it in 3 ways - innerHTML, replaceWith, outerHTMl

// * selecting 2nd li element
const secondLang = document.querySelector("li:nth-child(2)")
// secondLang.innerHTML = "C++"

const newLi = document.createElement("li")
newLi.textContent = "Mojo"
secondLang.replaceWith(newLi)

// *edit -2nd example
 const firstLang = document.querySelector("li:first-child");
 firstLang.outerHTML = "<li>typescript</li>"

//  * remove 
const lastLang = document.querySelector("li:last-child")
lastLang.remove()
