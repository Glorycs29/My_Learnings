function x(){
    for(var i=1; i<=5; i++){
        setTimeout(function () {
                console.log(i, "First loop 🏃‍♂️");
            }, 
            i*1000);
    }

    console.log("Hey, Hey, Hey!...");
}
x();

// we are getting 6, 6, 6... on our screen because the closure remembers the reference to i, not the value of i

// how to fix this?
//  a block scope variable...i.e let
// here each time a settimeout function is run, it makes it's own copy of i with it
function y(){
    for(let i=1; i<=5; i++){
        setTimeout(function () {
                console.log(i, "Second loop🏃‍♂️🏃‍♂️");
            }, 
            i*1000);
    }

    console.log("Hey, Hey, Hey!...");
}
y();


// -------------- if we want to use var --------------------
// unleasing the power of closure ---------

function z(){
    for(var i=1; i<=5; i++){
        function close(i){
            setTimeout(function(){
                console.log(i, "Third loop 🏃‍♂️🏃‍♂️🏃‍♂️");
            }, i*1000);
        }
        close(i);
    }

    console.log("Bhagoo bhagooo chor aaya..🏃‍♂️🏃‍♂️🏃‍♂️🏃‍♂️🏃‍♂️🏃‍♂️🏃‍♂️");
}

z();