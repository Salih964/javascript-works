

var arr=["program", "project", "profile", "profession","python", "django","c++","abcdefgh"]

// convert all object to uppercae

var upperCaseStrings=arr.map(w=>w.toUpperCase())

console.log(upperCaseStrings);


// print length of each string object in the array

var counts=arr.map(w=>w.length)

console.log(counts);

// return words starting with "pro"

var wordStart=arr.filter(w=>w.startsWith("pro"))

console.log(wordStart);

// longest word
var longestWord=arr.reduce((w1,w2)=>w1.length > w2.length ? w1:w2)

console.log(longestWord);

// shortest word
var shortestWord=arr.reduce((w1,w2)=>w1.length < w2.length ? w1:w2)

console.log(shortestWord);

// arrange words in descending order 
arr.sort((w1,w2)=> w2.length - w1.length)
console. log(arr);



