//buy and sell stock 1
let prices = [7, 1, 5, 3, 6, 4];
let minArr=prices.slice();
minArr=minArr.sort((a,b)=>a-b);
let curr;
// console.log(prices);
// console.log(minArr);
let indexAtP;//p=prices array
let max=[],finalmax=[];
for(let i=0;i<minArr.length;i++){
    max=[];
    curr=minArr[i];
    indexAtP=prices.indexOf(curr);
    for(let j=indexAtP+1;j<prices.length;j++){
        if(prices[j]>prices[indexAtP]){
            max.push(prices[j] - prices[indexAtP]);
        }
    }
    finalmax.push(Math.max(...max));
    //console.log(max);
    
}
let res = Math.max(...finalmax);
if(res===Infinity || res===-Infinity){
    console.log(0);
}else{
    console.log(res);
}