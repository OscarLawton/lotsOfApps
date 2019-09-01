var myHttp = require('http'),
    fileSystem = require('fs'), 
    pathModule = require('path'),
    hostIP = '127.0.0.1',
    portNo = '9000';

var mimesTypes = {
    ".html" : "text/html",
    ".css" : "text/css",
    ".js" : "text/javascript",
    ".gif" : "image/gif",
    ".jpg" : "image/jpeg",
    ".png" : "image/png"
}
var server = myHttp.createServer(function(req, res){
    var filePath = (req.url === '/') ? ('./calc.html') : ('.' + req.url);
    var contentMimeType = mimesTypes[pathModule.extname(filePath)];
    console.log("the path module ext name function returns: " + pathModule.extname(filePath))
    fileSystem.exists(filePath, function(file_exists){
        if(file_exists){

            /*fileSystem.readFile(filePath, function(error, content){
            if(error){
                res.writeHead(500);
                res.end();
            } 

            else {

                res.writeHead(200, {'Content-type' : contentMimeType})
                res.end(content, 'utf-8')
                }
            })*/
            
            res.writeHead(200, {'Content-Type': contentMimeType});
            var fileStream = fileSystem.createReadStream(filePath).pipe(res);

            fileStream.on('error', function(){
                res.writeHead(500);
                res.end();
            })
        }
        else {

            res.writeHead(404);
            res.end("Sorry we could not find the file you requested!");
            
        }
    })

}).listen(portNo, hostIP, function(){
    console.log('Server Running on http://' + hostIP + ':' + portNo);
})