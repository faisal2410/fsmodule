const fs = require('fs');
const http = require('http');

const server=http.createServer(function(req, res) {

    // File write asyncronously
    if(req.url==="/write"){
        fs.writeFile('demo.txt',"Welcome to Node js",(err)=>{
            if(err){
                res.writeHead(200,{'Content-Type':'text/html'});
                res.write("File Write Fail")
                res.end()
            }else{
                res.writeHead(200,{'Content-Type':'text/html'});
                res.write("File Write Success")
                res.end()
            }

        })
    }
    // Write file synchronously

    if(req.url==="/writefilesync"){
       let err= fs.writeFileSync("demosync.txt","Welcome to mern stack development")
       if(err){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write("File Write Fail")
        res.end()
    }else{
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write("File Write Success")
        res.end()
    }
    }
    // File rename asyncronously

    if(req.url==="/filerename"){
        fs.rename("demo.txt","newdemo.txt",(err)=>{
            if(err){
                res.writeHead(200,{'Content-Type':'text/html'});
                res.write("File rename Fail")
                res.end()
            }else{
                res.writeHead(200,{'Content-Type':'text/html'});
                res.write("File rename Success")
                res.end()
            }
        })
    }
    // rename file synchronously
    // Renames the file from oldPath to newPath. Returns undefined.
    if(req.url==="/filerenamesync"){
       const err= fs.renameSync("demo.txt","newdemo.txt")
            if(err){
                res.writeHead(200,{'Content-Type':'text/html'});
                res.write("File rename Fail")
                res.end()
            }else{
                res.writeHead(200,{'Content-Type':'text/html'});
                res.write("File rename Success")
                res.end()
            }
        
    }
    // Delete file asynchrounsly
    if(req.url==="/deletefile"){
        fs.unlink("newdemo.txt",(err)=>{
            if(err){
                res.writeHead(200,{'Content-Type':'text/html'});
                res.write("File delete Fail")
                res.end()
            }else{
                res.writeHead(200,{'Content-Type':'text/html'});
                res.write("File delete Success")
                res.end()
            }

        })
    }

    // Delete file synchronously
    // Returns undefined.
    if(req.url==="/deletefilesync"){
      const err=  fs.unlinkSync("demo.txt");
      if(err){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write("File delete Fail")
        res.end()
    }else{
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write("File delete Success")
        res.end()
    }
    }


    // Read file
    // if(req.url="/"){
        // Read file async
    //     // fs.readFile("home.html",function(err,data){
    //     //     res.writeHead(200,{'Content-Type':'text/html'});
    //     //     res.write(data)
    //     //     res.end()
    //     // })
    // read file sync
    //  const myData=   fs.readFileSync("home.html");
    //  res.writeHead(200,{'Content-Type':'text/html'});
    //      res.write(myData)
    //      res.end()
    // }
})

server.listen(8000);
console.log("Server run successfully")