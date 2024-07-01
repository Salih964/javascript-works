
class Employee{

    // name, department, salary
    
    constructor(name, department, salary){

        this.name=name;
        
        this.department=department;
        
        this.salary=salary;

    }
    
    printEmployee(){
        console.log(this.name,this.department, this.salary);
    }
  

}

var obj=new Employee("hari","hr",25000)

obj.printEmployee()



