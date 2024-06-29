var text="pneumonoultramicroscopicsilicovolcanoconiosis"

var vowels = "aeiou"

v_count=0

c_count=0


for(ch of text){
    if(vowels.includes(ch)){

        v_count+=1
    }

    else{

        c_count+=1
    }

}

console.log(v_count,"number of vowels.");
console.log(c_count,"number of consonants.");
console.log(text.length);
