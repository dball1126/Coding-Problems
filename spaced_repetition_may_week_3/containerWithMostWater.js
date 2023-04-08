// two pointer
// time O(n)
// space O(1)

const maxArea = (a) => {
    let [s, e, max] = [0, a.length-1, 0]
    while (s < e) {
        max = Math.max(max, (e-s) * Math.min(a[s], a[e]))
        if (a[s] <= a[e]) {
            s++
        } else {
            e--
        }
    }
    return max;
}