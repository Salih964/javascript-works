
// define[]

// list[] list() 
// dictionary
// set
// tuple

//group of objects manage

var number=[]

var numbers=[10,20]

// Array [] preserved, dulpicates allowed, mutable
// object

var expenses=[10000,15000,45000,32000]

//                0    1    2     3


expenses[0]=20000  //update

console.log(expenses); // update

console.log(expenses[0]);


// iterate

for(let i=0;i<expenses.length;i++){

    console.log(expenses[i]);
    
}  // of
    
for(let exp of expenses ){
    
    console.log(exp);
    
}