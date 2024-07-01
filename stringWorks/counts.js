
var text="pneumonoultramicroscopicsilicovolcanoconiosis"

// vowelCount
// consonant count



// for(let i=0;i<text.length;i++){

//      console.log(text[i]);
// }



for(let ch of text){

    console.log(ch);

}

//  

var vowels="aeiou"

var v_count=0;
var c_count=0;

for(let ch of text){ //p

    if(vowels.includes(ch)){
    
        v_count+=1

    }
    
    else{
        
        c_count+=1

    }

}   
    


console. log("vowel count",v_count);
console.log("consonant count",c_count);
console.log("total caharacters",text.length);