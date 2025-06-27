/**
 * @param {string} num
 * @param {number} target
 * @return {string[]}
 */
var addOperators = function(num, target) {
    
    const memo = [...new Array(num.length + 1)].map(a => [...new Array(parseInt(num) + 1)])

    const dp = (idx, val, combos) => {

        if (idx >= num.length) return val === target ? combos : []
        if (memo[idx][val] !== undefined) return memo[idx][val]
        
        if (idx === 0) {
            memo[idx][val] = dp(idx+1, parseInt(num[idx]), [num[idx]])
            return memo[idx][val]
        }
        let v1 = dp(idx + 1,  val + parseInt(num[idx]), combos.map(c => c + "+" + num[idx])) || []
        let v2 = dp(idx + 1,  val - parseInt(num[idx]), combos.map(c => c + "-" + num[idx])) || []
        let v3 = dp(idx + 1,  val * parseInt(num[idx]), combos.map(c => {
            let endVal = parseInt(c[c.length-1]) * num[idx]
            return c.slice(0, c.length-1) + endVal
        })) || []

        let newCombos = []
        if (v1?.length ) {
            combos.forEach(c => newCombos.push(c + "+" + num[idx]))
        }
        if (v2?.length) {
            combos.forEach(c => newCombos.push(c + "-" + num[idx]))

        }
        if (v3?.length) {
            
            combos.forEach(c => {
                let endVal = parseInt(c[c.length-1]) * num[idx]
                newCombos.push(c.slice(0, c.length-1) + endVal)
            })
        }

        return memo[idx][val] = [...v1, ...v2, ...v3]
    }

    let result = dp(0,0, [""])
    return result
};
console.log(addOperators(m = "232", target = 8))