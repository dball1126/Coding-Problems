/** two loops + two pointer
 * Time: O(n*3)
 * Space: O(1) if you don't count the output array
 */
 var fourSum = function(nums, target) {
    nums.sort((a, b) => a - b)
    const sums = []
    for (let i = 0; i < nums.length-3; i++) {
        while (i !== 0 && nums[i-1] === nums[i]) i++

        for (let j = i+1; j < nums.length-2; j++) {
            while (j !== i+1 && nums[j-1] === nums[j]) j++
            let k = j+1, e = nums.length-1

            while (k < e) {
                let v1 = nums[i], v2 = nums[j], v3 = nums[k], v4 = nums[e]
                const sum = v1 + v2 + v3 + v4;

                if (sum === target) {
                    sums.push([v1,v2,v3,v4])
                    k++
                    while (nums[k-1] === nums[k]) k++
                } else if (sum < target){
                    k++
                    while (nums[k-1] === nums[k]) k++
                } else {
                    e--
                    while (nums[e] === nums[e+1]) e--
                }
            }
        }
    }
    return sums
};


console.log(fourSum(nums = [2,2,2,4,4,4,6,6,6], target = 12
    ))