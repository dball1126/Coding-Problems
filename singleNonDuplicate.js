

var singleNonDuplicate = function(nums) {
    if (nums.length <= 1) return nums;
    let n = undefined;

    const find = (max, min) => {
        if (max < min) return
        let idx = Math.floor((max - min) / 2)+min
        let [num, lNum, rNum] = [nums[idx], nums[idx-1], nums[idx+1]]
        if (num !== lNum && num !== rNum) {
            return n = num;
        }

        if (num === lNum) {
            find(idx-2, min)
        } else {
            find(idx-1, min)
        }

        if (num === rNum) {
            find(max, idx+2)
        } else {
            find(max, idx+1)
        }
    }

    find(nums.length, 0)
    return n;
};

console.log(singleNonDuplicate([3,3,7,7,11,11,12]
    ))