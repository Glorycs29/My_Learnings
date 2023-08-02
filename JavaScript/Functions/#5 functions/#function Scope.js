var a=10;
console.log("line 2", a);

function fn(){
    console.log("line 5", a);
    var a = 20;
    a++;
    console.log("line 7", a);
    if(a){
        var a = 30;
        a++;
        console.log("line 12", a);
    }
    console.log("line 14", a);
}
fn();
console.log("line 17", a);

// output:
// line 2 10
// line 5 undefined
// line 7 21
// line 12 31
// line 14 31
// line 17 10
