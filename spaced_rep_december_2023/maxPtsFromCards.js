/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
var maxScore = function(cardPoints, k) {
    const n = cardPoints.length;
    if (k >= n) return cardPoints.reduce((acc, v) => acc + v)
    let left = cardPoints.map(a => a), right = cardPoints.map(a => a)
    let max = 0;

    for (let i = k-1; i >= 0; i--) {
        if (i+1 < k) {
            left[i] += left[i+1]
        }
    }
    for (let i = n - k; i < n; i++) {
        if (i-1 > n-k) {
            right[i] += right[i-1]
        }
    }
    let s = 0, e = n-1
    while (k > 0) {
        if (left[s] >= right[e]) {
            max += cardPoints[s]
            s++
        } else {
            max += cardPoints[e]
            e--
        }
        k--
    }
    return max
};
console.log(maxScore(cardPoints = [1,2,3,4,5,6,1], k = 3))