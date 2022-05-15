const path = require('path');
const express = require('express');

const router = express.Router();

router.get('/addproduct',(req, res , next)=> {   
    res.sendFile(path.join(__dirname, '../','views','add-product.html'))
})

router.post('/addproduct',(req, res , next)=> {
    console.log(req.body)
    res.redirect('/');
})

module.exports = router