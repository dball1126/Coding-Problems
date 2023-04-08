/**
 * Keep dividing the number by 2.
 * Times the number by itself to find the result.
 * Use Binary Search.
 * Time Complexity log(n)
 * Space Complexity O(1)
 */

var isPerfectSquare = function(num) {
    let [s, e] = [0, num]

    while (s <= e) {
        let m = Math.floor((e - s) / 2) + s;

        if (m * m === num) {
            return true;
        } else if (m * m > num) {
            // go left
            e = m - 1;
        } else {
            // go right
            s = m + 1;
        }
    }
    return false;
};

console.log(isPerfectSquare( num = 14))