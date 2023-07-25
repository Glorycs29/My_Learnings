// arrow function
console.log("--------------------Arrow Fn------------------------");

// let fn = (num)=>{
//     return num*num;
// }
// OR
let fn=num=>num*num;
console.log(fn(5));


console.log("-------------------Fn inside Fn------------------------");
// function can be passed inside a function


function sayHello(param){
    console.log("hello", param);
    param();
    return "Glory";
}

function smaller(){
    console.log("Hello i am smaller");
}

let rVal = sayHello(smaller);
console.log(rVal);


console.log("-------------------Fn returning Fn------------------------");
// variable can be returned by a variable
// function can be returned by a function

function outer(){
    console.log("Hi i am outer returning inner");
    return function inner(){
        console.log("Inner hu dada.. baccha smjha hai kya!!");
    }
}

let val = outer();
console.log("rVal", val);
val();
