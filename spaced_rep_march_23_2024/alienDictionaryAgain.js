/**
 * @param {string[]} words
 * @return {string}
 */
var alienOrder = function(words) {
    let indegrees = new Map()
    let adjList = new Map();
    let result = ""
    for (let i = 0; i < words.length; i++) { // build adjList and indgrees map
        let word = words[i]

        for (let c of word) {
            if (!adjList.has(c)) adjList.set(c, [])
            if (!indegrees.has(c)) indegrees.set(c, 0)
        }
    }



    for (let i = 1; i < words.length; i++) {  
        let w1 = words[i], w2 = words[i-1]

        if (w2.length > w1.length && w2.startsWith(w1)) { // check prefix
            return ""
        }
    
        for (let j = 0; j < (Math.min(w1.length,w2.length)); j++) {
            let c1 = w1[j], c2 = w2[j]
            if (c1 !== c2) { // order found
                indegrees.set(c1, indegrees.get(c1) + 1)
                adjList.get(c2).push(c1)
                break
            }
        }
    }

    let queue = []
    let visited = new Set();
    for (let [k, v] of indegrees) {
        if (v === 0) queue.push(k)
    }
    while (queue.length) {
        let char = queue.shift();
        result += char;
        arr = adjList.get(char)
        visited.add(char)
        for (let c of arr) {
            indegrees.set(c, indegrees.get(c) - 1)
            if (indegrees.get(c) === 0 && !visited.has(c)) queue.push(c)
        }
    }

    return result;
};
console.log(alienOrder(words = ["z","x","z"]))