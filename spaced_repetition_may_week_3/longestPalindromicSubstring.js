
/**
 * loop and two pointer, max variable
 * Time: O(n2)
 * Space: O(1)
 */
 var longestPalindrome = function(s) {
    let max = s[0];
    const expandAroundCenter = (l, r) => {
        while (l >= 0 && r <= s.length-1) {
            if (s[l] === s[r]) {
                if (max.length < r - l + 1) {
                    max = s.substring(l, r + 1)
                }
                l--;
                r++;
            } else {
                break;
            }
        }
    }
    for (let i = 1; i < s.length; i++) {

        expandAroundCenter(i-1, i+1)
        if (s[i] === s[i-1]) {
            if (max.length < 2) max = s[i-1] + s[i] 
            expandAroundCenter(i-2, i+1)
        }
    }
    return max;
}