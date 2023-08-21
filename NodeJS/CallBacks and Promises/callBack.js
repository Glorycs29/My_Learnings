var counter=1;
function printCount(){
    console.clear();
    console.log(counter);
    counter++;
}

setInterval(printCount,1000);
var counter2=1;

for(var i=0;i<100;i++){
    counter2=counter2+1;
    console.log(counter2);
}
