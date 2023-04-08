/**
 * if we find the value go left otherwise go left
 * Time log(n)
 * Space O(1)
 */

var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let [found, s, e] = [-1, 1, n]
        
        while (s <= e) {
            const m = Math.floor((e - s) / 2) + s

            if (isBadVersion(m)) {
                found = m;
                e = m - 1
            } else {
                s = m + 1
            }
        }
        return found
    };
};