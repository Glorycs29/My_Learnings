# File System Module:

### Node.js
 Node.js is a JavaScript runtime built on Chrome’s V8 JavaScript engine. Node.js helps developers to write JavaScript code to run on the server-side, generate dynamic content, and deliver to web clients. The two features that make Node.js stand out are:

- Event-driven
- Non-blocking I/O model
### What is the fs module?
About Node.js file system: To handle file operations like creating, reading, deleting, etc., Node.js provides an inbuilt module called FS (File System). Node.js gives the functionality of file I/O by providing wrappers around the standard POSIX functions. All file system operations can have synchronous and asynchronous forms depending on user requirements. To use this File System module, use the require() method:

<code>var fs = require('fs');</code>

##### Common uses for File System module:

- Read Files
- Write Files
- Append Files
- Close Files
- Delete Files

#
### 🤔  What is the Synchronous and the Asynchronous approach?

- Synchronous approach:
   They are called blocking functions as it waits for each operation to complete, only after that, it executes the next operation, hence blocking the next command from execution i.e. a command will not be executed until & unless the query has finished executing to get all the results from previous commands.
- Asynchronous approach:
   They are called non-blocking functions as it never waits for each operation to complete, rather it executes all operations in the first go. The result of each operation will be handled once the result is available i.e. each command will be executed soon after the execution of the previous command. While the previous command runs in the background and loads the result once it is finished processing the data.
- Use cases:
  If your operations are not doing very heavy lifting like querying huge data from DB then go ahead with the Synchronous way otherwise Asynchronous way.
In an Asynchronous way, you can show some progress indicators to the user while in the background you can continue with your heavyweight work. This is an ideal scenario for GUI-based apps.
#### Example of asynchronous and synchronous:
 Create a text file named input.txt with the following content:
 GeeksforGeeks: A computer science portal
Now let us create a js file named main.js with the following code: 
<code>var fs = require("fs");</code>
# 
// Asynchronous read
```
fs.readFile('input.txt', function (err, data) {
   if (err) {
      return console.error(err);
   }
   console.log("Asynchronous read: " + data.toString());
});
```
##### Output:

Asynchronous read: GeeksforGeeks: A computer science portal

# 
// Synchronous read
```
var fs = require("fs");
var data = fs.readFileSync('input.txt');
console.log("Synchronous read: " + data.toString());
```
##### Output:

Synchronous read: GeeksforGeeks: A computer science portal



