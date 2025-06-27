/**
 * @param {string[]} strs
 * @return {string[][]}
 */

// Hash Map
// Time: O(n * m)...n for # of words and m for longest word
// Space: O(n)
var groupAnagrams = function(strs) {
    const map = new Map()
 
    for (let s of strs) {
        let count = 0, sum = 0
        for (let i = 0; i < s.length; i++) {
            let left = "a".charCodeAt()
            let v = s[i].charCodeAt()
            count += ((v - left))
            sum += v
        }
        if (!map.has(count)) map.set(count, [])
        map.get(count).push(s)
    }

    return Array.from(map.values())
};
console.log(groupAnagrams(["cab","tin","pew","duh","may","ill","buy","bar","max","doc"]))
// = [ [ 'eat', 'tea', 'ate' ], [ 'tan', 'nat' ], [ 'bat' ] ]
