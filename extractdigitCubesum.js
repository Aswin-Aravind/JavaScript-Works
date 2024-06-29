var num=153
var x=num
cubeSum=0

while(num!=0){
    let digit = num%10
    cubeSum+=digit**3
    num=Math.floor(num/10)
}

console.log(cubeSum);

console.log(x==cubeSum ? "armstrong":"not an armstrong");