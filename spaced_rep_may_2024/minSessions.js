/**
 * @param {number[]} tasks
 * @param {number} sessionTime
 * @return {number}
 */
var minSessions = function(tasks, sessionTime) {
    const n = tasks.length;
    const done = (1 << n) - 1, memo = new Map();

    const dp = (mask, t) => {
        if (mask === done) return 0;
        let ans = Infinity, k = mask +':' + t;
        if (memo.has(k)) return memo.get(k);
        if (t !== sessionTime) {
            ans = dp(mask, sessionTime) + 1
        }

        for (let i = 0; i < n; i++) {
            let v = tasks[i]
            if (t -v >= 0 && (mask & (1 << i)) === 0) {
                ans = Math.min(ans,
                    dp(mask | (1 << i), t - v))
            }
        }
        memo.set(k, ans)
        return ans
    }
    return dp(0, 0)
};
console.log(minSessions(tasks = [1,2,3,4,5], sessionTime = 15))