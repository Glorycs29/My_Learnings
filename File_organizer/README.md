

 // The main.js: not updated one
 ##### Commands: 
 - node main.js tree "DirectoryPath"
 - node main.js organize "DirectoryPath"
 - node main.js help



```
let inputArr = process.argv.slice(2);
let fs = require("fs");
let path = require("path");
 console.log(inputArr);
 // node main.js tree "directoryPath"
 // node main.js organize "directoryPath"
 // node main.js help
let command = inputArr[0];
switch(command){
	case "tree":
		treeFn(inputArr[1]);
		break;
	case "organize":
		organizeFn(inputArr[1]);
		break;
	case "help":
		helpFn()
		break;
	default:
		console.log("Please input right command");
			break;	
}

function treeFn(dirPath){
	console.log("Tree command implementation for", dirPath);
}
function organizeFn(dirPath){
	// console.log("Organize command implementation for", dirPath);
// 1.input -> directory path given
	if(dirPath == undefined){
		console.log("Kindly enter the paht");
		return;
	}else{
    //	Now let's check whether any path exist or not
		let doesExist = fs.existsSync(dirPath);
		if(doesExist){
			// now let's organised
// 2. create->organized_files->directory
			let destPath = path.join(dirPath, "organized_files");
			// edge case if files already exist then don't need to make a new one
			if(fs.existsSync(destPath)==false){
				fs.mkdirSync(destPath);
			}
			// fs.mkdirSync(destPath);		
		}else{
			console.log("Kindly enter the correct paht");
			return;
		}
	}
	
	// 3. identify categories of all the files present in that input directory ->
	// 4. copy/cut files to that organized directory inside of any of category folder





}
function helpFn(){
	console.log(
		`List of All commands:
				node main.js tree "directoryPath"
 				node main.js organize "directoryPath"
 				node main.js help
				`);
}


   ```
     
