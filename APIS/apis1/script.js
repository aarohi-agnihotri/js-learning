// * APIs = jb apko apna kaam kisi aur ke sir pr daal dena hota h
// * Example -> a waiter (in restaurant) is API and a menu card is API's documentation
// * those values in API are comes in form of JSON, before was in XML

//* JSON format - key and value pair, both are in string type
// {
//   "name": "Aarohi",
//   "city": "Lucknow"
// }

// * Sometimes, APIs are in array format
// [
//   {},
//   {},
//   {},
// ]

// *SOME APIS =>

// * to access API of github user
// * api.github.com/users/aarohi-agnihotri

// * randomuser.me

// * WEBSITE => JSON formatter is a tool to understand data of APIs, (search out)

// * ABOUT Fetch API and fetch() method-

// * The Fetch API is a modern JavaScript interface that provides a way to fetch resources (such as data) asynchronously across the network. It allows developers to make HTTP requests to servers and receive responses without having to reload the entire page. The Fetch API uses the `fetch()` method to send and receive data, and it returns a Promise that resolves to the Response to that request. Developers can use the Fetch API to interact with APIs, retrieve data, and update the content of a web page dynamically.

// *an interface refers to a set of rules and protocols that define how software components or systems can interact with each other. It specifies the methods, properties, and behaviors that are available for use by other software components. It serves as a contract that outlines how different parts of a system can communicate and work together. In the case of the Fetch API, the interface defines how developers can make requests to servers, handle responses, and work with data asynchronously in JavaScript.

// * The fetch API provides an interface for fetching (sending/ receiving) resources.
// * It uses Request and Response objects.
//* The fetch() method is used to fetch a resource(data)

const facts = document.querySelector("#facts");
const btn = document.querySelector("#btn");


const URL = "https://cat-fact.herokuapp.com/facts";

// * syntax- let promise = fetch(url, [options]);
let promise = fetch(URL);
console.log(promise); //on console- promise was pending, but when data is received, promise-state becomes fulfilled

// * getting result from promise using async-await
// const getFacts = async () => {
//   console.log("getting Data......");
//   let response =await fetch(URL);

//* JSON (js object notation) format ------ there is no reload of page, and final data(this line) takes a slight delay to display
//   console.log(response); 

//   console.log(response.status) ; //response is an object based on prototype we can also logged other values
//   let data = await response.json();  //returns second promise  (usable data)
//   console.log(data); 
//   console.log(data[0]); 
//    console.log(data[0].text); 
//   facts.innerText = data[3].text;
// };

// * getting result from promise using promise chain
function getFacts() {
    fetch(URL).then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
  facts.innerText = data[3].text;
    })
}

btn.addEventListener("click", getFacts);

// * interviews question
// * When making a request using fetch() and getting a 404 error, does it resolve or reject?

// *Answer: It resolves. The promise returned by fetch() will resolve when a 404 error is returned from the server. However, it is up to the developer to handle the 404 status by checking response.ok or response.status and then throwing an error if needed. The promise would reject only if there is a network error (like if the user is offline, DNS issues, or the server is unreachable), not an HTTP error status (such as 404 or 500).

// * if we use fetch method and we don't send any options to it, then it creates a request of particular type and that request is GET request
//* in terms of network request, jo bhi internet pr request bhej rhe hote h, there are diff types of request- get, delete, put etc, the request that job is to bring data or to return/receive data from server/api, that is called GET request.

// * How did network requests( like we just said Send request to your API) go before? the data used to come in form of XMl, when we send request to server/api, now data comes in format of JSON

// * the maximum API that return data in the form of JSON, that's  called AJAX (asynchronous JS & JSON )

// * Process of calling API  - 
// * as soon as we send request to server/api, we get some response in form of JSON, we have to convert it into js object
// * 1) response (json)         2) JS object

// * json() method : (asynchronous method) returns a second promise (first promise is already returned during response) that resolves with the result of parsing the response body text as JSON. (Input is JSON, output is JS object)

// * Request and Response

// * HTTP VERBS - HYPERTEXT TRANSFER PROTOCOL VERBS

//* also called http methods, define action to be perform on given url(example), these verbs are used to interact with  web servers through  http request

// *GET: Used to retrieve data from a server. For example, when you visit a webpage, your browser sends a GET request to fetch the content of the page.

// *POST: Used to send data to a server to create a new resource. For example, when you submit a form on a website, the form data is sent to the server using a POST request.

// *PUT: Used to update an existing resource with new data. For example, you might use a PUT request to update user information in a database.

// *DELETE: Used to delete a specified resource from the server. For example, you might use a DELETE request to remove a user account from a system.

// *PATCH: Used to apply partial modifications to a resource. For example, you might use a PATCH request to update only one field of a user profile, such as their email address.

// * HTTP RESPONSE STATUS CODE- 
// * standardized codes returned by the server to indicate the result of a client's request. 
// *it indicates whether a specific HTTP request has been successfully completed. These are grouped in five classes:
/*
   Informational response (100 - 199)
   Successful response (200 -299)
   Redirection messages (300 - 399)
   Client error responses (400 - 499)
   Server error responses (500 -599)
*/

// * HTTP response headers also contain details about the responses, such as content type, HTTP status code etc.