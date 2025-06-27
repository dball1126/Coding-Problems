
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function(nums, target) {
    let sum = nums.reduce((acc, v) => acc + v)

    sum += target
    if (sum & 1) return 0
    let totalwAys = 0

    for (let c of nums) {
        let memo = new Map()
        memo.set(0, 1)
        
        for (let s = 1; s <= target; s++) {
            
            let prev = memo.has(s + c) ? memo.get(s + c) : 0
            let prev2 = memo.has(s - c) ? memo.get(s - c) : 0
            // console.log("C: " + c)
            // console.log("S: " + s)
            // console.log("prev: " + prev)
            // console.log("prev2: " + prev2)
            if (!memo.has(s)) memo.set(s, 0) 
                memo.set(s, memo.get(s) + prev + prev2)
        }
        // console.log(memo)
        totalwAys += memo.get(target)
        let test = ''
    }
    console.log(memo)
    return memo.get(0)
};
console.log(findTargetSumWays([1,1,1,1,1],3))