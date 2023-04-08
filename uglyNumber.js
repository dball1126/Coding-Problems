/**
 * Time Complexity: O(n -2) = O(n)
 * Space Complexity: O(1)    Set only has 3 items at all times.
 */
class Solution {
    solve(n) {
        if (n < 2) return false
        let set = new Set([2,3,5])

        for (let i = 2; i <= n; i++) {
            if (n % i  === 0 && !set.has(i)) return false;
        }
        return true;
    }
}

let s = new Solution();
console.log(s.solve(10))