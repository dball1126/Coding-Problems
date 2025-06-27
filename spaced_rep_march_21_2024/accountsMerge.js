/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
// // Union Find - Disjoint Set.
// // Time: O((n*m)^2 + (n * log(m)))...n being number of accounts...m being the longest email in the accounts
// // log(m) is because we have to sort
// // Space: O(n * m)
var accountsMerge = function(accounts) {
    const n = accounts.length;
    const root = [...(new Array(n)).keys()]
    const rank = [...(new Array(n)).keys()]
    const find = (i) => root[i] = i === root[i] ? i : find(root[i]) // path compression
    const union = (i, j, group, nameSet, newGroup) => { // union find runs in amortized time with union by rank and path compression
        let p1 = find(i), p2 = find(j)

        if (p1 === p2) return;
        if (rank[p1] > rank[p2]) {
            // perform merge
            updateEmails(group, nameSet, newGroup)
            root[p2] = p1
        } else if (rank[p2] > rank[p1]) {
            let data = accounts[p2]
            for (let [name, ...emails] of accounts[p1]) {
                data = data.concat(emails)
            }

            root[p1] = p2
        } else {
             // perform merge
             updateEmails(group, nameSet, newGroup)
            root[p2] = p1
            rank[p1]++
        }
    }

    const getEmails = (arr) => {
        let set = new Set()
        for (let i = 1; i < arr.length; i++) { // iterate over groups
            set.add(arr[i])
        }
        return set
    }

    const updateEmails = (group, nameSet, newGroup) => {
        for (let i = 1; i < newGroup.length; i++) { // iterate over groups
            const email = newGroup[i]
            if (!nameSet.has(email)) {
                nameSet.add(email)
                group.push(email)
            } 
        }
    }

    for (let i = 0; i < n-1; i++) { // O( (n * m)^2 )
        let idx = find(root[i])
        let group = accounts[idx]
        let name = group[0], emails = getEmails(group)

        for (let j = i+1; j < n; j++) { 
            let idx2 = find(root[j])
            let group2 = accounts[idx2]
            let name2 = group2[0]
            if (name !== name2) continue;

            for (let k = 1; k < group2.length; k++) { // iterate over groups
                if (emails.has(group2[k])) {
                    union(idx, idx2, group, emails, group2)
                }
            }
        }
    }
    const allGroups = new Map()
    for (let i = 0; i < accounts.length; i++) {  // O(n * m)
        const group = accounts[i]
        const groupIdx = root[i]
        if (!allGroups.has(groupIdx)) allGroups.set(groupIdx, new Set())
        const set = allGroups.get(groupIdx)
        for (let name of group) set.add(name)
    }

    const finalGroupArray = []
    for (let [idx, groupSet] of allGroups) { // O(n * log(m))
        const arr = Array.from(groupSet)
        arr.sort();
        finalGroupArray.push(arr)
    }

    return Array.from(finalGroupArray)
};


console.log(accountsMerge([["David","David0@m.co","David4@m.co","David3@m.co"],["David","David5@m.co","David5@m.co","David0@m.co"],["David","David1@m.co","David4@m.co","David0@m.co"],["David","David0@m.co","David1@m.co","David3@m.co"],["David","David4@m.co","David1@m.co","David3@m.co"]]
    ))



    // var accountsMerge = function(accounts) {
    //     const roots = {};
    //     const rootNames = {};
        
    //     function findRoot(node) {
    //         if (!roots[node]) roots[node] = [node];
    //         if (typeof(roots[node]) !== 'string') return node;
    //         return roots[node] = findRoot(roots[node]);
    //     }
        
    //     function union (root1, root2) {
    //         if (root1.length < root2.length) [root1, root2] = [root2, root1];
    //         roots[root1] = roots[root1].concat(roots[root2]);
    //         roots[root2] = root1;
    //         return root1
    //     }
        
    //     for (const [name, ...emails] of accounts) {
    //         for (const email of emails) {
    //             const rootMain = findRoot(emails[0]);
    //             const rootEmail = findRoot(email);
    //             if (rootMain != rootEmail) {
    //                 const root = union(rootMain, rootEmail);
    //                 rootNames[root] = name;
    //             } else {
    //                 rootNames[rootMain] = name;
    //             }
    //         }
    //     }
    
    //     const result = [];
    //     for (const root in roots) {
    //         if (typeof(roots[root]) !== 'string') {
    //             roots[root].sort();
    //             result.push(
    //                 [rootNames[root]].concat(roots[root])
    //             );
    //         }
    //     }
    //     return result;
    // };