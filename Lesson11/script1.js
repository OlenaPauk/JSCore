const os = require("os");
const path = require("path");
const http = require("http");

http.createServer(function (request, response) {
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.end(`<h1>System Information</h1><br> Current user name: 
    ${require("os").userInfo().username} <br> OS type: 
    ${os.platform()}<br> System work time:
    ${os.uptime() / 60} minutes <br> Current work directory:
     ${path.dirname(__filename)}<br> Server file name ${path.basename(__filename)}`);
}).listen(8000);
console.log('Server running at http://127.0.0.1:8000/');

