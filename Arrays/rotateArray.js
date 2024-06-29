var arr=[10,20,30,40]

k=3

for(i=1;i<=k;i++){
   let poppedElement = arr.pop()
   arr.unshift(poppedElement)
}
console.log(arr);