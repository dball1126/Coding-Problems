/**
 * @param {string} input
 * @return {number}
 */
var lengthLongestPath = function(input) {
    
    input = input.split("\n\t")
    let max = 0

    const dfs = (idx, count) => {
        if (idx >= input.length) return;
        let curr = input[idx], newCurr = "", isFile = false

        for (let i = 0; i < curr.length; i++) {
            if (curr[i] === ".") isFile = true;

            if (curr[i] === "/") {
                i++
            } else {
                newCurr++
            }
        }
        if (isFile) {
            max = Math.max(max, count + newCurr.length)
        } else {
            dfs(idx+1, count + 1 + newCurr.length)
        }
    }

    dfs(0,0)
    return max
};
console.log(lengthLongestPath())