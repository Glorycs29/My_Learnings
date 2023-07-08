let cp = require("child_process");
console.log("Trying to open child process 🥳🥳🥳🥳🥳🪄🪄🪄🪄🪄🪄🪄");
 //cp.execSync("calc");
 //console.log("opened calculator");


 // for opening vs code:
// cp.execSync("code");
// console.log("opened VScode");


// for opening website in brave browser 
//cp.execSync("start brave https://github.com/Glorycs29"); // we use start to open websites // else use open 
//console.log("opened our 😍");
//https://www.geeksforgeeks.org/


//doubt
//let output = cp.execSync("node objects.js");
//console.log("output 🔥"  + output);

// we can also run files of any language like: java, C++, js, python..
let output2 = cp.execSync("node #2_childProcesses.js");
console.log("Hello There! 😁, Successfully linked the file and it gives output : "+output2);