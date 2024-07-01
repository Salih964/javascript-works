
var weightInkg=75;

var heightInCm=165;

// BMI=(weightINKg/(heightInMeter ** 2))


var heightInMeter=heightInCm/100;


var bmi=Math.round((weightInkg/(heightInMeter**2)))


if(bmi < 19){ //28<19

    console.log("underweight");
}
    
else if(bmi <= 25){ //28<25
    
    console. log("normal weight");

}

else if(bmi <= 30){//28 <= 30

    console.log("overweight");

}

else{

    console. log("obese");


}


console.log(bmi);