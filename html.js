var fs = require('fs');
var http = require('http');

http.createServer(function(req,res){
   // var readstream = fs.createReadStream('hello.html','utf8');
//readstream.pipe(res);
var json = {
    name : 'asd',
    surname : 'wew',
    age : 24
};
   res.end(JSON.stringify(json)); 
}).listen(3000);
console.log("server is running");