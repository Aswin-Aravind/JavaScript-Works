year = 1900

if(year%100==0 && year%400==0 && year%4==0){
    console.log("It is a century and leap year");
}

else if(year%100!=0 && year%400!=0 && year%4==0){
    console.log("leap year but not century");
}

else{

    console.log("not a century nor leap year");
}


// year=1900
// if((year%400==0 && year%100==0) || (year%4==0 && year%100!=0)){

//     console.log(year,"leap year");
// }

// else{
//     console.log(year,"not a leap year");
// }