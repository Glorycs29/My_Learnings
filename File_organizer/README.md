

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
------------------------------------------------------------------------------------------------------------------------------------------------------------------
## For printing the names of files: 

```
//  node main.js organize "C:\Users\HP\Downloads"
let inputArr = process.argv.slice(2);
let fs = require("fs");
let path = require("path");
 console.log(inputArr);
 // node main.js tree "directoryPath"
 // node main.js organize "directoryPath"
 // node main.js help
let command = inputArr[0];
let types = {
	   media: ["mp4", "mkv"],
	   archives: ['zip', '7z', 'rar', 'tar','rar', 'gz', 'ar', 'iso', "xz"],
	   documents: ["docx", 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex'],
	   app: ['exe', 'dmg', 'pkg', "deb"]
}

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
	let destPath;
	if(dirPath == undefined){
		console.log("Kindly enter the paht");
		return;
	}else{
    //	Now let's check whether any path exist or not
		let doesExist = fs.existsSync(dirPath);
		if(doesExist){
			// now let's organised
// 2. create->organized_files->directory
			destPath = path.join(dirPath, "organized_files");
			// edge case if files already exist then don't need to make a new one
			if(fs.existsSync(destPath)==false){
				fs.mkdirSync(destPath);
			}
			// fs.mkdirSync(destPath);		
		}else{
			console.log("Kindly enter the correct path");
			return;
		}
	}
	
	organizeHelper(dirPath, destPath);

	function organizeHelper(src, dest){
	// 3. identify categories of all the files present in that input directory ->
		let childNames = fs.readdirSync(src);
		 console.log(childNames);
		for(let i=0; i<childNames.length; i++){
			let childAddress = path.join(src, childNames[i]);
			let isFile = fs.lstatSync(childAddress).isFile();
			if(isFile){
				console.log(childNames[i]);
			}
		}
	}
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
