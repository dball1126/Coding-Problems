/**
 * @param {number[]} tasks
 * @param {number} sessionTime
 * @return {number}
 */
// Dynamic Programming with Bit Mask
// Time & Space: O(n * 2^n)...n is the number of tasks
// var minSessions = function(tasks, sessionTime) {
//     const n = tasks.length, memo = new Map()
//     const done = 2**n - 1

//     const dp = (mask, curr, time) => {
//         if (mask === done) return time
        
//         let k = mask + ":" + curr
//         if (memo.has(k)) return memo.get(k)
//         let ans = Infinity
//         for(let i = 0; i < n; i++) {
//             const v = tasks[i]
//             if ((mask & (1 << i)) === 0) {
//                 if ((curr - v) >= 0) {
//                     if (done === (mask | (1 << i))) {
//                         ans = Math.min(ans, time + 1)
//                     } else {
//                         ans = Math.min(ans, dp(mask | (1 << i), curr - v, time))
//                     }
//                 } else {
//                     let offset = (curr - v )=== 0 ? 1 : 2
//                     ans = Math.min(ans, dp(mask | (1 << i), sessionTime, time + offset))
//                 }
//             }
//         }
//         memo.set(k, ans)
//         return ans
//     }
//     let result = dp(0, sessionTime, 0)
//     console.log(memo)
//     return result
// };

var minSessions = function(tasks, sessionTime) {
    let n = tasks.length
    let memo = new Map();
    let done = (1 << n) - 1
    const dp = (mask, left) => {
        if (mask === done) return 0
        let k = mask + ":" + left
        if (memo.has(k)) return memo.get(k)
        let ans = Infinity
        if (left !== sessionTime) {
            ans = dp(mask, sessionTime) + 1
        }

        for(let i = 0; i < n; i++) {
            let v = tasks[i]
            if (left >= v && (mask & (1 << i)) === 0) {
                ans = Math.min(ans, dp(mask | (1 <<i), left - v))
            }
        }
        memo.set(k, ans)
        return ans
    }
    return dp(0, 0)
}
// console.log(minSessions( tasks = [1,2,3], sessionTime = 3))

console.log(minSessions( tasks = [3,3,3,3,4,5,5,5,7,9]
    , sessionTime = 12))
