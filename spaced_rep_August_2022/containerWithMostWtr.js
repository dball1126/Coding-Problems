/**
 * two pointer
 * Time O(n)
 * Space: O(1)
 */
 var maxArea = function(h) {
    let l = 0, r = h.length-1
    max = Math.min(h[0], h[1])

    while (l < r) {
        let m = Math.min(h[l], h[r])
        max = Math.max(max, m * (r-l))
        if (h[l] <= h[r]) {
            l++
        } else {
            r--
        }
    }
    return max
};