const fs = require("fs");
// pomisified way mei files parallely
let f1KaPromise  = fs.promises.readFile("./f1.txt");
let f2KaPromise  = fs.promises.readFile("./f2.txt");
let f3KaPromise  = fs.promises.readFile("./f3.txt");

f1KaPromise.then(function (data) {
    console.log(data+"");
})
f1KaPromise.catch(function (error) {
    console.log(error);
})
f2KaPromise.then(function (data) {
    console.log(data+"");
})
f2KaPromise.catch(function (error) {
    console.log(error);
})
f3KaPromise.then(function (data) {
    console.log(data+"");
})
f3KaPromise.catch(function (error) {
    console.log(error);
})