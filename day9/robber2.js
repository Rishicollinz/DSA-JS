let nums = [2, 7, 3, 1, 4, 2, 1, 8];

let firstArr=nums.slice(1);
let val1=loot(firstArr);

let secondArr=[];
for(let i=0;i<nums.length-1;i++){
    secondArr.push(nums[i]);
}
let val2=loot(secondArr);

console.log(Math.max(val1,val2));



function loot(nums){
    let val;
    let lootArr = [];
    if (nums.length == 1) {
        lootArr.push(nums[0]);
    } else if (nums.length == 2) {
        lootArr.push(Math.max(nums[0], nums[1]));
    } else {
        lootArr.push(nums[0]);
        lootArr.push(Math.max(nums[0], nums[1]));
        for (let i = 2; i < nums.length; i++) {
            let val = lootArr[i - 2] + nums[i];
            lootArr.push(Math.max(val, lootArr[i - 1]));
        }
    }
    return(lootArr[lootArr.length-1]);
}
