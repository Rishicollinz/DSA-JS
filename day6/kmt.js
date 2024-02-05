//this is kmt algo for pattern matching;
let text="aabaabaacaabaac";
let pattern="aabaacaabaa";

let lps=[];
lpsGenerator(pattern,lps);
console.log("LPS:");
console.log(lps);
console.log();

kmtSearch(text,pattern,lps);

function lpsGenerator(pattern,lps){
    lps.push(0);
    let i=0;//val of arr=lps
    let m=pattern.length;//end
    let j=1;//start
    while(j<m){
        if(pattern[j]==pattern[i]){
            i++;
            lps[j]=i;
            j++;
        }else{
            if(i!=0){
                i--;
            }else{//i==0
                lps[j]=i;
                j++;
            }
        }
    }
}

function kmtSearch(txt,pat,lps){
    let i=0,j=0;
    let N=txt.length,M=pat.length;
    while ((N - i) >= (M - j)) {
        if (pat.charAt(j) == txt.charAt(i)) {
            j++;
            i++;
        }
        if (j == M) {
            console.log(i + " " + j);
            console.log("Found pattern " + "at index " + (i - j) + "\n");
            j=lps[j-1];
        }

        // mismatch after j matches
        else if (i < N && pat.charAt(j) != txt.charAt(i)) {
            if (j != 0)
                j=lps[j-1];
            else
                i++;
        }
    }
}