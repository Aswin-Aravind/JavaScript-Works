var number=5;

var isPrime=true;

for(i=2;i<number;i++){

    if(number%i==0){

        isPrime = false;
        break

    }
}
console.log(isPrime);