var text="pneumonoultramicroscopicsilicovolcanoconiosis"

var wc={}

text.split("").map(ch=>ch in wc ? wc[ch]+=1:wc[ch]=1)

var nestedArray=Object.entries(wc)

console.log(nestedArray);

var mostRecursivechar=nestedArray.reduce((o1,o2)=>o1[1]>o2[1]?o1:o2)
console.log(mostRecursivechar);