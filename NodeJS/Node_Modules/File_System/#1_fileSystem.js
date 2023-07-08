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
// ye mante hue ki same level pe hain
     // fs.unlinkSync("meridirectory/"+content[i]);
 // }

//👍remove folder
 // fs.rmdirSync("meridirectory");

//👍fs.existSync -> if a file exist at a path-> true/false
//👍fs.lstatSync->fs.lstatSync---ye btata hai ki ye path,file ka hai ya folder ka

// let doesPathExist = fs.existsSync("#2_childProcesses.js");
// console.log("doesPathExist: " + doesPathExist);

//👉 fs.lstatsync
// let detailsObj = fs.lstatSync(__dirname + "\\#1_fileSystem.js");
// let ans = detailsObj.isFile();
// console.log("isFile: "+ ans);
// ans = detailsObj.isDirectory();
// console.log("isDirectory: "+ ans);

// C:\Users\HP\Desktop\Web_dev\basicJAVAscript,<project filters>
// "C:\Users\HP\Desktop\Web_dev\basicJAVAscript"
// "C:\Users\HP\Desktop\Web_dev\basicJAVAscript\#1_functions.js"
// creating 10 folders having name lecture 1, 2.... and having there own readme.md
for(let i=1; i<=10;i++){
    // wehave to create folders inside this folder
    // let's build path first
    // element inside the curly braces treated as variable
    let dirPathToMake = `Lecture_Notes-${i}`;
    fs.mkdirSync(dirPathToMake);
    fs.writeFileSync(dirPathToMake + "\\" + "readme.md", ` # readme for ${dirPathToMake}`);
}
