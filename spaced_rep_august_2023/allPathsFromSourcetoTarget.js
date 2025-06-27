// Time and Space: O((2^n) * n)
var allPathsSourceTarget = function(graph) {
    if (!graph.length) return []
    const paths = [], queue = [[[0]]]
    let len = graph.length-1
    while (queue.length) {
        let levels = queue.shift();
        const newLevel = []
        for (let level of levels) {
            const v = level[level.length-1]
            if (v === len) {
                paths.push(level);
                continue;
            }
            const arr = graph[v]
            if (arr) {
                for (let edge of arr) {
                    newLevel.push([...level, edge])
                }
            }
        }
        if (newLevel.length) queue.push(newLevel)
    }
    return paths;
};

console.log(allPathsSourceTarget([[1,2],[3],[3],[]]))