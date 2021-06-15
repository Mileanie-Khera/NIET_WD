const fs = require("fs");


// file system => also gives promisified function
//B                 // A
let pendingPromise = fs.promises.readFile("./f1.txt");//if file name is incorrect then there will be a failure
console.log(pendingPromise);
// Promise<Pending>


// then ki cal mei jo function h uska name scb=> success call back function
pendingPromise.then(function(data) {
    console.log("Inside scb");
})


// catch ki call mei jo function h uska name fcb=> failure call back function
pendingPromise.catch(function(data) {
    console.log("Inside fcb");
})