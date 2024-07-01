
var number=153;

while(number != 0){ //153 !=0 15 !=0 1!=0 0!=0

    let digit=number % 10; //153%10=3 15%10=5 1%10=1

    console.log(digit);//3 5 1

    number=Math.floor(number/10)// 1/10=0

}