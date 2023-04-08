/**
 * Sort
 * Do two loops. On the second loop use two pointer method
 * Use map, keys are the values in string format, value is the array
 * Time O(n*2)
 * Space O(n)
 */
var threeSum = function(nums) {
    nums.sort();
    const map = new Map();

    for (let i = 0; i < nums.length-2; i++) {
        let [l , r] = [i+1, nums.length-1];
        // 2 pointer
        while (r > l) {
            let [n1, n2, n3] = [nums[i], nums[l], nums[r]]
            let key = n1 + '' + n2 + '' + n3;
            let sum = n1+n2+n3;
            if (sum === 0 && !map.has(key)) {
                map.set(key, [n1,n2,n3])
                r--
                l++
            } else {
                if (sum > 0) {
                    r--
                } else {
                    l++
                }

            }

        }
    }
    return Array.from(map.values())
}

console.log(threeSum( nums = [-1,0,1,2,-1,-4,-2,-3,3,0,4]))