var sortArray = function(nums) {
    if (!nums.length || nums.length === 1) return nums;

    let pivot = Math.floor(nums.length / 2)
    let left = []
    let right = []
    let flag = true;
    let tracker = 1
    let mid = []
    for (let i = 0; i < nums.length; i++) {
        const n = nums[i];
        if (nums[i+1] != undefined && !(nums[i+1] > n)) {
            flag = false
        }
        if (n < nums[pivot]) {
            left.push(n)
        } else if (n > nums[pivot]) {
            right.push(n)
        } else {
            mid.push(n)
        }

        // n < nums[pivot] ? right.push(n) : left.push(n)
    }
    if (flag) {
        return nums
    }
    return [...sortArray(left)].concat([...mid]).concat([...sortArray(right)])
};

console.log(sortArray([1,3,4,0,0]))