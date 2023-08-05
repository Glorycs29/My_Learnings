var a=10;
console.log("line no. 2:",a);
function fn(){
    console.log("line no. 4:",a);
    var a=20;
    a++;
    console.log("line no. 7:",a);
    if(a){
        var a=30;
        a++;
        console.log("line no. 11:",a);
    }
    console.log("line no. 13:",a);
}
fn();
console.log("line no. 16:",a)
