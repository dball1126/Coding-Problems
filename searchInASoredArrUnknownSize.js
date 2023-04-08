/**
 * Call the first number. Use this number to determine the search range.
 * If the number is negative its Math.abs(n) + target.
 * We have to imagine there might be target numbers in the array + the negative numbers.
 * Use that search range for Binary Search.
 * Time Complexity log(n)
 * Space complexity O(1)
 */

var search = function (reader, target) {
    let [e, s] = [reader.get(0), 0]
    e < 0 ? e = Math.abs(e) + target : e = target

    while (s <= e) {
        let m = Math.floor((e - s) / 2) + s;
        let g = reader.get(m);

        if (g === target) {
            return m
        } else if (g > target) {
            // go left
            e = m - 1;
        } else {
            // go right
            s = m + 1;
        }
    }

    return -1;
};