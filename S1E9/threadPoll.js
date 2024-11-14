// process.env.UV_THREADPOOL_SIZE = 5


// const fs = require("fs");
// const crypto = require("crypto")


// crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (err, key) => {
//     console.log("1-Crypto done");

// })
// crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (err, key) => {
//     console.log("2-Crypto done");

// })
// crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (err, key) => {
//     console.log("3-Crypto done");

// })
// crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (err, key) => {
//     console.log("4-Crypto done");

// })
// crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (err, key) => {
//     console.log("5-Crypto done");

// })


const crypto = require("crypto");

// This line won't have any effect if placed here
// process.env.UV_THREADPOOL_SIZE = 5;

console.log(`Current UV_THREADPOOL_SIZE: ${process.env.UV_THREADPOOL_SIZE}`);

// Execute multiple pbkdf2 calls
crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (err, key) => {
    console.log("1-Crypto done");
});
crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (err, key) => {
    console.log("2-Crypto done");
});
crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (err, key) => {
    console.log("3-Crypto done");
});
crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (err, key) => {
    console.log("4-Crypto done");
});
crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (err, key) => {
    console.log("5-Crypto done");
});