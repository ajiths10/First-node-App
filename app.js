const http = require('http');

const express = require('express');
const bodyPaser = require('body-parser');

const app =express();

app.use(bodyPaser.urlencoded({extended:false}));

app.use('/addproduct',(req, res , next)=> {   
    res.send('<form action="/product" method="POST"><input type="text" name="title" placeholder="Product name"><br><input type="number" name="size" placeholder="size"><br><button type="submit">Add Product</button> </form>');
})

app.use('/product',(req, res , next)=> {
    console.log(req.body)
    res.redirect('/');
})

app.use('/',(req, res , next)=> {   
    res.send('<h1>Hello World Express!</h1>');
})

const server = http.createServer(app);

app.listen(3000);
