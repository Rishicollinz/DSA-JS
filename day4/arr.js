let arr=[12,10,8,7,6,5,2,1];
let start=1;
arr.sort((a, b) => a - b);
console.log(arr);
let max=arr[arr.length-1];
let res;
for(let i=start;i<=arr.length;i++){
    if(arr[i-1]!==i){
        res=i;
        break;
    }
}
console.log(res);
