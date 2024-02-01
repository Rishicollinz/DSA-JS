//leetcode 121 optimised
let prices = [7,1,5,3,6,4];
let minPrice = prices[0];
let maxProfit = 0;
for (let i = 1; i < prices.length; i++) {
    let currentPrice = prices[i];

    if (currentPrice < minPrice) {
        minPrice = currentPrice;
    } else {
        let profit = currentPrice - minPrice;
        maxProfit = Math.max(maxProfit, profit);
    }
}

console.log(maxProfit);
