// Backtracking // Dynamic Programming
// Time: O(2^n * n)...n for length of input...* n for copying/checking palindrome
// Space: O(n + n) = O(n)...n for map and n for recursive stack
var partition = function(s) {
    const partitions = [], n = s.length, strMap = new Map();

    const isPalindrome = (str) => {
        if (strMap.has(str)) return strMap.get(str);
        let s = 0, e = str.length-1, result = true
        while (s < e) {
            if (str[s] !== str[e]) {
                result = false; break;
            }
            s++; e--;
        }
        strMap.set(str, result)
        return strMap.get(str)
    }
    const backtrack = (idx, curr, parts) => {
        if (idx >= n) {
            const newParts = []
            for(let p of parts) {
                if (!isPalindrome(p)) break;
                newParts.push(p)
            }
            if (newParts.length === parts.length) {
                partitions.push([...parts])
            }
            return;
        }
        for (let j = idx; j < n; j++) {
            curr += s[j];
            parts.push(curr)
            backtrack(j+1, "", parts)
            parts.pop();
        }
    }
    backtrack(0, "", [])
    return partitions
};
console.log(partition("aab"))//=[ [ 'a', 'a', 'b' ], [ 'aa', 'b' ] ]
