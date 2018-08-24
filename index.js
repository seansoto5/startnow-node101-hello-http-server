 var http = require("http");

http.createServer (function (request, response) {
    response.writeHead(200, {"content-type":"text/plain"});
    console.log(request.url)
    response.end("Hello World");
})
.listen(8080, "127.0.0.1");
console.log("Server running at http://127.0.0.1:8080/");