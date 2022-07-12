const express = require("express");
const path = require("path");
const fs = require("fs");
const pug = require("pug");
const bodyParser = require("body-parser");

const app=express();
port=80;

//
//mongoose
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/contactDance');
}

//schema
const contactSchema = new mongoose.Schema({
    name: String,
    phone: String,
    email: String,
    address: String,
    desc: String
  });
const Contact = mongoose.model('Contact', contactSchema);

//express
app.use("/static",express.static("static"));
app.use(express.urlencoded());


//pug
app.set("views engine","pug");
app.set("views",path.join(__dirname,"views"));


//endpoints
app.get("/",(req,res)=>{
    const params={}
    res.status(200).render("home.pug",params);
});
app.get("/contact",(req,res)=>{
    const params={}
    res.status(200).render("contact.pug",params);
});
app.post("/contact",(req,res)=>{
    var myData = new Contact(req.body);
    myData.save().then(()=>{
        res.send("Response has been saved to database successfully.")
    }).catch(()=>{
        res.status(404).send("Item was not saved in database")
    });
    // res.status(200).render("contact.pug");
});

//server
app.listen(port,()=>{
    console.log("the server is running at 127.0.0.1:"+port);
})