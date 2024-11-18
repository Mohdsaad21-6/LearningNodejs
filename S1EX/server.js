// const http=require("node:http")

//both are same
// const http=require("http")

// console.log(http);

// const server=http.createServer()
// console.log(server);

// server.listen(7777);



const http=require("node:http");
const server=http.createServer((req,res)=>{

    if(req.url==="/getSecretData"){
        res.end("There is no secret data")
    }
    res.end("Hello World")
});
server.listen(7777);