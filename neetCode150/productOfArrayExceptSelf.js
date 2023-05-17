// Time: O(n + n) = O(n)
// Space: O(n + n) = O(n)
var productExceptSelf = function(nums) {
    const dpBefore = [...new Array(nums.length)]    
    const dpAfter = [...new Array(nums.length)]
    
    let i = 0, j = nums.length-1
    while (j >= 0 && i <= nums.length-1) {
        let sumBefore = nums[i], sumAfter = nums[j]
        if (dpBefore[i-1] !== undefined) sumBefore *= dpBefore[i-1]
        if (dpAfter[j+1] !== undefined) sumAfter *= dpAfter[j+1]
        dpBefore[i] = sumBefore
        dpAfter[j] = sumAfter
        i++; j--;
    }

    for (let i = 0; i < nums.length; i++) {
        let sum1 = dpBefore[i-1],  sum2 = dpAfter[i+1]

        if (sum1 !== undefined && sum2 !== undefined) {
            nums[i] = sum1 * sum2
        } else if (sum1 !== undefined) {
            nums[i] = sum1
        } else {
            nums[i] = sum2;
        }
    }

    return nums;
};

console.log(productExceptSelf([1,2,3,4])) // = [24,12,8,6]