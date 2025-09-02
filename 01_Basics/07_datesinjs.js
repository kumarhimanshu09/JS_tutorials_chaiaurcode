// Dates

let myDate = new Date()
// console.log(typeof myDate);                  // Output :- "Object"

// console.log(myDate);                            // Output :- "2025-09-01T18:34:03.088Z"
// console.log(myDate.toString());                // Output :- "Tue Sep 02 2025 00:04:03 GMT+0530 (India Standard Time)"
// console.log(myDate.toDateString());            // Output :- "Tue Sep 02 2025"
// console.log(myDate.toLocaleString());          // Output :- "9/2/2025, 12:04:03 AM"
// console.log(myDate.toLocaleDateString());      // Output :- "9/2/2025"
// console.log(myDate.toISOString());            // Output :- "2025-09-01T18:36:09.449Z"

// There are many more we will look forward on these later.


// let myCreatedDate = new Date(2025, 0, 23)             // To get specific date
// console.log(myCreatedDate.toDateString());            // Output :- "Thu Jan 23 2025"

// let myCreatedDate = new Date(2025, 0, 23, 5, 3)      // Output :- "1/23/2025, 5:03:00 AM"
           
// let myCreatedDate = new Date("2025-01-14")   // yy/mm/dd syntax format            // Output :- "1/14/2025, 5:30:00 AM"
let myCreatedDate = new Date("01-14-2025")     // mm/dd/yy syntax format         // Output :- "1/14/2025, 12:00:00 AM"
// console.log(myCreatedDate.toLocaleString());        

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));      // will get output in seconds

let newDate = new Date()
console.log(newDate.getMonth() + 1);  // Adding 1 to get exact month no., month counting in js starts from 0
console.log(newDate.getDay());

console.log(newDate.toLocaleString('default', {
    weekday: "long",
    day: "2-digit"
}))
