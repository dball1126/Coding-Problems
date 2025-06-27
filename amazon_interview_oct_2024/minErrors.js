const minErrors = (str, x, y) => {

    let n = str.length


    const memo = [...new Array(n+1)].map(a => [...new Array(n+1)].fill(0))
    for (let i = n-1; i >= 0; i--) {
        let v = str[i]

        let next = Infinity
        if (v === "0") {
            next = memo[i+1][1] * x
            memo[i][1] = 1 + memo[i+1][1]
        } else if (v === "1") {
            next = memo[i+1][0] * y
            memo[i][0] = 1 + memo[i+1][0]
        } else {
            next = Math.min(next = memo[i+1][1] * x, next = memo[i+1][0] * y)
            memo[i][0] = 1 + memo[i+1][0]
            memo[i][1] = 1 + memo[i+1][1]
        }
        console.log(next)
    }

    return Math.min(memo[0][1], memo[0][0])
}
console.log(minErrors("101!1", 2, 3))