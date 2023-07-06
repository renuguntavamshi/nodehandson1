const data=require('./data.json');
const http=require('http');
const fs=require('fs');

const app = http.createServer((req,res)=>{
    
    if(req.url=='/home'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write("<h2>What is Node js</h2><p>Node js is used to run js outside the browser </p><p>It has lot of library/module present in it already </p><p>It is mainly used as backend </p><p>It is non-blocking I/O Model </p>");
        res.end();
    }
    else if(req.url=='/about'){
        res.writeHead(200,{'contenttype':"application/json"});
        res.end(JSON.stringify(data));
    }
    else {
        res.write("Page not found ");
        res.end();
    }
})
app.listen(4000,()=>{
    console.log("server listening on port 4000");
})