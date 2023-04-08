// Check prev and curr during search.
// Time: O(log(n))
// Space: O(1)
var solution = function(isBadVersion) {
    return function(n) {
        let s = 1, e = n;

        while (s <= e) {
            let m = Math.floor((e - s) / 2) + s;

            let curr = isBadVersion(m)
            let prev = false;
            if (m - 1 >= 1) prev = isBadVersion(m - 1)
            if (curr && !prev) {
                return m
            } else if ((curr && prev) || (!curr && prev)) {
                e = m -1
            } else {
                s = m + 1
            }
        }
        return 1;
    }
};
