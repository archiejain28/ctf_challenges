const express = require('express');
const app = express();
const path = require('path')

app.use(express.static(path.join(__dirname, 'public')));
var publicPath = path.join(__dirname, 'public');

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname, "/index.html"));
})

app.get('/1',(req,res)=>{
    res.sendFile(publicPath+ "/home.html");
})

app.post('/1',(req,res)=>{
    res.send('Here is your Flag ! = noob{G00d_hindi_Br0}')
})

app.listen(3000, ()=>{
    console.log("Server is up and running");
})