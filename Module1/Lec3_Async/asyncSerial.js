let fs = require("fs");

fs.readFile("./f1.txt", function (err, data) {
  console.log(data + "");
  fs.readFile("./f2.txt", function (err, data) {
    console.log(data + "");
    fs.readFile("./f3.txt", function (err, data) {
      console.log(data + "");
    });
  });
});


// callback hell->f2 is called in callback of f1 and f3 is called in callback of f2 this is done so that 
//f1,f2,f3 are always executed in this serial order