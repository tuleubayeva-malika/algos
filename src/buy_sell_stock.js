// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

/**
 * @param {number[]} prices
 * @return {number}
 * перебрать массив
 * узнать профит i с каждым эл-м
 * сравнить с maxProfit
 * и вернуть maxProfit
 */
 var maxProfit = function(prices) {
    let maxProfit = 0;
    for (let i = 0; i <= prices.length; i++) {
        for (let j = i + 1; j <= prices.length; j++) {
            if (prices[j] - prices[i] > maxProfit) {
                maxProfit = prices[j] - prices[i];
            }
        }
    } 
    return maxProfit;
};

module.exports = {maxProfit};