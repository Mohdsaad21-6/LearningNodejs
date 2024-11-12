const crypto = require("crypto");

console.log("hello duniya");
var a = 67;
var b = 53;




crypto.pbkdf2Sync("password", "salt ", 50000, 50, "sha512")
    console.log(" first key is generated");
;


setTimeout(()=>{
    console.log("I will be printed after 0 sec");
    

},0)
//password base key derivation function 2

crypto.pbkdf2("password", "salt ", 500000, 50, "sha512",(err,key) => {
  console.log("key is generated");
});
//it will block the main thread

function multiplyfn(a,b){
    const result=a*b;
    return result;
}


 var c=(multiplyfn(a,b));


 console.log(c);