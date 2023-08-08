const path = require('path')
const fs = require('fs')
// create directory
// fs.mkdir(path.join(__dirname,'/test'), (err) =>{
//     if(err){
//         console.log('Something went wrong....', err)
//         return;
//     }
//     console.log('Folder created.....')
// })



// // create a file
// fs.writeFile(path.join(__dirname,'test','test.txt'), 'Hello Ye hum file k andr likh rhe hain\n', (err) =>{

//     if(err){
//         throw err;
//     }
//     fs.appendFile(path.join(__dirname, 'test', 'test.txt'), 'Extra data adding to the existing file..', (err)=>{
//         if(err) throw err;
//         console.log('data added')
//     })
//     // console.log('File Created....🤯')
// })
// using Asyn so that there won't be blocking
// fs.readFile(path.join(__dirname, 'test', 'test.txt'), (err, data)=>{
//             if(err) throw err;
//             console.log(data)
//         })

        // it gives us buffer, the data which is present in the memory
        // but we want converted data, UTF8 format OR original data
        // fs.readFile(path.join(__dirname, 'test', 'test.txt'), (err, data)=>{
        //     if(err) throw err;
        //     const content = Buffer.from(data)
        //     console.log(content.toString())
            
        //  })

        fs.readFile(path.join(__dirname, 'test', 'test.txt'),'utf-8', (err, data)=>{
            if(err) throw err;
            // const content = Buffer.from(data)
            // console.log(content.toString())
            
            console.log(data)

        })
