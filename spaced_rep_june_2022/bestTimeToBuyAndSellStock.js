/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(a) {
    if (!a || a.length <= 1) return 0
    let max = 0
    for (let i = 1; i < a.length; i++) {
        max = Math.max(max, a[i] - a[i-1])
        a[i] = Math.min(a[i], a[i-1])
    }
    return max
};