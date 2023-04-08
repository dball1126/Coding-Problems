/**
 * Use array as final result.
 * Find index of target. If no target find the index where it should belong.
 * Get x elements before index + x elements including the num after
 * Space O(k) k elements
 * Time log(n)
 */
var findClosestElements = function(arr, k, x) {
    let [s, e, found, result] = [0, arr.length-1, false, []];
    
    const bSearch = (s, e) => {
        let idx = -1;
        while (s <= e) {
            let m = Math.floor((e - s) / 2) + s;

            if (arr[m] === x) {
                found = true;
                return m
            } else if (arr[m] > x) {
                e = m - 1;
            } else {
                s = m + 1;
            }

            if (s > e) {
                idx = Math.floor((e - s) / 2) + s
            }
        }
        return idx;
    }

    let idx = bSearch(s, e);

    if (found) {
        result.push(...arr.slice(idx - (k - idx), idx))
        if (result.length !== k) {
            result.push(...arr.slice(idx, idx + (k - result.length)))
        }
    } else {
        if (idx === -1) return arr.slice(0, k)
        result.push(...arr.slice(k - idx, idx-1))
        if (result.length !== k) {
            result.push(arr.slice(idx, k - result.length))
        }
    }

    return result
    console.log(idx)
};

console.log(findClosestElements( rr = [1,2,3,4,5], k = 4, x = -1))