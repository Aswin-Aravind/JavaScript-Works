var string1="listen"
 
var string2="silent"


sortedString1=string1.split("").sort().join("");

sortedString2=string2.split("").sort().join("");


console.log(sortedString1==sortedString2 ? "anagram":"not an anagram");