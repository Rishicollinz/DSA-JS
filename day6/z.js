//this is implementation of z algorithm
let pattern="baba";
console.log("Pattern: "+pattern+"\n");
let text="baababa";
console.log("Text: " + text + "\n");
let concStr=pattern+"$"+text;
console.log("Concatenated String: " + concStr + "\n");

//finding z array calc

let z=[];
z.push("x");
let pos1=0,pos2=1;
let count=0;
for(let i=1;i<concStr.length;i++){
    count=0;
    pos1=0;
    pos2=i;
    while (pos1 < concStr.length && pos2 < concStr.length){
        if(concStr[pos1]==concStr[pos2]){
            count++;
            pos1++;
            pos2++
        } else {
            break;
        }
    }
    z.push(count);
}
// console.log(z);


//finding the position in normal text of the matched pattern
let res;
for(let i=0;i<z.length;i++){
    if(z[i]==pattern.length){
        res=(i-pattern.length-1);//i - pattern len - $;
    }
}
console.log("The pattern is found at the index of text:"+res);