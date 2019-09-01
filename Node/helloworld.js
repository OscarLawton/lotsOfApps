var myHttp = require('http'),
    hostIP = '127.0.0.1',
    portNo = '9000';


var server = myHttp.createServer(function(req, res){
    res.writeHead(200, { 'Content-Type' : 'text/html'});
    res.end('<h1>The cheese grate is gone!</h1>');

}).listen(portNo, hostIP, function(){
    console.log('Server Running on http://' + hostIP + ':' + portNo);
})