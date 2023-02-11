let http=require('http')
let fs=require('fs')

let port=9090
//combination of http and fs packages.
const server=http.createServer((req,res)=>{
    fs.readFile('db.json','utf-8',(err,data)=>{
        if(err){
            throw err
        }
        else{
            res.write(data);
            res.end();
        }
    })
})
