let fs = require("fs");
let files = ["../f1.txt" , "../f2.txt" , "../f3.txt"];

let i=0;
promise()
 function promise(){
    
    let pendingPromise  = fs.promises.readFile(files[i]);
    i++;
    pendingPromise.then(function (data) {
        console.log(data+"");
        if(i<files.length){
            promise();
        }
    });
    pendingPromise.catch(function (error) {
        console.log(error);
    });
 }