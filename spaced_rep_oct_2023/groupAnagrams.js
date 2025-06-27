/**
 * @param {string[]} strs
 * @return {string[][]}
 */
// Time: O((n^2) * w)...n for words...w for word length
// Space: O(n)
var groupAnagrams = function(strs) {
    let n = strs.length;
    const rank = new Array(n).fill(1), root = new Array(n)
    strs.forEach((st , i) => root[i] = i)

    const find = (nde) => {
        if (root[nde] === nde) return root[nde]
        root[nde] = find(root[nde])
        return root[nde]
    }
    const union = (n1, n2) => {
        let p1 = find(n1), p2 = find(n2)
        if (p1 === p2) return;

        if (rank[p1] > rank[p2]) {
            root[p2] = root[p1]
        } else if (rank[p2] > rank[p1]) {
            root[p1] = root[p2]
        } else {
            rank[p1]++
            root[p2] = root[p1]
        }
    }

    for (let i = 0; i < n-1; i++) {
        const map = new Map(), s = strs[i];

        for (let c of s) {
            if (!map.has(c)) map.set(c, 0)
            map.set(c, map.get(c) + 1)
        }

        for (let j = i+1; j < n; j++) {
            let copy = new Map(map), wrd = strs[j]
            if (find(i) === find(j)) continue
            if (s.length !== wrd.length) continue;
            for (let c of wrd) {
                if (!copy.has(c)) break;
                copy.set(c, copy.get(c) - 1)
                if (copy.get(c) === 0) copy.delete(c)
            }
            if (copy.size === 0) {
                union(i, j)
            }
        }
    }
    const result = new Map()
    for(let i = 0; i < n; i++) {
        let w = root[i]
        if (!result.has(w)) result.set(w, [])
        result.get(w).push(strs[i])
    }
    return Array.from(result.values())
};

console.log(groupAnagrams( [""]))