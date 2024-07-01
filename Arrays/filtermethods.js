

var arr=[10,11,12,13,14,15,16,17,18]

// filter()
// numGtFifteen


//var evens=

var evens=arr.filter(num=>num%2 == 0) //[10,12,14,16,18]

console.log(evens);

// var odds=

var odds=arr.filter(num=>num%2!= 0)
console.log(odds);