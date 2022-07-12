const express = require("express");
const path = require("path");
const app = express();
const fs= require("fs");
const port =80;
const pug = require("pug");


//express related
app.use("/static",express.static("static"));
app.use(express.urlencoded()); //important for backend


//pug related
app.set("view engine",pug);
app.set("views",path.join(__dirname,"views"));

//endpoints
app.get("/",(req,res)=>{
    res.status(200).render("index.pug");
})
app.post("/",(req,res)=>{
    console.log(req.body);
    if(req.body.name == "" || req.body.age == "" || req.body.gender == "" ||req.body.address == ""){
        const params2 = {"content":"Your credentials are invalid.","msg":"Enter valid data"};
        res.status(200).render("index.pug",params2);
    }
    else{
        const params = {"content":"Hi  "+req.body.name,"msg":"Form submitted successfully.."};
        res.status(200).render("index.pug",params);
        fs.writeFileSync(`${req.body.name}.txt`,JSON.stringify(req.body));
    }


})


//start server
app.listen(port,(req,res)=>{
    console.log("running");
})