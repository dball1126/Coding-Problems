const maxSubArray = (n) => {
    let max = n[0]
    for (let i = 1; i < n.length; i++) {
        n[i] = Math.max(n[i], n[i] + n[i-1])
        max = Math.max(max, n[i])
    }
    return max
}