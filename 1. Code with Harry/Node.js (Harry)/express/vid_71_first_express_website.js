const express = require("express");
const app = express();

app.get("/",(req,res)=>{
    res.send("This is my first app");
});

app.listen(80,()=>{
    console.log("listining");
})