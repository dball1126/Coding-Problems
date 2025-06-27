/**
 * @param {number[]} tasks
 * @param {number} sessionTime
 * @return {number}
 */
// Bitmasking DP
// Top-Down Dynamic Programming
// Time and Space: O(n * m)...n for tasks length and m for sessionTime
var minSessions = function(tasks, sessionTime) {
    let n = tasks.length, memo = new Map()
    const done = (1 << n) - 1 // this is out visited metric (array/hashmap)

    const dp = (mask, time) => {
        if (mask === done) return 0
        let k = mask + ":" + time;
        if (memo.has(k)) return memo.get(k)
        
        let minimumSessions = Infinity
        if (time !== sessionTime) {
            minimumSessions = dp(mask, sessionTime) + 1
        }
        for (let i = 0; i < n; i++) {
            let v = tasks[i]
            if (( mask & (1 << i)) === 0) {
                if (time - v >= 0) {
                    minimumSessions = Math.min(minimumSessions, dp((mask | (1 << i)), time - v))
                }
            }
        }
        memo.set(k, minimumSessions)
        return minimumSessions
    }
    return dp(0, 0)
}
console.log(minSessions([9,6,9], sessionTime = 14)) // = 3

