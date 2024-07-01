
var year=2024;

// print leap year if year is leap year else print not a leap year

// if year is a century year then it is divisible by 400
// if year is not century yer then its is divisible by 4
// if above both condition is true then year is a leap year


if ((year % 100 == 0 && year % 400 == 0) || (year %100 != 0 && year %4 == 0)){

    console. log(year, "is leap year");
    
    
    
}
else{
    
    console. log(year, "is not leap year");

}

// print all leap years from 1800 to 2024

for(let year=1800; year <= 2024 ; year++){

    if((year %100 ==0 && year%400 == 0) ||(year %100!=0 && year %4 == 0)){
    
        console.log(year);
    }
}