// const { log } = require("async");

const { log } = require("console");
const fs =require("fs");
const https =require("https");


console.log("Hello World");
var a=2000;
var b=2345;


https.get('https://dummyjson.com/products/1',(res)=>{
    console.log("Fetched Data was Sucessfully");
    
});



setTimeout(()=>{
    console.log("Settime out called after 5 seconds");
    
},5000);

fs.readFile("./file.txt","utf8",(err,data)=>{
    console.log("file data was ",data);
    
})

function multiplyfn(a,b){
    const result=a+b;
    return result;
}


 var c=(multiplyfn(a,b));


 console.log(c);
 