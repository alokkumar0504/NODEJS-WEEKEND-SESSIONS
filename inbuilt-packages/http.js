let http=require('http');

const server=http.createServer((request,response)=>{
    response.write('<h1>i m from bam digapahandi but currently m stying in hyd djkhf ud</h1>')
    response.end();
})

server.listen(6123) 