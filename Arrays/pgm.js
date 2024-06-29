var words=["fly","fly"]
var check=words[0];

commonWord=true;

for(char of words){
    if(!check == char){

        commonWord=false;
    }

}
console.log(commonWord);