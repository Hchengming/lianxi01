var http=require('http');
var fs=require('fs');
http.createServer(function(req,res){
    switch (req.url){
        case '/01.html':fs.readFile('01.html','utf-8',function(err,data){
            if(err){
                console.log("写入失败");
                console.log(err)
            }else {
                res.writeHead(200,{'content-type':'text/html'})
                res.end(data)
            }
        });break;
        case '/02.html':fs.readFile('02.html','utf-8',function(err,data){
            if(err){
                console.log("写入失败");
                console.log(err)
            }else {
                res.writeHead(200,{'content-type':'text/html'})
                res.end(data)
            }
        });break;
        case '/03.html':fs.readFile('03.html','utf-8',function(err,data){
            if(err){
                console.log("写入失败");
                console.log(err)
            }else {
                res.writeHead(200,{'content-type':'text/html'})
                res.end(data)
            }
        });break;
        case '/a.jpg':fs.readFile('a.jpg',function(err,data){
            if(err){
                console.log("写入失败");
                console.log(err)
            }else {
                res.writeHead(200,{'content-type':'image/jpeg'})
                res.end(data)
            }
        });break;
        case '/02.js':fs.readFile('02.js','utf-8',function(err,data){
            if(err){
                console.log("写入失败");
                console.log(err)
            }else {
                res.writeHead(200,{'content-type':'text/javascropt;charset=utf8'});
                res.end(data)
            }
        });break;
        case '/03.css':fs.readFile('03.css','utf-8',function(err,data){
            if(err){
                console.log("写入失败");
                console.log(err)
            }else {
                res.writeHead(200,{'content-type':'text/css;charset=utf8'});
                res.end(data)
            }
        });break;
        default:res.end('404')

    }






}).listen(3000);