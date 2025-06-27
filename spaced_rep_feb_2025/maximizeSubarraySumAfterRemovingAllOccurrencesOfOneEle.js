/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubarraySum = function(nums) {
    let maxSum = -Infinity, set = new Set();
    nums.forEach(v => set.add(v));

    const compute = (val) => {
        let currSum = -Infinity, max =-Infinity
        
        nums.forEach((v, i) => {
            if (v !== val){
                currSum = Math.max(currSum + v, v)
                max = Math.max(max, currSum)
            } 
        })
        return max;
    }  

    maxSum = Math.max(maxSum, compute(-Infinity))
    Array.from(set).forEach(v => {
        maxSum = Math.max(maxSum, compute(v));
    })
    return maxSum;
};
console.log(maxSubarraySum([-2,-2,-2]

))