

var word="hellopython";

var wc={}//{h:1}

// for(let ch of word){

//     // ch=h
//     if(ch in wc ){

//         wc[ch]+=1

//     }
//     else{

//         wc[ch]=1

//     }

// }

for(let ch of word){

    ch in wc ? wc[ch]+=1 : wc[ch]=1
}
    
console.log(wc);


// word.split("").map(ch => ch in wc ? wc[ch]+=1 : wc[ch]=1)

// console.log(wc);

