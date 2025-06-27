/**
 * @param {number[]} tasks
 * @param {number} sessionTime
 * @return {number}
 */
var minSessions = function(tasks, sessionTime) {
    let n = tasks.length
    let done = 2**n -1
    let memo = new Map()

    const dp = (mask, curr, time) => {
        if (mask === done) return time + 1;

        let ans = Infinity
        for (let i = 0; i < n; i++) {
            let v = tasks[i]
            if ((mask & (1 << i)) === 0) {
                if (curr - v > 0) {
                    ans = Math.min(ans, dp(mask | (1 << i), curr - v, time))        
                } else {
                    ans = Math.min(ans, dp(mask | (1 << i), curr - v, time + 1))
                }
            }
        }
        return ans
    }
    const result = dp(0, sessionTime, 0)

    return result;
};
console.log(minSessions([3,1,3,1,1], sessionTime = 8))