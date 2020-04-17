var http = require("http");
var foo = function(req,res){
res.end("hello");

}

http.createServer(foo).listen(3000);
console.log("thanks server is running")