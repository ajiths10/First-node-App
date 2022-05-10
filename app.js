const http = require('http');
const fs =require('fs');
const { url } = require('inspector');

const server = http.createServer((req , res)=>{
    console.log(req.url , req.method);
    const method = req.method;
    const url = req.url;
    //process.exit();

        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>My First Page</title></head>');
        if(url=='/Home'){
        res.write('<body><h1> Welcome home</h1><body>');
        }
        if(url=='/about'){
        res.write('<body><h1>Welcome to About Us page</h1><body>');
        }
        if(url=='/node'){
        res.write('<body><h1>Welcome to my Node Js project</h1><body>');
        }
        if(url=='/'){
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"></input><button type=submit>Submit</button></form><body>');
        }
        if(url === '/message' && method === 'POST'){
            fs.writeFileSync('message.txt','Dummy')
            res.statusCode = 302;
            res.setHeader('Location' ,'/')
            return res.end();
        }
        res.write('</html>');
    res.end();
});

server.listen(3000);