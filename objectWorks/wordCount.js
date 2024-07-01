
var text="hello hai hello hai hello hello"

var wc={}


text.split(" ").map(w=>w in wc ? wc[w]+=1 : wc[w]=1)

console.log(wc);

// print word count
// hello:3,hai:2

// step1 text => words


// var words=text.split(" ")

// for(let w of words){
//     if(w in wc){

//         wc[w]+=1
//     }

//     else{
//         wc[w]=1
//     }
// }


