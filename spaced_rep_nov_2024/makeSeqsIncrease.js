/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minSwap = function(n1, n2) {
    let n = n1.length, m = n2.length
    const memo = [...new Array(n+1)].map(a => [...new Array(m+1)].map(a => [...new Array(3)]))

    const needN1Swap = (i) => {
        let v1 = n1[i]
        let prev1 = -Infinity, next1 = Infinity
        if (i-1 >= 0) prev1 = n1[i-1]
        if (i+1 < n) next1 = n1[i+1]
        return !(v1 > prev1 && v1 < next1)
    }
    const needN2Swap = (i) => {
        let v1 = n2[i]
        let prev1 = -Infinity, next1 = Infinity
        if (i-1 >= 0) prev1 = n2[i-1]
        if (i+1 < n) next1 = n2[i+1]
        return !(v1 > prev1 && v1 < next1)
    }

    const canSwap = (i, j) => {
        console.log("canswap: i : " + i + " k : "+ j)
        let v1 = n1[i], v2 = n2[j]
        let prev1 = -Infinity, prev2 = -Infinity, next1 = Infinity, next2 = Infinity
        if (i-1 >= 0) prev1 = n1[i-1]
        if (j-1 >= 0) prev2 = n2[j-1]
        if (i+1 < n) next1 = n1[i+1]
        if (j+1 < m) next2 = n2[j+1]
        
        return (prev1 < v2 && v2 < next1) && (prev2 < v1 && v1 < next2)
    }

    const dp = (i, j, s) => {
        if (needN1Swap(i) && i >= m) return Infinity
        if (needN2Swap(j) && j >= m) return Infinity
        if (i >= n || j >= m) return 0
        if (memo[i][j][s] !== undefined) return memo[i][j][s]

        let v1 = Infinity, v2 = Infinity, v3 = Infinity, v4 = Infinity, v5 = Infinity, v6 = Infinity

        if (!needN1Swap(i) && !needN2Swap(j)) {
            v6 = dp(i+1, j+1, 0)
        }

        if (canSwap(i, j)) {
            v2 = dp(i+1, j+1, 1) + 1
        }
        if (needN1Swap(i) && !needN2Swap(j)) {
            v3 = dp(i, j+1, 0)
        }
        if (needN2Swap(j) && !needN1Swap(i)) {
            v4 = dp(i+1, j, 0)
        }
        if (!canSwap(i, j) && needN1Swap(i) && needN2Swap(j)) {
            v5 = v3 + v4
        }
        return Math.min(v1,v2,v3,v4,v5)
    }
    let result = dp(0,0,0)
    console.log(memo)
    return result
};
console.log(minSwap(ums1 = [1,3,5,4], nums2 = [1,2,3,7]))