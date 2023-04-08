const search = (a, t) => {
    let s = 0, e = a.length-1
    while (s <= e) {
        let m = Math.floor((e-s)/2) +s
        if (a[m] === t) return m;

        if (a[m] > a[e]) {
            if (t < a[m] && t >= a[s]) {
                e = m - 1
            } else {
                s = m + 1
            }
        } else {
            if (t > a[m] && t <= a[e]) {
                s = m + 1
            } else {
                e = m - 1
            }
        }
    }
    return -1
}

console.log(search([4,5,6,7,8,1,2,3]
    ,3))