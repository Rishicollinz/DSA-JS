//this is password problem
let time = 0;
let pwdstr = [1,4,4,3,2,6];
let currNum, prevNum;
for (let i = 0; i < pwdstr.length; i++) {
    currNum = pwdstr[i];
    if(currNum>=1 && currNum<=9){
        if (i == 0) {
            time += 1;
        } else if(currNum==prevNum){
            time+=0;
        }else {
            if ((currNum % 3 == 0) && (currNum-1==prevNum || currNum+3==prevNum || currNum-3==prevNum)) {
                time+=1;
            } else if ((currNum % 3 == 1) && (currNum + 1 == prevNum || currNum + 3 == prevNum || currNum - 3 == prevNum)) {
                time+=1;
            } else if ((currNum % 3 == 2) && ((currNum - 1 == prevNum) || (currNum + 3 == prevNum) || (currNum - 3 == prevNum) || (currNum+1==prevNum))) {
                time+=1;
            }else{
                time+=2;
            }
        }
        prevNum = currNum;
        console.log("Time : "+time);
    }
}
console.log(time);
