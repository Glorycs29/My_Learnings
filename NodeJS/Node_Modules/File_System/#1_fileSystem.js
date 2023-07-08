let fs = require("fs");
//👍 create            read            update          delete
//👍 open -w,          readfileSync     appendFilSync   unlinkSync
//👍 writeFileSync


// ye hume file binary buffer k format me laake dega 
// let buffer = fs.readFileSync("functions.js");
// console.log("bin data", buffer);



//👍creating folder and some functions
 //👍create         read         delete
 //👍mkdirSync      readdirSync  rmdirSync

// fs.mkdirSync("meridirectory");
// fs.writeFileSync("meridirectory/meri_file.txt","Mera content");
 // let content = fs.readdirSync("meridirectory");
 //console.log(content);

 // for(let i=0;i<content.length;i++){
    // console.log("file", content[i], "is removed");

//👍remove files
     // fs.unlinkSync("meridirectory/"+content[i]);
 // }

//👍remove folder
 // fs.rmdirSync("meridirectory");

//👍fs.existSync -> if a file exist at a path-> true/false
//👍fs.lstatSync->fs.lstatSync---ye btata hai ki ye path,file ka hai ya folder ka

let doesPathExist = fs.existsSync("#2_childProcesses.js");
console.log("doesPathExist: " + doesPathExist);

//👉 fs.lstatSync
let detailsObj = fs.lstatSync(__dirname + "\\#1_fileSystem.js");
let ans = detailsObj.isFile();
console.log("isFile: "+ ans);
ans = detailsObj.isDirectory();
console.log("isDirectory: "+ ans);

