var num = 1634

var x = num

sum=0

var number_count = String(num).length

while(num!=0){
    let digit = num%10

    let cube=digit**number_count

    sum = sum+cube

    num=Math.floor(num/10)
}

console.log(x==sum ?"armstrong":"not armstrong")