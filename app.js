const http = require('http');

const express = require('express');
const bodyPaser = require('body-parser');

const app =express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const pageNotFound = require('./routes/404Page');

app.use(bodyPaser.urlencoded({extended:false}));

app.use('/admin',adminRoutes);
app.use(shopRoutes);;
app.use(pageNotFound);

const server = http.createServer(app);

app.listen(3000);
