//this is rabin-karp algorithm:
let text="GEEKSFORGEEKS";
let pattern="E";
let patternHash=0;
for(let i=0;i<pattern.length;i++){
    patternHash+=pattern[i].charCodeAt();
}
let end;
let substr;
let substrHash;
let chk=false;
for(let start=0;start<text.length;start++){
    end=start+pattern.length;
    substr = text.substring(start, end);
    substrHash=0;
    if (substr.length>0){
        for(let j=0;j<substr.length;j++){
            substrHash+=substr[j].charCodeAt();
            if(substrHash===patternHash){
                console.log(substr);
                chk=false;
                for(let k=0;k<substr.length;k++){
                    if(substr[k]==pattern[k]){
                        chk=true;
                    }else{
                        chk=false;
                    }
                }
                if(chk){
                    console.log("Match found at:"+start);
                }
            }
        }
    }

}