const express = require('express');

const router = express.Router();

router.get('/addproduct',(req, res , next)=> {   
    res.send('<form action="/admin/addproduct" method="POST"><input type="text" name="title" placeholder="Product name"><br><input type="number" name="size" placeholder="size"><br><button type="submit">Add Product</button> </form>');
})

router.post('/addproduct',(req, res , next)=> {
    console.log(req.body)
    res.redirect('/');
})

module.exports = router