/**
 * Binary search and use two pointer to deal with rotated array.
 * Time: log(n) + O(1) = log(n)
 * Space: O(1)
 */
var search = function(n, t) {
    let [l, r] = [0, n.length-1]
    let p = -1;

    while (l <= r) {
        let m = l + Math.floor((r - l) / 2);
        if (n[m] === t) return p = m;

        if (n[l] <= n[m]) {
            if (t < n[m]  && t >= n[l]) {
                r = m - 1
            } else {
                l = m + 1
            }
        } else if (n[m] <= n[r]) {
            if (t > n[m] && t <= n[r]) {
                l = m + 1
            } else {
                r = m -1;
            }
        }
    }
    return p;
};

console.log(search(nums = [5,1,3], target = 3))