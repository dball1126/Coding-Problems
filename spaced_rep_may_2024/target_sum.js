/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// var findTargetSumWays = function(nums, target) {
    
//     let n = nums.length
//     const memo = new Map()
//     const dp = (i, tgt) => {
//         if (i >= n) return tgt === target ? 1 : 0
//         let k = i + ":" + tgt
//         let v1 = 0
//         if (memo.has(k)) return memo.get(k)

//         let way1 = dp(i+1, tgt - nums[i]), way2 = dp(i+1, tgt + nums[i])

//         memo.set(k, way1 + way2 + v1)
//         return way1 + way2
//     }
//     return dp(0, 0)
// };


var findTargetSumWays = function(nums, target) {
    
    let n = nums.length
    const memo = new Map()

    for (let num = n; num >= 0; num--) {
        for (let tgt = target; tgt >= 0; tgt--) {
            let k = num + ":" + tgt
            if (num === n) {
                let v1 = tgt === target ? 1 : 0
                memo.set(k, v1)
            } else {
                let way1 = tgt - nums[num], way2 = tgt + nums[num]
                if (num+1 === n) {
                    way1 = way1 === target ? 1 : 0
                    way2 = way2 === target ? 1 : 0
                    memo.set(k, way1 + way2)
                } else { // get from map
                    let k1 = (num+1) + ":" + way1, k2 = (num+1) + ":" + way2
                    let v1 = memo.get(k1) || 0, v2 = memo.get(k2) || 0

                    memo.set(k, v1 + v2)
                } 
            }
        }
    }
console.log(memo)
    return memo.get(0 + ":" + 0)
};

console.log(findTargetSumWays(nums = [1,1,1,1,1], target = 3))