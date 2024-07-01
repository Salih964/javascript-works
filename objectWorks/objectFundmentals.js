

var students={

    name: "vipin",
    course: "django",
    degree: "bca",
    total:  450,
    points:10

}
    
    console.log(students.name);
    
    console.log(students.degree);
    
    students.grade="a+"
    
    console.log(students);

if("total" in students){

    console.log("present");
}
        
else{
    console.log("not present");

}


// if points exist add 10 extra points witn current point else add points as 15

if("points" in students){

    // update
    students.points+=10
}
    
else{
    
    // add
    students.points=15
    
}
    
console.log(students);