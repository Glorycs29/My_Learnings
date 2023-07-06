//let fs = require("fs");
//let buffer = fs.readFileSync("functions.js");
//console.log("bin data", buffer);


// another object
let cap ={
    name: "Steve", 
    age: 35, 
    isAvenger: true,
    movies:["civil war", "Avengers", "winter soilder"],
    // name is not required because Cz ye uska identifier hai
    sayHi: function(){
        console.log("HEY, HEY, HEY This is Bokuto! 😎");
    }
};

console.log(cap.name);
console.log(cap.age);
console.log(cap.movies[0]);
cap.sayHi();

// SET/ UPDATE

cap.age=36;
cap.isAvenger=false;
cap.friends=["Tony", "Peter", "Bokuto"];
console.log(cap.name);
console.log(cap.age);
console.log(cap.movies[0]);
console.log("His friends are ",cap.friends[0],",", cap.friends[1],",", cap.friends[2]);
cap.sayHi();

console.log("''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''");
console.log("cap: ", cap);

// delete
console.log("''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''");
delete cap.name;
console.log("cap: ", cap);

console.log("''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''");
// using loop to print the keys of the object

// using loop to print the keys of object
for(let key in cap){
    console.log(key, ":", cap[key]);
}

let propKey = "age";
console.log(cap[propKey]);
console.log(cap.age);
console.log(cap["age"]);

// crux points
// The value of the variable in the square bracket is being replaced and searched inside the object
//whereas in the case of the dot, it assumes a value and searches accordingly
//If any key is not defined then it prints undefined 
