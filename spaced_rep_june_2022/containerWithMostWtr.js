/**
 * Two Pointer:
 * Time: O(n), Space: O(1)
 */
var maxArea = function(a) {
    let max = 0, s = 0, e = a.length-1
    while (s < e) {
        let mx = Math.min(a[s], a[e])
        max = Math.max(max, mx * (e-s))
        if (a[s] <= a[e]) {
            s++
        } else {
            e--
        }
    }
    return max
};