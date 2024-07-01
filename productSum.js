
var number=153;

var original=number;

var total=0

var number_count=String(number).length

while(number != 0){

    let digit=number %10;//3

    let cube=digit ** number_count

    total=total+cube

    number=Math.floor(number/10) //0

}

console.log(original == total ? "armstrong" : "not armstrong");