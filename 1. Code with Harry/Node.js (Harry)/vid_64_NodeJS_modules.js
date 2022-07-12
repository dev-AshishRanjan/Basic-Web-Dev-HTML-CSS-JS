const fs = require("fs");   //importing
const text=fs.readFileSync("text.txt","utf-8");  //reading only
console.log(text);
//modifing
let text2=fs.readFileSync("text.txt","utf-8");
text2=text2.replace("am","i");
console.log(text2);
//writing
fs.writeFileSync("rohan.txt",text2);

