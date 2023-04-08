var guess = function(num) {}
/**
 * BinarySearch. 
 * Time log(n)
 * Space O(1)
 */
var guessNumber = function(n) {
    let [left, right] = [1, n];

    while (left <= right) {
        let mid = Math.floor((right - left) / 2) + left
        let num = guess(mid)

        if (num === 0) {
            return num;
        } else if (num === 1) {
            left = mid + 1;
        } else {
            right = mid - 1
        }
    }
};


// 4,5,6,7,8,0,1,2,3       3       