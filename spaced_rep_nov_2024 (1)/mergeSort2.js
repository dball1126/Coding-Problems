/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    if (nums.length <= 1) return nums
    let m = Math.floor(nums.length / 2)
    let left = [], right = []
    for (let i = 0; i < nums.length; i++) {
        if (i < m) {
            left.push(nums[i])
        } else {
            right.push(nums[i])
        }
    }
    return merge(sortArray(left), sortArray(right))
};
const merge = (n1, n2) => {
    let result = [], i = 0, j = 0, n = n1.length, m = n2.length
    if (!n) return n2
    if (!m) return n1
    while (i < n || j < m) {
        let v1 = i < n ? n1[i] : Infinity
        let v2 = j < m ? n2[j] : Infinity
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
console.log(sortArray([7,5,2,23,2,1,3,5,5,13]))