/**
 * @param {number} n
 * @return {string[]}
 */

const generateParenthesis = (n) => {

    const memo = [...new Array(n+1)]

    const dp  = (nde) => {
        if (nde <= 0) return ['']
        if (memo[nde]) return memo[nde]
        let result = []

        for (let i = 0; i < nde; i++) {
            let left = dp(i), right = dp(nde - i - 1)
            
            for (let l of left) {
                for (let r of right) {
                    result.push("(" + l + ")" + r)
                }
            }
        }
        return memo[nde] = result
    }

    return dp(n)
};
console.log(generateParenthesis(3))


// const memo = new Map()

// const dfs = (nde) => {
//     if (nde <= 0) return [""]
//     if (memo[nde]) return memo[nde]

//     let result = []
//     for (let i = 1; i <= nde; i++) {
//         let left = ["(", ...dfs(i)], right = [")", ...dfs(nde - i - 1)]

//         for (let l of left) {
//             for (let r of right) {
                
//             }
//         }
//     }
// }