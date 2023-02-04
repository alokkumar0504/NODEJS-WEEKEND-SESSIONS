let fs=require('fs');

// fs.writeFile('weekendsession.txt','it will replace the old content',function(err,data){
//     console.log("FILE Is CREATED");
// })


// fs.appendFile('weekendsession.txt','\nThis is the new content for the weeekend file',function(){
//     console.log("FILE IS APPENDED");
// })


// fs.readFile('db.json','utf-8',(err,data)=>{
//     if(err){
//         throw err;
//     }
//     else{
//         console.log(data)
//     }    
// })


fs.unlink('db.json',(err)=>{
    if(err) {
        console.log('this is the error that happened-',err.message);
        throw err;
    }
    console .log('filedeleted')
})

