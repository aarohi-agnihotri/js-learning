// * avoid to use .onClick because of less features and not having event propagation

// document.getElementById('owl').onclick = function(){
//     alert("owl clicked")
// }

// * better to use .addEventListener for more features and having event propagation

//* e is event object
document.getElementById("owl").addEventListener("click", function (e) {
    // alert("owl clicked again")
    console.log(e)
});

// * PROPERTIES AND METHODS OF event object
// * type, timestamp, defaultPrevented, 
// *target, toElement, srcElement, currentTarget
// * clientX, clientY, screenX, screenY
// * altkey, ctrlkey, shiftkey, keyCode


// *Event propagation -> It is a concept in web development that describes the way events travel through the Document Object Model (DOM) in a web page when they are triggered. When an event occurs (such as a click, keypress, or mouseover), it doesn't just affect a single element—it can propagate through multiple elements. 

// * Three main phases =>
// * event target
// * event bubbling (default) 
// *event capturing 

// * event target -> This phase is when the event reaches the target element—the actual element that triggered the event. Event listeners set on the target element will execute during this phase.

document.querySelector('.btn').addEventListener('click', function() {
    console.log('Event Target Phase - Button');
}, false);
// it's ur choice to set false value or not, both works same 

// *event bubbling -> After reaching the target element, the event then bubbles back up from the target element to the root of the DOM tree. During this phase, event listeners that are not set to capture (the default behavior) will be triggered.

document.getElementById("images").addEventListener("click", function (e) {
    // console.log("clicked inside the ul")
}, false);

document.getElementById("owl").addEventListener("click", function (e) {
    // console.log("owl clicked")
}, false);

// Output -
// owl clicked
// clicked inside the url

// * event capturing - The event starts from the top of the DOM tree and moves down towards the target element. During this phase, the event listeners that are set to capture (using { capture: true } as the third parameter in addEventListener) will be triggered.

document.getElementById("images").addEventListener("click", function (e) {
    console.log("clicked inside the ul")
}, true);

document.getElementById("owl").addEventListener("click", function (e) {
    console.log("owl clicked")
}, true);

// Output -
// clicked inside the url
// owl clicked

// * Now it's depend upon ur use case- which is important bubbling or capturing

// *stopPropagation() - is used to stop the event from propagating further up (bubbling) or down (capturing) the DOM tree.

// * when to use? - 
// *Prevent Multiple Handlers: If clicking on an element should only trigger its own handler and not handlers on parent elements.
//* Control Event Handling: When you want to manage events at a specific element level without affecting other elements.

document.getElementById('parent').addEventListener('click', function() {
    console.log('Parent Div Clicked');
});

document.getElementById('child').addEventListener('click', function(e) {
    e.stopPropagation(); // Stops the event from bubbling up
    console.log('Button Clicked');
});

// Output-
//  button clicked


// * preventDefault() -> it is used to prevent the default behavior of an event.

// *when to use ->
// *When to Use preventDefault():
// Form Submission: If you want to handle form data using JavaScript without actually submitting the form to the server.
// Link Navigation: To prevent a link from navigating to another page and instead execute JavaScript code.
// Other Default Behaviors: Any situation where you need to override or cancel the default behavior of an event.

document.querySelector("#google").addEventListener("click", (e) => {
    console.log("Google link was clicked")
    e.preventDefault();
})

// * SMALL PROJECT - On clicking a image, image disappears

// here parentNode is used to target li which is parent of img, if we remove only img then list-style(dotted) will still left, so we write like this
document.querySelector("#images").addEventListener("click", (e) => {
    if(e.target.tagName === "IMG"){
        let removeIt = e.target.parentNode
        removeIt.remove()
    }
}, false)