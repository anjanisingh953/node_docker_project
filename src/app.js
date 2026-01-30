require('dotenv').config({path:'./config.env'})
const express = require('express');
const app = express();


app.get('/',(req,res)=>{
    res.status(200).json({result:'This is index page.'})
})

app.get('/test',(req,res)=>{
    res.status(200).json({result:'This is testing routes'})
})



module.exports=app;
