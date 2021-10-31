var http = require('http');

http.createServer(function(req,res){

    res.writeHead(200,{'Content-Type':'html/index'});
    res.end("hello there this my page nodejs");

}).listen(8080);