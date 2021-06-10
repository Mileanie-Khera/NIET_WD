let fs = require("fs");

fs.readFile("./f1.txt", function (err, data) {
  console.log(data + "");
});

fs.readFile("./f2.txt", function (err, data) {
  console.log(data + "");
});

fs.readFile("./f3.txt", function (err, data) {
  console.log(data + "");
});
//output is always changed i.e. order of executiion of f1,f2,f3 are always changed