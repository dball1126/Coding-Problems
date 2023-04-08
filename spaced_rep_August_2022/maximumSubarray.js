const maxsubarray = (n) => {
    if (n.length === 1) return n[0]
    let max = n[0]
    for (let i = 1; i < n.length; i++) {
        n[i] = Math.max(n[i], n[i], n[i] + n[i - 1])
        max = Math.max(max, n[i])
    }
    return max
}