// array declare
// let arr = [1,2,3,4,5];

 let arr = [1,2,3,4,5];
 console.log(arr);
 console.log(arr.length);
 let i=0;
 while(i<arr.length){
 	console.log("element at ", i, " is: ", arr[i++]);
 }

 console.log("-----------------------------------------------------------------------------------------");

 // some functions of array in JS
 // push-> add at last 	// pop
 // unshift-> add at first	// shift
 arr.push("Hello Volly Captain");
 arr.unshift("Hello Olive🫒");
 console.log(arr);
 console.log("-----------------------------------------------------------------------------------------");
 arr.shift();
 arr.pop();
 console.log(arr);

 

 console.log("-----------------------------------------------------------------------------------------");
 // starting_idx, ending_idx  (return a copy of arr)
 console.log("We are using *slice* function to return a copy of arr");
 let part_of_arr= arr.slice(1,arr.length-2);
 console.log(part_of_arr);
 console.log(arr);
 

 console.log("-----------------------------------------------------------------------------------------");
 // splice function
 console.log("We had removed 1 element from 2nd idx using *splice* function, *it deletes the element of arr (not copy)*");
 arr.splice(2,1); // means 2nd idx se ek banda remove kr do

 console.log(arr);


 console.log("-----------------------------------------------------------------------------------------");
 // indexof : tells the index of element
 // contains: tells whether the element is present or not
