/**
 * @param {string} num
 * @param {number} target
 * @return {string[]}
 */
var addOperators = function(num, target) {

    const result = []
    const backtrack = (idx, t, str) => {
        if (t === target) {
            return result.push(str)
        }
        if (t > target || idx+1 >= num.length) return ""
        
        let v1 = parseInt(num[idx]), v2 = parseInt(num[idx+1])
        if (idx !== 0) v1 = t
        if (idx === 0) str = v1
        console.log("Str " + str , " t " + t)
            backtrack(idx+1, v1 + v2, str + "+" + v2)
      
            backtrack(idx+1, v1 - v2, str + "-" + v2)
        
            backtrack(idx+1, v1 * v2, str + "*" + v2)
        
    }
    backtrack(0, 0, "")

    return result;
};
console.log(addOperators("232", target = 8))