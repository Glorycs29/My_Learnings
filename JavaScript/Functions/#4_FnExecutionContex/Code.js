// ✅window


// ✅console.log(global);
// output:
// <ref *1> Object [global] {
//   global: [Circular *1],
//   queueMicrotask: [Function: queueMicrotask],
//   clearImmediate: [Function: clearImmediate],
//   setImmediate: [Function: setImmediate] {
//     [Symbol(nodejs.util.promisify.custom)]: [Getter]
//   },
//   structuredClone: [Function: structuredClone],
//   clearInterval: [Function: clearInterval],
//   clearTimeout: [Function: clearTimeout],
//   setInterval: [Function: setInterval],
//   setTimeout: [Function: setTimeout] {
//     [Symbol(nodejs.util.promisify.custom)]: [Getter]
//   },
//   atob: [Function: atob],
//   btoa: [Function: btoa],
//   performance: Performance {
//     nodeTiming: PerformanceNodeTiming {
//       name: 'node',
//       entryType: 'node',
//       startTime: 0,
//       duration: 50.84449999779463,
//       nodeStart: 2.4842000007629395,
//       v8Start: 7.155699998140335,
//       bootstrapComplete: 33.528999999165535,
//       environment: 19.430399999022484,
//       loopStart: -1,
//       loopExit: -1,
//       idleTime: 0
//     },
//     timeOrigin: 1690353604402.775
//   },
//   fetch: [AsyncFunction: fetch]
// }



// ✅console.log(this);
// output
// {}



// // hoisting : Memory alloction for the code and the code will run inside the execution context


// console.log("a is ", a);
// var a;
// console.log("a is ", a);
// a=10;
// console.log("a is ", a);

// fn statements // memory allocation before execution 
// memory is created in heap and refernce is store in stack
fn();
function fn(){
    console.log("Hey, hey, hey!, I can be called before my declaration");
}
fn();
