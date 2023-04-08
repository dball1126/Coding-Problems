/**
 * Start at 0.
 * For every row at one to the result. Subtract this number from our target.
 * Keep track of the number of rows
 * return result;
 * Space Complexity is O(1)
 */

var arrangeCoins = function(n) {
    let [count, rows] = [0, 0];

    while (n > 0) {
        count += 1;
        if (count <= n) {
            rows += 1;
        }
        n -= count;
    }

    return rows;
};