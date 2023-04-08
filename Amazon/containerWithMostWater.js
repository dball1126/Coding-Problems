/**
 * Use sliding window. Start at the each edge and set max variable to -Infinity.
 * Time O(n)
 * Space O(1)
 */
var maxArea = function(h) {
    let max = -Infinity;
    let [l, r] = [0, h.length-1];

    while ( l < r) {
        const area = r - l;
        const height = Math.min(h[r], h[l])
        max = Math.max(max, height * area);
        if (h[r] > h[l]) {
            l++
        } else {
            r--
        }
    }
    return max;
};

console.log(maxArea(height = [5,8,1,9]))