let nums = [2,7,3,1,4,2,1,8];
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
console.log(lootArr);