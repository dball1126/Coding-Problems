/**
 * @param {string} num
 * @param {number} target
 * @return {string[]}
 */
var addOperators = function(num, target) {
    
    const result = [];

    const backtrack = (idx, curr, prev, str) => {
        if (idx >= num.length) {
            if (curr === target) return result.push(str);
            return;
        }
        let v = parseInt(num[idx]);

        if (!str.length) {
            backtrack(idx+1, v, v, num[idx]);
        } else {
            backtrack(idx+1, curr, prev, str + num[idx]);
            backtrack(idx+1, curr + v, v, str + "+"+ v);
            backtrack(idx+1, curr - v, -v, str + "-" + v);
            backtrack(idx+1, (curr - prev) +( prev * v) , prev * v, str + "*" + v);
        }
    }
    backtrack(0,0,0,"")
    return result;
};
console.log(addOperators(num = "123", target = 6));