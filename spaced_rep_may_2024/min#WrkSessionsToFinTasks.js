/**
 * @param {number[]} tasks
 * @param {number} sessionTime
 * @return {number}
 */
var minSessions = function(tasks, sessionTime) {
    let n = tasks.length;
    let done = (1 << n) - 1

    const dp = (mask, time) => {
        if (mask === done) return 0
        let ans = Infinity
        // if (sessionTime === time) {
        //     ans = dp(mask, time)  + 1
        // }

        for(let i = 0; i < n; i++) {
            let v = tasks[i]
            if ((mask & (1 << i)) !== 1) {
                if (time - v <= 0) {
                    ans = Math.min(ans, dp(mask | (1 << i), sessionTime) + 1)
                } else {
                    ans = Math.min(ans, dp(mask | (1 << i), time - v))
                }
            }
        }
        console.log(ans)
        return ans
    }
    let result  = dp(0, sessionTime)

    return result
};

console.log(minSessions(tasks = [1,2,3], sessionTime = 3))