let arr = [24, 9, 29, 14, 19, 27];
let left = 0;
let right = arr.length - 1;
quick(arr, left, right);
console.log(arr);

function quick(arr, left, right) {
    if (left < right) {
        let pivot = sorts(arr, left, right);
        quick(arr, left, pivot - 1);
        quick(arr, pivot + 1, right);
    }
}

function sorts(arr, left, right) {
    let pivot = arr[left];
    let originalLeft = left;
    let originalRight = right;

    while (left < right) {
        while (left < right && arr[right] >= pivot) {
            right--;
        }
        if (left < right) {
            arr[left] = arr[right];
            left++;
        }
        while (left < right && arr[left] <= pivot) {
            left++;
        }
        if (left < right) {
            arr[right] = arr[left];
            right--;
        }
    }
    arr[left] = pivot;
    return left;
}
