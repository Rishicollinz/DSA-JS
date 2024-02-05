//this is selection sort
let arr=[99,1,66,63,72,198];
let curr,temp,min=arr[0];
for(let i=0;i<arr.length;i++){
    curr=arr[i];
    min=curr;
    temp=i;
    for(let j=i+1;j<arr.length;j++){
        if(min>arr[j]){
            min=arr[j];
            temp=j;
        }
    }
    //swap
    arr[temp]=curr;
    arr[i]=min;
    console.log("min:" + min + "arr:" + arr);
    
}
console.log(arr);