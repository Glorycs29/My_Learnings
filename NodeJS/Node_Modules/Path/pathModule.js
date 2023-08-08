const path = require('path')
// dirname
// console.log(__filename)
// console.log('Folder name: ', path.dirname(__filename) )

// filename
console.log('File name: ', path.basename(__filename) )

// Extension
console.log('Ext name: ', path.extname(__filename) )

// parse
console.log('Parse: ', path.parse(__filename) )

// join : basically make a path
console.log('Join: ', path.join(__dirname, 'order', 'app.js') )
