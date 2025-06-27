/**
 * @param {number[]} tasks
 * @param {number} sessionTime
 * @return {number}
 */
// Dynamic Programming with BitMasking
// Time: O(n * 2^n)...n for tasks and k for session time
// Space: O(2^n)
var minSessions = function(tasks, sessionTime) {
    const n = tasks.length, memo = new Map()
    const done = (1 << n) - 1

    const dp = (mask, time) => {
        if (done === mask) return 0
        let k = mask + ":" + time
        if (memo.has(k)) return memo.get(k)
        let ans = Infinity
        if (time !== sessionTime) {
            ans = dp(mask, sessionTime) + 1
        }

        for (let i = 0; i < n; i++) {
            let v = tasks[i]
            if ((time - v) >= 0 && ((mask & (1 << i)) === 0)) {
                ans = Math.min(ans, dp(mask | (1 << i), time - v)) 
            }
        }
        memo.get(k, ans)
        return ans
    }
    return dp(0, 0)
};
console.log(minSessions(tasks = [1,2,3], sessionTime = 3))