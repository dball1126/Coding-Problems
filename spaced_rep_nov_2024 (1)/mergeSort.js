/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    if (nums.length <= 1) return nums;

    let m = Math.floor(nums.length /2)
    let left = [], right = [], mid = []

    for (let i = 0; i < nums.length; i++) {
        const v = nums[i];
        
        if (v < nums[m]) {
            left.push(v)
        } else if (v > nums[m] ){
            right.push(v)
        } else {
            mid.push(v)
        }
    }
    if (!left.length || !right.length) {
        left.push(...mid, ...right)
        return left
    }
    left.push(...mid)
    return merge(sortArray(left), sortArray(right))
};

const merge = (n1, n2) => {
    if (!n1.length || !n2.length) {
        n1.push(...n2)
        return n1
    }
    let result = [], i = 0, j = 0
    while (i < n1.length || j < n2.length) {
        let v1 = i < n1.length ? n1[i] : Infinity
        let v2 = j < n2.length ? n2[j] : -Infinity
        if (v1 <= v2) {
            result.push(n1[i]);
            i++;
        } else {
            result.push(n2[j]);
            j++;
        }
    }
    return result;
}
console.log(sortArray([3,23,52,1,2,6,8]))