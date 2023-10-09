// function x(){
//     var a=7;
//     function y(){
//         console.log(a);
//     }
//     return y;
// }
// var z = x();
// console.log(z);
// z();

// ----------------------------

function x(){
    var a=7;
    return function y(){
        console.log(a);
    }
    
}
var z = x();
console.log(z);
z();