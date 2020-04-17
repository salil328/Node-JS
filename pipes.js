var fs = require('fs');
var http = require('http');
//var readstream = fs.createReadStream('test.txt','utf8');

//var writestream = fs.createWriteStream('test3.txt');
//readstream.pipe(writestream);
http.createServer(function(req,res){
    var readstream = fs.createReadStream('test.txt','utf8');   
readstream.pipe(res);
}).listen(3000);
console.log("server is running");