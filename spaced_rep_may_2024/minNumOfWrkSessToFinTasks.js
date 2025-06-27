/**
 * @param {number[]} tasks
 * @param {number} sessionTime
 * @return {number}
 */
var minSessions = function(tasks, sessionTime) {
    tasks.sort((a, b) => b - a)
    const n = tasks.length;
    let sessions = 0, curr = 0

    for (let i = 0; i < n; i++) {
        curr += tasks[i]
        if (curr >= sessionTime) {
            sessions++
            curr %= sessionTime
        }
        if (i === n-1 && curr > 0) sessions++
    }

    return sessions
};

console.log(minSessions(tasks = [1,2,3,4,5], sessionTime = 15))