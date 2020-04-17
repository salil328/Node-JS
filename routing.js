var fs = require('fs');
var http = require('http');

http.createServer(function(req,res){

    var Url = req.url;
    console.log(Url);
if(Url ==='/about') {
    var readstream = fs.createReadStream('about.html','utf8');
    readstream.pipe(res)
   
 } else if(Url ==='/contact') {
    var readstream = fs.createReadStream('contact.html','utf8');
    readstream.pipe(res) 
    
 } else {
    var readstream = fs.createReadStream('hello.html','utf8');
    readstream.pipe(res);
  
 }
}).listen(3000);
console.log("server is running")
