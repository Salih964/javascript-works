

var pointFrequency=1;

function displayNumber(event){

    const operators=["+","-","*","/","."]

    let textBox=document.querySelector("#result")
    
    // extractCurrentExpression
    
    let currentExpression=textBox.value;
    
    // extract displayNumber
    
    let displayNumber=event.target.value

    if(displayNumber == "." && pointFrequency == 1){

        pointFrequency=0
    }
        
    else if(displayNumber == "." && pointFrequency === 0){
        
        return
    }

    if(operators.includes(displayNumber) && displayNumber!="."){

        pointFrequency=1
    }   
    
    // extract last character from currentExpression
    
    let curExpLastChar=currentExpression.slice(-1)
    
    // chk for dispalyNumber and curExplastChar are operators

    if(operators.includes(displayNumber) && operators.includes(curExpLastChar)){

        // remove the last character from currentExpression
        
        currentExpression=currentExpression.slice(0,-1)

    }    
        
    // append the displaynumber with currentExpression
        
    textBox.value=currentExpression+displayNumber
}


function clearBox(){

    document.querySelector("#result").value=""
}

function evaluateExpression(){

    let currentExpression=document.querySelector("#result").value;
    
    let result=eval(currentExpression)
    
    document.querySelector("#result").value=result
}

function backSpace(){

    let currentExpression=document.querySelector("#result").value;//13+2+3+
    
    let result=currentExpression.slice(0,-1)
    
    document.querySelector("#result").value=result;

}