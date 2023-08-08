const path = require('path')
const fs = require('fs')
// create directory
fs.mkdir(path.join(__dirname,'/test'), (err) =>{
    if(err){
        console.log('Something went wrong....', err)
        return;
    }
    console.log('Folder created.....')
})



// create a file
fs.writeFile(path.join(__dirname,'test','test.txt'), 'Hello Ye hum file k andr likh rhe hain\n', (err) =>{

    if(err){
        throw err;
    }
    fs.appendFile(path.join(__dirname, 'test', 'test.txt'), 'Extra data adding to the existing file..', (err)=>{
        if(err) throw err;
        console.log('data added')
    })
    // console.log('File Created....🤯')
})
