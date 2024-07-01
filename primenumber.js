
// number=7
// 1,number

// 11
// 2,3,4,5,10

var number=11;

var isPrime=true;

for(let i=2;i<number;i++){ 

    if(number % i == 0){
    
        isPrime=false;
    
        break
    }
 
}    
    
console.log(isPrime);