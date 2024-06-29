//single line execution which operates like a function.

//for multiple line execution open curly braces {} and give the keyword return.

//only in normal functions, hoisting is possible. Not in arrow functions.


// var square = (num)=>num**2

// console.log(square(5));


// var cube = (num)=>num**3

// console.log(cube(5));


// var isOdd=(num)=>num%2!=0

// console.log(isOdd(7));


// var isEven = (num)=>num%2==0

// console.log(isEven(3));


// var isPositive = (num)=>num>0

// console.log(isPositive(0));


var smartSub = (num1,num2)=>num1>num2 ? num1-num2:num2-num1

console.log(smartSub(10,5));
console.log(smartSub(7,10));