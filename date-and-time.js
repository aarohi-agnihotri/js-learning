// * represents a single moment in time

// * METHODS
let myDate = new Date()

// 2024-08-05T09:26:19.724Z
console.log(myDate);


// Mon Aug 05 2024 14:56:19 GMT+0530 (India Standard Time)
console.log(myDate.toString());

// 14:56:19 GMT+0530 (India Standard Time)
console.log(myDate.toTimeString());

// Mon, 05 Aug 2024 09:26:19 GMT
console.log(myDate.toUTCString());

// Mon Aug 05 2024
console.log(myDate.toDateString());

// 2024-08-05T09:26:19.724Z
console.log(myDate.toISOString());

// 2024-08-05T09:26:19.724Z
console.log(myDate.toJSON());

// 8/5/2024, 2:56:19 PM
console.log(myDate.toLocaleString());

// 8/5/2024
console.log(myDate.toLocaleDateString());

// 2:56:19 PM
console.log(myDate.toLocaleTimeString()); 

console.log(typeof myDate)

//* U CAN ALSO DECLARE URSELF
let myCreateDate = new Date(2023, 0, 23);  // 0-11 -> Months
console.log(myCreateDate.toDateString())  // Mon Jan 23 2023

let myCreateDate2 = new Date(2023, 0, 23, 5, 3);  
console.log(myCreateDate2.toLocaleString())  // 1/23/2023, 5:03:00 AM

// * in india, mostly preference to dd-mm-yyyy
let myCreateDate3 = new Date("2023-01-14")  // yyyy-mm-dd, month -> 1-12
console.log(myCreateDate3.toLocaleString())  // 1/14/2023, 5:30:00 AM

// * TIMESTAMP
let myTimestamp = Date.now();
console.log(myTimestamp)  // 1722951216726  =>  this is milliseconds from 01-01-1970 till now

console.log(myCreateDate.getTime())  // milliseconds from 01-01-1970 to 23-01-2023

// * In Seconds
console.log(Math.floor(Date.now()/1000))  //1722951969,  use floor not ceil

// * To know only month, year, date and many more ....
let newDate =  new Date();
console.log(newDate.getDay())  // it returns day only (in number)  ... aise hi or bhi methods hote h


// * MORE ABOUT LocaleString =======>
// * inside LocaleString u can define objects and various parameters. When you call this method with options, you can customize the output format

//* Locale:
// A locale is a way to format dates, numbers, and text to match a specific region's style, like using en-US for American English or fr-FR for French in France. It helps software display information correctly for different countries.
//  Specify a BCP 47 language tag to determine the language and region formatting. Examples: default, 'en-US', 'fr-FR', 'de-DE', etc.
newDate.toLocaleString('en-US', {
    //  ctrl + space (properties will be shown)
    year: "numeric",
    month: "long",
    day: "2-digit",
    weekday: "long", // Sunday, Monday
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
    timeZone: "America/New_York",
    timeZoneName: "short"
});

console.log(newDate);
// Output: "Tuesday, August 06, 2024, 09:45:30 AM EDT" (example output)