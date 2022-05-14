const http = require('http');

const express = require('express');

const app =express();

app.use((req, res , next)=> {
    console.log('Hello world App');
    next(); //next allow request to countiue to the next middleware 
})
app.use((req, res , next)=> {
    console.log('Another Hello world App');   
    res.send('<h1>Hello World Express!</h1>');
})

const server = http.createServer(app);

server.listen(3000);
