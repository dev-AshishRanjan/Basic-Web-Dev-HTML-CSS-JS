const express = require("express");
const path = require("path");
const app = express();
const fs= require("fs");
const port =80;
const pug = require("pug")

//express related
app.use("/static",express.static("static"));


//pug related
app.set("view engine",pug);
app.set("views",path.join(__dirname,"views"));

//endpoints
app.get("/",(req,res)=>{
    const con="Tis is lauda";
    const params={
        "title":"pubg",
        "content":con,
    }
    res.status(200).render("demo1.pug",params);
})


//start server
app.listen(port,(req,res)=>{
    console.log("running");
})