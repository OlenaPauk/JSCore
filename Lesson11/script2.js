const http = require("http");
const personalmodule= require("./personalmodule");
const os = require("os");
let userName = os.userInfo().username;

http.createServer(function (request, response) {
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.end(`Date of request: ${personalmodule.date} ${personalmodule.getMessage(userName)}`);
}).listen(8000);
console.log('Server running at http://127.0.0.1:8000/');