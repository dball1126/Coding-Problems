/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
// Union Find
// Time: O((n * l) + (n * (l * log(l))))
// Space: O(n * l)
var accountsMerge = function(accounts) {
    let n = accounts.length;
    const root = [...(new Array(n)).keys()]
    const rank = [...(new Array(n)).fill(1)]
    const find = (i) => root[i] = (root[i] === i ? i : find(root[i])) // path compression // Amortized time
    const union = (i , j) => { // union find
        let p1 = find(i), p2 = find(j)

        if (p1 === p2) return;
        const acc1 = accounts[p1], acc2 = accounts[p2]
        if (rank[p1] > rank[p2]) {
            acc1.push(...acc2.slice(1))
            root[p2] = p1
        } else if (rank[p2] > rank[1]) {
            acc2.push(...acc1.slice(1))
            root[p1] = p2
        } else {
            acc1.push(...acc2.slice(1))
            root[p2] = p1
            rank[p1]++ // is one of the keys in union by rank
        }

    }

    const createEmailSet = (arr) => { // O(l)
        const set = new Set()
        for (let i = 1; i < arr.length; i++) {
            set.add(arr[i])
        }
        return set
    }

    for (let i = 0; i < n; i++) {  // O((n * l)^2)...n for groups and l for longest word in emails
        const idx = find(i)
        const acc = accounts[idx]
        let emailSet = createEmailSet(acc)
        
        for (let j = 0; j < n; j++) {
            const idx2 = find(j)
            const acc2 = accounts[idx2]
            if (acc[0] !== acc2[0]) continue;
            for (let k = 1; k < acc2.length; k++) {
                if (emailSet.has(acc2[k])) {
                    union(idx, idx2)
                    break;
                }
            }   
        }
    }
    const map = new Map();
    for (let i = 0; i < n; i++) {  // O(n * (l * log(l)))
        let idx = root[i]
        if (!map.has(idx)) {
            const arr = accounts[idx]
            const emails = Array.from(createEmailSet(arr)).sort()
            const newArr = [arr[0], ...emails]
            map.set(idx, newArr)
        }
    }
    return Array.from(map.values())
};

console.log(accountsMerge([
    ["David","David0@m.co","David4@m.co","David3@m.co"],
    ["David","David5@m.co","David5@m.co","David0@m.co"],
    ["David","David1@m.co","David4@m.co","David0@m.co"],
    ["David","David0@m.co","David1@m.co","David3@m.co"],
    ["David","David4@m.co","David1@m.co","David3@m.co"]]))