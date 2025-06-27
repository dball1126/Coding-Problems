
// Time: O(n*2)
// Space: O(n)
var longestPalindrome = function(str) {
    if (str.length === 0) return ""
    let longest = str[0], len = str.length
    if (str[0] === str[1]) longest = str[0] + str[1]

    for (let i = 0; i < str.length; i++) {
        let s = i, e = i, even = true, odd = true, oddStr = str[i], evenStr = ''
        if (i+1 < len && str[i] === str[i+1]) {
            evenStr = str[i] + str[i+1]
        } else { even = false;}

        while (even || odd) {

            if (odd && s-1 >= 0 && e+1 < len && str[s-1] === str[e+1]) {
                oddStr = str[s-1] + oddStr + str[e+1]
            } else {odd = false}

            if (even && s-1 >= 0 && e+2 < len && str[s-1] === str[e+2]) {
                evenStr = str[s-1] + evenStr + str[e+2]
            } else {even = false}

            if (oddStr.length > longest.length) longest = oddStr
            if (evenStr.length > longest.length) longest = evenStr
            s--; e++;
        }
    }
    return longest
};
console.log(longestPalindrome("ddabba"))//= abba
