var number=153;

while(number != 0){
    let digit = number % 10;

    console.log(digit)

    number = Math.floor(number/10)
}