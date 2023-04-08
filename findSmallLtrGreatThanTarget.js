/**
 * Binary Search
 * Use charCodeAt() to get the character of the code.
 * Find the target code + 1. Get the next letter past the target unless it's the last letter...wrap around
 * Stay in the range.
 * Time O(log(n))
 * Space O(1)
 */

 // You can just use letters "a" < "b" = true

var nextGreatestLetter = function(letters, target) {
    let [s, e, result] = [0, letters.length-1, letters[0]]

    // target = target.charCodeAt() + 1; // find one above the target...which is the real result we want
    // if (target > 122) target = 97 // wrap around

    while (s <= e) {
        let m = Math.floor((e - s) / 2) + s;
        // let c = letters[m].charCodeAt();

        if (letters[m] === target) {
            return letters[m]
        } else if (letters[m] > target) {
            result = letters[m]
            // go left
            e = m - 1;
        } else {
            // go right
            s = m + 1;
        }
    }
    return result;
};

console.log(nextGreatestLetter( letters = ["c","f","j"], target = "g"))