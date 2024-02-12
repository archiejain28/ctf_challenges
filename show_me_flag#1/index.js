const express = require('express');
const path = require('path')
const cookieParser = require('cookie-parser')

const publicPath = path.join(__dirname, 'public');

let app = express();
app.use(cookieParser());
app.use(express.json());

app.get('/',(req,res)=>{
    if(req.cookies['setted']==1){
        res.setHeader('content-type', 'text/plain');
        res.send("You rock it bro/Lady (Sorry already have Sister) :) Your Flag: noob{C00ki3_pa7h_manip}");
    }
    res.cookie("setted", "0",{maxAge:86400 * 1000})
    res.sendFile('index.html', { root : publicPath });
})


app.listen(3000,()=>{
    console.log("Server is up");
})