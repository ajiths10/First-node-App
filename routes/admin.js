const path = require('path');
const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

router.get('/addproduct',(req, res , next)=> {   
    res.sendFile(path.join(rootDir,'views','add-product.html'))
})

router.post('/addproduct',(req, res , next)=> {
    console.log(req.body)
    res.redirect('/admin/addproduct');
})

module.exports = router