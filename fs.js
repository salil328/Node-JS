// fs file system is used for i/o file system
 var fs = require('fs');
 var read = fs.readFileSync('test.txt','utf8');
 //console.log(read);
 fs.writeFileSync('test.txt','ds');
