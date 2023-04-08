/**
 * Time: O(n * log(n))  (sorting)
 * Space: O(n)   (output array)
 */
var merge = function(n) {
    if (n.length === 1) return n
    n.sort((a, b) => a[0] - b[0])
    let result = [], low = n[0][0], high = n[0][1]
    for (let i = 1; i < n.length; i++) {
        let low2 = n[i][0]
        
        if (high < low2) {
            result.push([low, high])
            low = n[i][0]
            high = n[i][1]

        } else {
            high = Math.max(n[i][1], high)
        }
        if (i === n.length-1) {
            result.push([low, high])
        }
    }
    return result;
};