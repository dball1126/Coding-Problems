const divide = (v, d) => {
    let negative = false, c = 0
    if ( v < 0) {
        negative = true
        v = Math.abs(v)
    }
    if (d < 0) {
        negative = true;
        d = Math.abs(d)
    }
    while (v >= d) {
        v -= d
        c++
        if (c > 2**31 -1 ) {
            if (negative) return -(2**31 -1)
            return (2**31 -1)
        }
    }
    if (negative) return -(c)
    return c
}

console.log(divide(10, 3))