/**
 * @param {string} s
 * @param {number[]} spaces
 * @return {string}
 */
// Two pointers
// Time: O(n)
// Space: O(1)
var addSpaces = function(s, spaces) {
    let i = 0, j = 0, result = "";
    while (i < s.length || j < spaces.length) {
        if (j >= spaces.length) {
            result += s[i];
            i++;
        } else {
            while (i !== spaces[j]) {
                result += s[i];
                i++
            }
            result += " ";
            j++;
        }
    }
    return result;
};
console.log(addSpaces(s = "icodeinpython", spaces = [1,5,7,9]))
