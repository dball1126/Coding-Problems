/** Bit Manipulation
 * Time: O(n) ...n is the biggest string out of the two inputs
 * Space: O(1)
 */
var findTheDifference = function(s, t) {
    let diff
    for (let i = 0; i < t.length; i++) {
        const tEle = t[i].charCodeAt();
        const sEle = s[i] ? s[i].charCodeAt() : ""
        let val = tEle ^ sEle
        diff ^= val
    }
    return String.fromCharCode(diff)
};




console.log(findTheDifference("ad", "azd"))


// a = "97"
// b = "98"
// c = "99"