

// Array methods

var colors=["red", "green", "blue"]

console.log(colors);

// class Array{
    // push(object){}
    // unshifted(obj) add object to the begining
    // pop()
    // shift() remove the element from starting
    // includes(obj)


// }    

// Add color
colors.push("yellow")

console.log(colors);

// remove color
var popped_obj=colors.pop()

console.log(colors);

// shift remove the element from starting
var colors=["red", "green", "blue"]

colors.shift()

console.log(colors);

// unshift add object to the begining
colors.unshift("black")

console.log(colors);


// includes
var colors=["red", "green", "blue"]

colors.includes("red")

console.log(colors.includes("red"))


////
var arr=[20,10,11,12,13,14,15,16,100,1000]

// sqaures
var squares=arr.map((num)=>num ** 2)
console. log(squares);

// cubes
var cubes=arr.map((num)=>num ** 3)
console.log(cubes);

// if num < 12 num-1
// if num > 12 num+1

var result=arr.map((num)=>num>12 ? num+1:num<12?num-1:num)
console. log(result); 

//
var total=arr.reduce((n1,n2)=>n1+n2)

console.log(total);


//
var product=arr.reduce((n1,n2)=>n1*n2)

console.log(product);

// 
var maxNum=arr.reduce((n1,n2)=>n1>n2?n1:n2)

console.log(maxNum);


//
var minNum=arr.reduce((n1,n2)=>n1<n2?n1:n2)

console.log(minNum);

// sort
arr.sort()

console.log(arr);


// ascending ordedr sorting

// arr.sort((o1,o2)=> o1<o2 ?- 1:1)
arr.sort((o1,o2)=>o1-o2) //sort array in asc

console. log(arr);


// descending ordedr sorting

// arr.sort((o1,o2)=> o1>o2 ?- 1:1)

arr.sort((o1,o2)=>o2-o1) //sort array in desc

console. log(arr);











