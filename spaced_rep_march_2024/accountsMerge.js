/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
// Merge Arrays
// Time: O(n * ((m * g) + log(n)))...n for groups...m for group length...g for merged groups
// Space: O(n * m)...for groups map
var accountsMerge = function(accounts) {
    let result = []
    let groups = new Map()
    for (let group of accounts) { // O(n) for groups
        let name = group[0]
        if (!groups.has(name)) groups.set(name, [])
        groups.get(name).push(group)
    }
    for (let [name, group] of groups) { // O(n)
      
        let merged = []
        
        for (let j = 0; j < group.length; j++) { // O(m) for group length
            let grp = group[j]
            let emails = new Set()
            let isMerged = false
            for (let k = 1; k < grp.length; k++) {
                emails.add(grp[k])
            }
            for (let k = 0; k < merged.length; k++) {
                let mGrp = merged[k], merged2 = false
                let mGrpEmails = new Set();
                for (let i = 1; i < mGrp.length; i++) {
                    mGrpEmails.add(mGrp[i])
                }
                for (let k = 1; k < mGrp.length; k++) {
                    let email = mGrp[k]

                    if (emails.has(email)) {
                        for (let d = 1; d < grp.length; d++) {
                            if (grp[d] !== email && !mGrpEmails.has(grp[d])) mGrp.push(grp[d])
                        }
                        isMerged = true;
                        break
                    }
                }
                if (merged2) break
            }
            // remove dups
            let newGrp = new Set();
            grp.forEach(g => newGrp.add(g))
            if (!isMerged) merged.push(Array.from(grp))
        }
        merged.forEach(m => {
            m.sort()
        })
        result.push(...merged)
    }
    result.sort((a, b) => a[0].localeCompare(b[0]))
    return result
};
console.log(accountsMerge([
    ["Alex","Alex5@m.co","Alex4@m.co","Alex0@m.co"],
    ["Ethan","Ethan3@m.co","Ethan3@m.co","Ethan0@m.co"],
    ["Kevin","Kevin4@m.co","Kevin2@m.co","Kevin2@m.co"],
    ["Gabe","Gabe0@m.co","Gabe3@m.co","Gabe2@m.co"],
["Gabe","Gabe3@m.co","Gabe4@m.co","Gabe2@m.co"]]))