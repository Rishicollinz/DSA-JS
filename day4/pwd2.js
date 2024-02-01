//this is password problem
let time = 0;
let pwdstr = [1,4,4,3,2,6];
let currNum, prevNum;
for (let i = 0; i < pwdstr.length; i++) {
    currNum = pwdstr[i];
    if(currNum>=1 && currNum<=9){
        if (i == 0) {
            //for first index = time 1
            time += 1;
        } else if(currNum==prevNum){
            //for same num
            time+=0;
        }else {
            // for adjacent or not
            if ((currNum % 3 == 0) && (currNum-1==prevNum || currNum+3==prevNum || currNum-3==prevNum)) {
                //this is for last col
                time+=1;
            } else if ((currNum % 3 == 1) && (currNum + 1 == prevNum || currNum + 3 == prevNum || currNum - 3 == prevNum)) {
                //this is for first col
                time+=1;
            } else if ((currNum % 3 == 2) && ((currNum - 1 == prevNum) || (currNum + 3 == prevNum) || (currNum - 3 == prevNum) || (currNum+1==prevNum))) {
                //this is for sec col
                time+=1;
            }else{
                //this is the only non adjacent
                time+=2;
            }
        }
        prevNum = currNum;
        console.log("Time : "+time);
    }
}
console.log(time);
