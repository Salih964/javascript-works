

var text="ABCBDDE"

var wc={}



for(let ch of text){

    if(ch in wc){

        console.log(ch,"is first recursive chacater");
    break
    }

    else{
        wc[ch]=1
    }
}