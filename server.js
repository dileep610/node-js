//import express module
var express=require('express')


var app=express()
var port=5000;

app.get('/',(req,res)=>{
    res.send("<h1>Hello World</h1>")
})

app.get('/about',(req,res)=>{
    res.send('<h2>About Page</h2>')
})

app
app.listen(port,()=>{
    console.log('this page is running in port 5000');
});