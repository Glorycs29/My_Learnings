function x(){

    var i=1;
    setTimeout(function(){
        console.log(i);
    }, 3000);
    console.log("This will be printed first, then value of i will be printed");
}
x();


// Never ever think that JS timeout will wait till 3000 ms, That's not correct 
// This function setTimeout forms a closure, so it remembers the reference to i
// it takes the callback function and attaches a timer to it and store it somewhere and JS proceeds to next line...
// Once the timer expires, it takes that fucntion and put that again in the call stack


