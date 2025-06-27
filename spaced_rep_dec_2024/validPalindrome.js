
// Two-Pointer Technique
// Time: O(n)
// Space: O(1)
var isPalindrome = function(s) {
    let low = 0, high = s.length-1

    const isAlphaNumeric = (v) => {
        v = v.toLowerCase()
        if (v === " ") return false;
        return v >= "0" && v <= "9" || v >= "a" && v <= "z"
    }
    while (low < high) {
        if (!isAlphaNumeric(s[low])) {
            low++
        } else if (!isAlphaNumeric(s[high])) {
            high--
        } else if (s[low].toLowerCase() !== s[high].toLowerCase()) {
            return false;
        } else {
            low++; high--;
        }
    }
    return true;
};
console.log(isPalindrome( " "))