

// inneritance


// class  GrandParent{

//     m0(){

//         console.log("inside parent m0 method");
//     }
// }



class  Parent{

    m1(){

        console.log("inside parent m1 method");
    }
}


class Child extends Parent{

    m2(){

        console.log("inside child m2 method");
    }
}

const ch=new Child()

ch.m2()

ch.m1()

// ch.m0()