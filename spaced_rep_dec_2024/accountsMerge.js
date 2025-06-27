/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
// Union Find
// Time: O((n * k) * log(n * k))...n for accounts, k for the longest account
// Space: O(n * k)
var accountsMerge = function(accounts) {
    let acctsLen = accounts.length, emails = new Map()
    let roots = [...(new Array(acctsLen)).keys()];
    let ranks = [...new Array(acctsLen)].fill(1);
    const findRoot = (n) => roots[n] === n ? n : findRoot(roots[n])// path compression
    const union = (n1, n2) =>{ // union by rank
        let p1 = findRoot(n1), p2 = findRoot(n2);
        if (p1 === p2) return;
        if (ranks[p1] > ranks[p2]) {
            roots[p2] = p1
        } else if (ranks[p2] > ranks[p1]) {
            roots[p1] = p2
        } else {
            roots[p2] = p1
            ranks[p1]++
        }
    }
    for (let i = 0; i < acctsLen; i++) { // union find
        for (let j = 1; j < accounts[i].length; j++) {
            let email = accounts[i][j];
            if (!emails.has(email)) {
                emails.set(email, i)
            } else {
                union(i, emails.get(email))
                let root = findRoot(i)
                emails.set(email, root)
            }
        }
    }
    let groups = new Map(), result = []
    for (let [email, root] of emails) { // group emails by root
        let newRoot = findRoot(root)
        if (!groups.has(newRoot)) groups.set(newRoot, new Set())
        groups.get(newRoot).add(email)
    }
    for (let [root, set] of groups) { // group name and sorted emails
        result.push([accounts[root][0], ...Array.from(set).sort()])
    }
    return result;
};
console.log(accountsMerge(accounts = [["John","johnsmith@mail.com","john_newyork@mail.com"],
["John","johnsmith@mail.com","john00@mail.com"],["Mary","mary@mail.com"],["John","johnnybravo@mail.com"]]))
// = [["John","john00@mail.com","john_newyork@mail.com","johnsmith@mail.com"],["Mary","mary@mail.com"],["John","johnnybravo@mail.com"]]