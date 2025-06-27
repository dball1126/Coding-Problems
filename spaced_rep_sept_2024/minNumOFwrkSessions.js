/**
 * @param {number[]} tasks
 * @param {number} sessionTime
 * @return {number}
 */
// Bitmasking DP Pattern
// Top-Down Dynamic Programming
// Time and Space: O(n * m)...n for tasks and m for sessionTime
var minSessions = function(tasks, sessionTime) {
    const n = tasks.length, memo = new Map();
    let done = (1 << n) - 1; 

    const dp = (mask, time) => {
        if (mask === done) return 0
        let k = mask + ":" + time;
        if (memo.has(k)) return memo.get(k)
        let min = Infinity

        if (time !== sessionTime) {
            min = dp(mask, sessionTime) + 1
        }

        for (let i = 0; i < n; i++) {
            let newTime = time - tasks[i]
            if ((mask & (1 << i)) === 0) {
                if (newTime >= 0) {
                    min = Math.min(min, dp(mask | (1 << i), newTime))
                }
            }
        }
        memo.set(k, min)
        return min
    }
    return dp(0, sessionTime) + 1
};
console.log(minSessions(tasks = [1,2,3], sessionTime = 3)) // = 2


