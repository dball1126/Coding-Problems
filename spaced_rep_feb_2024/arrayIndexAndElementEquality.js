// Binary Search
// Time: O(log(n))
// Space: O(1)
function indexEqualsValueSearch(arr) {
    let l = 0, r = arr.length-1, result = Infinity

    while (l <= r) {
        let m = Math.floor((r + l) / 2)

        if (arr[m] === m) {
            result = Math.min(result, m)
            r = m - 1
        } else if (arr[m] < m) {
            l = m + 1
        } else {
            r = m - 1
        }
    }
    return result === Infinity ? -1 : result;
}

console.log(indexEqualsValueSearch([-8,0,2,5]))

