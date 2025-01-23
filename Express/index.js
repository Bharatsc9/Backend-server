var express = require("express");
var app = express();
var fs = require("fs")
var path = require("path")

var staticPath = path.join(__dirname,"public")

app.use(express.static(staticPath))

app.get("/",(req,res)=>{
    res.sendFile(path.join(staticPath,"index.html"))
})


// We can route to other pages aswell
// app.get("/about",(req,res)=>{
//     res.send("Welcome to about page")
// })

// app.get("/contact",(req,res)=>{
//     res.send("Welcome to contact page")
// })

app.listen(4000,()=>{
    console.log("Hiii")
})
