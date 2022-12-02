let express = require('express');
//let port = 3000;
let path = require('path');
let app = express();

app.listen(3000);

let connectdb = require('./connectdb');
connectdb();

//  let saveDoc = require("./model")
// saveDoc()

app.use(express.static(path.join(__dirname , "public")))

app.get('/' , (req, res) =>{
    res.sendFile(path.join(__dirname, "public/html/index.html"));
})
app.get('/page2.html' , (req, res) =>{
    res.sendFile(path.join(__dirname, "public/html/page2.html"));
})
app.get('/News.html' , (req, res) =>{
    res.sendFile(path.join(__dirname, "public/html/News.html"));
})
app.get('/contact.html' , (req, res) =>{
    res.sendFile(path.join(__dirname, "public/html/contact.html"));
})
app.get('/signup.html' , (req, res) =>{
    res.sendFile(path.join(__dirname, "public/html/signup.html"));
})
app.get('/login.html' , (req, res) =>{
    res.sendFile(path.join(__dirname, "public/html/login.html"));
})

app.get('/about.html' , (req, res) =>{
    res.sendFile(path.join(__dirname, "public/html/about.html"));
})
app.get("*" , (req,res) =>{
    res.send("<h1>404 Error</h4>")
})

