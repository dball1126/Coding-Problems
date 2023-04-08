/**
 * binary search
 * use edge values
 * time log(n)
 * space O(1)
 */
var search = function(a, t) {
    let [s, e] = [0, a.length-1]
    if (a[0] === t) return 0;
    while (s <= e) {
        let m = Math.floor((e - s) / 2) + s
        if (a[m] === t) return m
        if (a[s] === t) return s
        if (a[e] === t) return e

        if (a[s] < a[m]) {
            if (t < a[m] && t >= a[s]) {
                e = m - 1
            } else {
                s = m + 1
            }
        } else {
            if (t > a[m]) {
                s = m + 1
            } else {
                e = m - 1
            }
        }
    }
    return -1
}

console.log(search([4,5,6,7,8,1,2,3]
    ,2))