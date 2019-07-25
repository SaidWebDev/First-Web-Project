const http = require('http');

// create server object

http.createServer((req,res) => 
{
    res.write('hello Said! how is it going?');
    res.end();
}).listen(5050, console.log('Server running ...'));