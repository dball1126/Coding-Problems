// Add any extra import statements you may need here

// Hash Map
// Time: O(n + m)...n for s and m for t
// Space: O(m)
function matchingPairs(s, t) {
    let charMap = new Map(), pairs = 0, maxPairs = 0, matches = new Map(), hasTwoMatches = false
    for (let i = 0; i < t.length; i++) {
        const c = t[i]
        if (!charMap.has(c)) charMap.set(c, []);
        charMap.get(c).push(i)

        if (c === s[i]) pairs++

        if (s[i] === t[i]) {
            if (!matches.has(s[i])) matches.set(s[i], 0)
            matches.set(s[i], matches.get(s[i]) + 1)
            if (matches.get(s[i]) >= 2) hasTwoMatches = true;
        }
    }
    if (hasTwoMatches) return pairs
    if (pairs === s.length) pairs -= 2

    for (let j = 0; j < s.length; j++) {
        const v = s[j];
        
        if (charMap.has(v)) {
            let arr = charMap.get(v)

            idx = arr[0] !== j ? arr[0] : arr[1]
            let p = 0
            if (idx === j || s[j] === t[j]) continue;
            if (s[idx] === t[j]) p++
            if (s[j] === t[idx]) p++         
            maxPairs = Math.max(maxPairs, pairs + p)
        }
    }
    return maxPairs || pairs
}
console.log(matchingPairs(s = "mno",
t = "mno"))
// a d b c
// a: 0
// d: 1
// c: 2
// d: 3
// pairs = 2

// a continue
// idx = 3         "d" === "d" pairs + 1
//                 "b" === "b" pairs + 1

  
  
  