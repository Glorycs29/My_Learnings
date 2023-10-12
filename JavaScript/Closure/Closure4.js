/*

closure: Function along with its lexical scope forms a closure.
 A closure is combination of a function and the lexical environment within which that function was declared. 
 This environment consists of any local variables that were in-scope at the time the closure was created. 
 


*/ 
console.log("----------------------------------------------------------------------------");


console.log("Example 1: ");

function x(){
    var i=1;
    function y(){
        console.log(i);
    }
    i=2;
    return y;
}
x()();

console.log("----------------------------------------------------------------------------");


// If the function is executed in some other scope, it will still remember the scope in which it was created.

console.log("Example 2: ");

function outerFunction() {
    let outerVariable = "I am outside!";
  
    function innerFunction() {
      let innerVariable = "I am inside!";
      console.log(outerVariable); // logs "I am outside!"
      console.log(innerVariable); // logs "I am inside!"
    }
  
    return innerFunction;
  }

    let myInnerFunction = outerFunction();
    myInnerFunction(); // logs "I am outside!"


console.log("----------------------------------------------------------------------------");




console.log("Example 3: ");

    function outer(b) {
    let outerVar = 8;
  
    // function innerFunction(a) {
    //   console.log(a + b); // logs 12
    // }
    // return innerFunction("Hello World");

    function inner(d) {
        console.log(outerVar, c, b, d); // logs 4
    }

    let c=10;
    return inner;
    
}

var close = outer("Hello World");
close("hey there");


console.log("----------------------------------------------------------------------------");



