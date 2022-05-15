const express = require('express');
const path = require('path');

const rootDir = require('../util/path');

const router = express.Router();

router.use((req, res, next)=>{
    res.sendFile(path.join(rootDir,"views","404Page.html"))
});


module.exports = router;