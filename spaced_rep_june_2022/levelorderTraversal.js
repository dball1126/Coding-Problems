var levelOrder = function(n) {
    if (!n) return []
    let queue = [[n]], result = []
    while (queue.length) {
        let curr = queue.shift();
        queue.push([...curr])
        let level = []

        curr.forEach(a => {
            if (a.left)level.push(a.left)
            if (a.right)level.push(a.right)
        })
        if (level.length) queue.push(level)
    }
    return result;
}