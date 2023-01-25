//console.log("hello");
//console.log("tanmay")

 //Node.Js Modules
//const fs = require("fs");
//const text = fs.readFileSync("name.txt", "utf-8"); // how to read the file using modules
//console.log("The content of the file is")// add sum another text
//console.log(text);
//const fs = require("fs");
//let = fs.readFileSync("name.txt", "utf-8");
//text = text.replace("hardwork", "time mangement");
//console.log(text);
//console.log("Creating a new file...");
//fs.writeFileSync("name2.txt", text);


// Synchronous or blocking
// - line by line execution

// Asynchronous or non-blocking
// - line by line execution not guaranteed
// - callbacks will fire
//const fs = require("fs");
//fs.readFile("tanmay.txt", "utf-8", (err, data)=>{
//    console.log(data);
//});
//console.log("This is a message");


// we will learn how to serve HTML files using NodeJs
//Backend is all about serving the files

const http =  require('http');
const fs = require('fs');

const fileContent = fs.readFileSync('website.html'); // we will write the line of code to read a file as follows-

//The final step is to make the server and serve the file. The code for the following is as follows-
const server = http.createServer((req, res)=>{
    res.writeHead(200, {'Content-type' : 'text/html'}); 
    res.end(fileContent)
})
//Till now we have made the server and now we will make this server listen on its port. 
//. Suppose we want to make it listen to port 80, so the code for this goes as follows-
    server.listen(80, '127.0.0.1', () => {  
        console.log("Listening on port 80");
});

