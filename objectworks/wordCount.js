var text = "hello hai hello hai hello hello"
var wc ={}


text.split(" ").map(ch => ch in wc ? wc[ch]+=1:wc[ch]=1)
console.log(wc);
