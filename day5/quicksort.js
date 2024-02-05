function partition(arr, start, end) {
    const pivot = arr[end];
    let i = start - 1;

    for (let j = start; j <= end - 1; j++) {
        if (arr[j] < pivot) {
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]]; 
            console.log(arr);// Swap elements
        }
    }

    [arr[i + 1], arr[end]] = [arr[end], arr[i + 1]]; // Swap elements
    console.log(arr+"i");
    return i + 1;
}

function quickSort(arr, start, end) {
    if (start < end) {
        const p = partition(arr, start, end);
        quickSort(arr, start, p - 1);
        quickSort(arr, p + 1, end);
    }
}

function printArr(arr) {
    console.log(arr.join(' '));
}

const array = [24, 9, 29, 14, 19, 27];
const length = array.length;

console.log("Before sorting array elements are - ");
printArr(array);

quickSort(array, 0, length - 1);

console.log("\nAfter sorting array elements are - ");
printArr(array);
//console.log(array);
