// Two pointer
// Time: O(n)
// Space: O(1)
var predictTheWinner = function(nums) {
    if (nums.length <= 1) return true;
    let s = 0, e = nums.length-1, p1 = 0, p2 = 0, turn = 1
    
    while (s <= e) {
        if (e-s <= 2) {
            if (nums[e] >= nums[s]) {
                if (turn === 1) {
                    p1+= nums[e]
                } else {
                    p2 += nums[e]
                }
                e--;
            } else {
                if (turn === 1) {
                    p1+= nums[s]
                } else {
                    p2 += nums[s]
                }
                s++
            }
        } else {
            if (nums[s] + nums[e-1] >= nums[e] + nums[s+1]) {
                if (turn === 1) {
                    p1+= nums[s]
                } else {
                    p2 += nums[s]
                }
                s++;
            } else {
                if (turn === 1) {
                    p1+= nums[e]
                } else {
                    p2 += nums[e]
                }
                e--;
            }
        }
        turn = (turn === 1 ? 0 : 1)
    }
    return p1 >= p2
};
console.log(predictTheWinner([1,5,2,4,6]))

// [1,5,233,7]