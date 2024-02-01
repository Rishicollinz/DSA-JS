//leetcode 122 optimised
let prices = [7, 1, 5, 3, 6, 4];
if (prices.length < 2) {
    console.log(0);
} else {
    let max = 0;

    for (let i = 0; i < prices.length; i++) {
        if (prices[i] > prices[i - 1]) {
            max += prices[i] - prices[i - 1];
        }
    }
    console.log(max);
}
