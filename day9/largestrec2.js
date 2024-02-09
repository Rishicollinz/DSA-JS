
let histogram = [2, 1, 5, 6, 2, 3];

let maxArr = [];
let max;

    let res = calculateWidth(histogram);
    let multi = multiplyWidthHistogram(histogram, res);
    max = Math.max(...multi);
    maxArr.push(max);

console.log("Maximum Rectangle:")
console.log(Math.max(...maxArr));



function calculateWidth(arr) {
    const widthArr = [];

    for (let i = 0; i < arr.length; i++) {
        let width = 1; // Width starts at 1

        if (arr[i] !== 0) {
            // Check forward
            let j = i + 1;
            while (j < arr.length && arr[i] <= arr[j]) {
                width++;
                j++;
            }

            // Check backward
            j = i - 1;
            while (j >= 0 && arr[i] <= arr[j]) {
                width++;
                j--;
            }
        } else {//for 0
            width = 1;
        }

        widthArr.push(width);
    }


    return widthArr;
}

function multiplyWidthHistogram(arr1, arr2) {
    let res = [];
    for (let i = 0; i < arr1.length; i++) {
        res.push(arr1[i] * arr2[i]);
    }
    return res;
}