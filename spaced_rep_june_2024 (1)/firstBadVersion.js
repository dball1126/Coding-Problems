/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
// Binary Search
// Time: O(log(n))
// Space: O(1)
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let s = 0, e = n, version = null
        while (s <= e) {
            let m = Math.floor((e + s) / 2)
            let val = isBadVersion(m)
            if (val) {
                version = m;
                e = m - 1
            } else {
                s = m + 1
            }
        }
        return version;
    };
};

