// Function Statement aka Function Declaration
// a();
// b();

function a(){
    console.log("Hello From Function a");
}
a();


// Function Expression

var b = function (){
    console.log("Hello From Function b");
}
b();


console.log("");
console.log("Diff b/w Statement and Expression is Hoisting, How hoisting come into picture?....🤯")
console.log("");
console.log("If we call both function before creating it, ");
console.log("The function b(Fn Expression) will through TypeError: b is not a function,");
console.log("Fn b is initialized as undefined until code hits the line of var b = function()....");


// Anonymous Function

// function(){

// }
console.log("Anonymous function are used in the place where the functions are used as values","\n",  "..otherwise it will throw error\n");



// Named Function Expression
var d = function xyz(){
    console.log("Hello From Function d", xyz);
}
d();
// xyz();   //reference error, because this xyz function is not created in outer scope, it's not a function in outer scope
// It is locate as local variable, If you try to access that xyz inside function d, it's possible



// Difference between parameters & Arguments ?
function example(param1, param2) {
    console.log(param1, param2);
  }
  
  example("arg1", "arg2"); // logs "arg1" "arg2"
console.log("Arguments that are passed to the function when it is called.\n" ,"When the function is executed, the values of param1 and param2 are set to arg1 and arg2");

// Parameters are defined in a function's definition
//  and act as placeholders for values that will be passed to the function when it is called,
//  while arguments are the actual values that are passed to the function when it is called



// First Class Functions

// Assigned to a variable.
// Passed as an argument to a function.
// Returned as a value from a function.(IMP)

var e = function(param1){
    return function(){

    }
}

console.log(e());



// Arrow Function 

