const http=require("http");
const os=require("os"); // import

console.log("weberver starting...");

var handler=function(request, response){
    console.log("Received request from "+request.connection.remoteAddress);
    response.writeHead(200);
    response.end(`<h1>Cloud MSA Course :  ${os.hostname()} </h1>`);
};

var www = http.createServer(handler); // server 생성(준비) -> handler발생

www.listen(3000); // 3000번 포트로 항시 listen

