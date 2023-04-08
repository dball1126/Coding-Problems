// Adjacency List and indegrees Map
// Time and Space: O(E))
var findJudge = function(n, trust) {
    if (!trust.length & n === 1) return 1;
    if (!trust.length) return -1

    let adjMap = new Map(), indegrees = new Map(), judge = undefined;

    for (let [x, y] of trust) {
        if (!adjMap.has(x)) adjMap.set(x, [])
        adjMap.get(x).push(y)

        if (!indegrees.has(y)) indegrees.set(y, 0)
        indegrees.set(y, indegrees.get(y) + 1)
        if (indegrees.get(y) === n-1) judge = y
    }

    if (indegrees.get(judge) === n-1 && !adjMap.has(judge)) return judge
    return -1
};
console.log(findJudge( n = 3, trust = [[1,3],[2,3],[3,1]])) // = 3
