const express = require("express");
const path = require("path");
const app = express();
const pug = require("pug");

const port=80;
app.set("view engine",pug);
app.set("views",path.join(__dirname,"views"));

app.get("/demo",(req,res)=>{
    res.status(200).render("demo.pug",{title:"harry",message:"Hello by harry"})
});

app.listen(port,()=>{
    console.log("listining");
})

