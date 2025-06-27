/**
 * @param {string} order
 * @param {string} s
 * @return {string}
 */
// Hash Map
// Time: O(n)...for the input string...order is constant at 26
// Space: O(1)...constant at size 26;
var customSortString = function(order, s) {
    let charMap = new Map(), result = "";
    for (let i = 0; i < s.length; i++) {
        if (!charMap.has(s[i])) charMap.set(s[i], 0);
        charMap.set(s[i], charMap.get(s[i]) + 1);
    }
    for (let i = 0; i < order.length; i++) {
        if (charMap.has(order[i])) {
            let value = charMap.get(order[i]);
            while (value !== 0) {
                result += order[i];
                value--;
            }
            charMap.delete(order[i]);
        }
    }
    for (let [k, v] of charMap) {
        while (v !== 0) {
            result += k;
            v--;
        }
    }
    return result;
};
console.log(customSortString(order = "bcafg", s = "abcd"))