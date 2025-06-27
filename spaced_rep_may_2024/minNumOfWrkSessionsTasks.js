/**
 * @param {number[]} tasks
 * @param {number} sessionTime
 * @return {number}
 */
var minSessions = function(tasks, sessionTime) {

    const n = tasks.length, memo = new Map()
    const done = 2**n - 1

    const dp = (mask, curr) => {
        if (mask === done) return 1;
        let ans = 0, ans2 = Infinity
        if (curr <= 0) {
            ans = 1;
            curr = sessionTime;
        }

        for (let i = 0; i < n; i++) {
            let t = tasks[i];

            if ((mask & (1 << i)) === 0) {
                ans2 = Math.min(ans2, dp(mask | (1  << i), curr - t))
            }
        }
        return ans2 + ans
    }
    return dp(0, sessionTime)
};
console.log(minSessions([3,1,3,1,1], sessionTime = 8))
