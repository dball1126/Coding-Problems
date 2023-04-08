var maxProfit = function(p) {
    let max = 0, prev = p[0]

    for (let i = 1; i < p.length; i++) {
        if (prev > p[i]) {
            prev = p[i]
        } else {
            max = Math.max(max, p[i] - prev)
        }
    }
    return max
};

console.log(maxProfit([7,6,4,3,1]))