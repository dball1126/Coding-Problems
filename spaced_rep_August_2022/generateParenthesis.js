
var generateParenthesis = function(n) {
    if (!n) return []
    let max = 2 * n, str = "()", result = new Set();

    const backtrack = (i, curr, open, close) => {
        if (close > open || open > max/2 || close > max/2) return;
        if (curr.length >= max && open === close && !result.has(curr)) {
            return result.add(curr)
        }
        if (curr.length >= max || i >= 2) return;

        for (let j = i; j < 2; j++) {
            let newOpen = open, newClose = close
            if (str[j] === "(") {
                newOpen++
            } else {
                newClose++
            }
            backtrack(0, curr + str[j], newOpen, newClose)
        }
    }
    backtrack(0, "", 0, 0)
    return Array.from(result)
};

console.log(generateParenthesis(3))