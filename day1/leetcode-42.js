height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];

var trap = function (height) {
    let left = 0, right = height.length - 1;
    let leftMax = height[0], rightMax = height[height.length - 1];
    let water = 0;
    while (left < right) {
        if (leftMax < rightMax) {
            left++;
            if (leftMax < height[left]) {
                leftMax = height[left];
            } else {
                water += leftMax - height[left];
            }
        } else {
            right--;
            if (rightMax < height[right]) {
                rightMax = height[right];
            } else {
                water += rightMax - height[right];
            }
        }
    }
    console.log(water) ;
};