// console.log("Hello");

const color = require('cli-color')
console.log(color.yellow('Happy_Birthday_Pukkieee'))

console.log(color.green('Happy_Birthday_Pukkieee'))


console.log(color.red('Happy_Birthday_Pukkieee'))

// local module
const register = require('./auth')
//  the register is been exported, as register is a function so we can call it.
register('Happy_Birthday_Pukkieee');
