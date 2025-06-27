const amazon2 = (s, x , y) => {
    let n = s.length
    let memo = [...new Array(n+1)].map(a =>
                [...new Array(n+1)].map(a =>
                [...new Array(n+1)]))

    const dp = (idx, one, zero) => {
        if (idx >= n) return 0;
        if (memo[idx][one][zero] !== undefined) {
            console.log(`%cMEMO: ` + memo[idx][one][zero], "color:blue")
            return memo[idx][one][zero]
        }

        let min = 0
        
        if (s[idx] === "1") {
            min = (x * zero) + dp(idx+1, one+ 1, zero)
        } else if (s[idx] === "0") {
            min = (one * y) + dp(idx+1, one, zero + 1)
        } else {
            min = Math.min(
                ((x * zero) + dp(idx+1, one+ 1, zero)),
                (one * y) + dp(idx+1, one, zero + 1)
            )
        }
        
        return memo[idx][one][zero] = min
    }
    
    return dp(0,0,0)
}
console.log(amazon2("!01!!01", 2, 3))