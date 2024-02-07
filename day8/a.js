let arr=[1,2,3,4,5];
let r=arr.reduce((sum,curr)=>{
    return sum+=curr;
},0)
console.log(r);