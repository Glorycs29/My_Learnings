//fuction definition

//nither return type nor parameter is necessary.
//Math.random()  function generates value b/w 'o' to '1'
// Non-premitive data types: array, objects, function


function sayHi(param){
    console.log("hello volley captain");
    let rav = Math.random() > 0.5?true :"less than 0.5"; 
    return rav;

}
let rav = sayHi([1,3,4,5,6]);
console.log("rav = ", rav);


