var addOperators = function(num, target) {
    let result = [], len = num.length;

    const backtrack = (idx, curr, prev, str) => {
        if (idx >= len) {
            if (curr === target) return result.push(str)
            return
        }

        let v = 0
        for (let i = idx; i < len; i++) {
            v = (v * 10) + parseInt(num[i])

            if (!str.length) {
                backtrack(i+1, v, v, v + "")
            } else {
                backtrack(i+1, curr + v, v, str + "+" + v)
                backtrack(i+1, curr - v, -v, str + "-" + v)
                backtrack(i+1,(curr - prev)+ prev * v, prev * v, str + "*" + v  )
            }
        }
    }
    backtrack(0,0,0,"")
    return result
};
console.log(addOperators( num = "123", target = 6))