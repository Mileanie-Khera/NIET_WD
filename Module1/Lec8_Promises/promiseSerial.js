const fs = require("fs");
// pomisified way mei files parallely
let f1KaPromise  = fs.promises.readFile("./f1.txt");



f1KaPromise.then(function (data) {
    console.log(data+"");
    let f2KaPromise  = fs.promises.readFile("./f2.txt");
    f2KaPromise.then(function (data) {
        console.log(data+"");
        let f3KaPromise  = fs.promises.readFile("./f3.txt");
        f3KaPromise.then(function (data) {
            console.log(data+"");
        })
    })
})
//Note=> this becomes callBack hell ..... but to get rid of this we studied promises
// so this is valid but causes callback hell we need another solution

//Promise hell => promise chaining

