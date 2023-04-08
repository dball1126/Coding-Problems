/**
 * Use edges and while loop to find target
 * Time: log(n)
 * Space: O(1)
 */
const search = (a, t) => {
    let [s, e] = [0, a.length-1]

    while (s <= e) {
        let m = Math.floor((e - s) / 2) + s;
        if (a[m] === t) return m;
        
        if (a[s] <= a[m]) {
            if (t < a[m] && t >= a[s] && m-1 >= 0) {
                e = m - 1;
            } else {
                s = m + 1;
            }
        } else {
            if (t > a[m] && t <= a[e] && m+1 <= a.length-1) {
                s = m + 1
            } else {
                e = m - 1;
            }
        }
    }
    return -1
}

console.log(search([1,2,3,4,5,0], 0))