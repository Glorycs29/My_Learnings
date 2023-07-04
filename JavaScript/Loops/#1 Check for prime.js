// is prime
let num =23;
let flag=true;
for(let div =2; div<num; div++){
  if(num % div==0){
    flag=false;
    break;
  }
}
if(flag==true)
  console.log(num,"is prime");
else
  console.log(num,"is not prime")
