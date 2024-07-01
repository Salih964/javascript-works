

var items={potatto:45,tomatto:50,ginger:250,garlic:300,onion:35}

var nestedArray=Object.entries(items)



var costly=nestedArray.reduce((p1,p2)=>p1[1]>p2[1]?p1:p2)

console.log(costly);