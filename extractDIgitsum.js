var number=153;
total=0

while(number!=0){
    let lastDigit=number%10
    total+=lastDigit
    number = Math.floor(number/10)
}

console.log(total);