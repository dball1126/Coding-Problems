/**
 * @param {string[]} strs
 * @return {string[][]}
 */
// Hashing
// Time: O(N^2 * L^2)
// Space: O(N)
var groupAnagrams = function(strs) {
    let grouped = new Set(), n = strs.length, groups = [], map = new Map()
    for (let i = 0; i < n; i++) {
        if (map.has(strs[i])) continue;
        let m = new Map();
        for (let j = 0; j < strs[i].length; j++) {
            const c = strs[i][j];
            if (!m.has(c)) m.set(c, 0)
            m.set(c, m.get(c) + 1)
        }
        map.set(strs[i], m)
    }
    for (let i = 0; i < n; i++) {
        const w = strs[i];
        if (grouped.has(i)) continue;
        let group = [w]; grouped.add(i)
        for (let j = i+1; j < n; j++) {
            if (grouped.has(j) || w.length !== strs[j].length) continue;
            let copy = new Map(map.get(w))
            for (let x = 0; x < strs[j].length; x++) {
                let char = strs[j][x]
                if (!copy.has(char)) break;
                copy.set(char, copy.get(char) - 1)
                if (copy.get(char) === 0) copy.delete(char)
            }
            if (!copy.size) {group.push(strs[j]); grouped.add(j)}
        }
        groups.push(group)
    }
    return groups
};

console.log(groupAnagrams(strs = ["eat","tea","tan","ate","nat","bat"]))