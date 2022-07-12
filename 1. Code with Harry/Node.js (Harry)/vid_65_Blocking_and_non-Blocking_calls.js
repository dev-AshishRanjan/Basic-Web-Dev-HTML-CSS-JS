const fs = require("fs");
let text = fs.readFile("text.txt","utf-8",(err,data) => {
    console.log("read file is done");
    console.log("error:"+err+"\n"+"data : "+data);
});
console.log("outer msg");