const express = require('express');
const jwt = require("jsonwebtoken");
const path = require('path')
const publicPath = path.join(__dirname, 'public');

let app = express();
app.use(express.json());

app.use(express.static(__dirname + '/public'));

app.get('/',(req,res)=>{
    let token = jwt.sign(
        {
            ip_address: "0.0.0.0"
        },
        "home",
    );
     res.cookie("jwt", token)
     res.status(200).sendFile('index.html', { root : publicPath });
     
})

app.get('/home',(req,res)=>{
    let token = jwt.sign(
        {
            ip_address: "127.0.1.1"
        },
        "home",
    );
     res.cookie("jwt", token)
     res.status(200).sendFile('home.html', { root : publicPath });
     
})

app.listen(3000,()=>{
    console.log("Server is up");
})