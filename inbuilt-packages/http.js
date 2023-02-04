let http=require('http');

const server=http.createServer((request,response)=>{
    response.write('<h1>this is connection between the node js and the server</h1>')
    response.end();
})

server.listen(6754)