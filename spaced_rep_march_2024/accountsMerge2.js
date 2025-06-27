/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
//
function accountsMerge(accounts) {
    const emailToIndex = new Map(); // Map emails to account indices
    const graph = new DisjointSet(accounts.length); // Disjoint-set for union-find

    // Build relationships based on shared emails
    for (let i = 0; i < accounts.length; i++) {
        const account = accounts[i];
        for (let j = 1; j < account.length; j++) {
            const email = account[j];

            if (!emailToIndex.has(email)) {
                emailToIndex.set(email, i);  // First encounter, map to index
            } else {
                graph.union(i, emailToIndex.get(email)); // Merge accounts with shared email
            }
        }
    }

    // Group accounts based on the disjoint-set structure
    const mergedAccounts = new Map(); 
    for (let email of emailToIndex.keys()) {
        const index = graph.find(emailToIndex.get(email));
        if (!mergedAccounts.has(index)) mergedAccounts.set(index, []);
        mergedAccounts.get(index).push(email);
    }

    // Construct the result array
    const result = [];
    for (const [index, emails] of mergedAccounts.entries()) {
        const name = accounts[index][0];
        const sortedEmails = emails.sort();
        result.push([name, ...sortedEmails]); 
    }

    return result;
}

// Disjoint-Set implementation (for efficiency)
class DisjointSet {
    constructor(n) {
        this.parent = [...Array(n).keys()];
    }

    find(x) {
        if (this.parent[x] !== x) {
            this.parent[x] = this.find(this.parent[x]); // Path compression
        }
        return this.parent[x];
    }

    union(x, y) {
        this.parent[this.find(x)] = this.find(y);
    }
}

console.log(accountsMerge(accounts =
    [["David","David0@m.co","David1@m.co"],["David","David3@m.co","David4@m.co"],["David","David4@m.co","David5@m.co"],["David","David2@m.co","David3@m.co"],["David","David1@m.co","David2@m.co"]]))