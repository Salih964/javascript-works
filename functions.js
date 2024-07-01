
// def function_name(parm1,parm2,,,) :

// function defnition
// return value

// function functionName(p1, p2, p3,,,){
    // function defnition
    // return value

// }



function add(num1,num2){

    return num1+ num2//100+200=300
}
    
console.log(add(100,200));
    

function cube(num){
    
    return num ** 3
}
    
console.log(cube(3));


// create a funtion maxTwo with two params num1, num2 return largest number

function maxTwo(num1,num2){

    return num1>num2?num1 : num2

}    
    
console.log(maxTwo(10,27));


// smartSub(10,5)=> 5
// smartSub(5,10)=> 5

function smartSub(num1,num2){

    return num1>num2?num1-num2 : num2-num1;

}    
    
console.log(smartSub(5,10));
    