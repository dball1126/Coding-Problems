/**
 * @param {number[]} tasks
 * @param {number} sessionTime
 * @return {number}
 */
var minSessions = function(tasks, sessionTime) {
    let len = tasks.length;
    let done = (2^len) - 1;

    const dp = (idx, visited, time) => {
        if (visited === done) return time;

        let next = dp(idx+1, visited | (1 << idx), sessionTime) + 1
        let min = Infinity

        for (let i = 0; i <= len; i++) {
            let vis = (1 << i), c = 0
            let newTime = time - nums[i]
            if (visited & vis === 0) {
                if (newTime <= 0) {
                    c = 1;
                    newTime += sessionTime
                }
                min = Math.min(min, dp(idx+1, visited | (1 << idx), newTime) + c)
            }
        }
        return Math.min(min, next)
    }
    return dp(0,0,sessionTime)
};
console.log(minSessions(tasks = [1,2,3], sessionTime = 3))
