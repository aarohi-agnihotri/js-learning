// *XMLHttpRequest is an object or API =>

// *XMLHttpRequest()  is a constructor function.

// *In JavaScript, a constructor function is used to create and initialize new objects. When you use new XMLHttpRequest(), you are calling the XMLHttpRequest constructor to create a new instance of the XMLHttpRequest object, which you can then use to make HTTP requests.

// *In summary:
// *XMLHttpRequest is a constructor function.
// * XMLHttpRequest() is the syntax used to create a new instance of that constructor.

const requestURL = "https://api.github.com/users/hitesh-choudhary"
const xhr = new XMLHttpRequest();

xhr.open('GET', requestURL)
// console.log(xhr.readyState);

//*onreadystatechange => It is an event handler which is used to continuously track the readyState of the XMLHttpRequest object as it changes.
xhr.onreadystatechange = () => {
    // logging the readState
    console.log(xhr.readyState)

    // detecting the state
    if(this.readyState === 4){
        // console.log(this.responseText)

        // most of the response comes from url is in form of string, so we have to convert it it into json.. otherwise how will access their properties
        // *JSON.parse() converts a JSON-formatted string into a JavaScript object.
        const data = JSON.parse(this.responseText) 
        console.log(typeof data) // object
        console.log(data.followers) 
    }
}
xhr.send();