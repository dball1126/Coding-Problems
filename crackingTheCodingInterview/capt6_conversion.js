const conversion = (n, m) => {
    let max = Math.max(n, m)
    let min = Math.min(n, m)
    let count = 0;
    while (max !== 0) {
        let mX = max & 1
        let mI = min & 1
        if (mX !== mI || min === 0) count++
        max >>= 1
        min >>= 1
    }
    return count;
}

console.log(conversion(29,0))