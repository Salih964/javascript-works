

var num1=30;

var num2=45;

var smallest=num1<num2?num1:num2;

var gcd=1;

for(let i=1;i <= smallest;i++){ //i=1

    if(num1%i==0 && num2%i==0){

        gcd=i

    }   
    
    
}    

console.log(gcd);