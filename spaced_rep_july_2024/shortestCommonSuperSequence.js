/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var shortestCommonSupersequence = function(str1, str2) {
    
    let str = str2 + str1
    let n = str.length, shortest = undefined;
    const memo = [...new Array(n+1)].map(a => 
               [...new Array(str1.length + 1)].map(a =>
               [...new Array(str2.length + 1)].fill(undefined)
            ))
    
    const dp = (i, j, k) => {
        if ((j >= str1.length && k >= str2.length)){
            if (i >= n) return ""
            return "INVALID"
        }
        if (i >= n && (j < str1.length || k < str2.length)) return "INVALID"
        if (memo[i][j][k] !== undefined) return memo[i][j][k]
        let v = ""
        if (j < str1.length && k <str2.length) {
            if (str[i] === str1[j] && str[i] === str2[k]) {
                let v1 = dp(i+1, j+1, k+1), v2 = dp(i+1, j, k)
                if (v1.length < v2.length) {
                    v = str[i] + v1
                } else {
                    v = str[i] + v2
                }
            } else if (str[i] === str[j]) {
                let v1 = dp(i+1, j+1, k), v2 = dp(i+1, j)
                if (v1.length < v2.length) {
                    v = str[i] + v1
                } else {
                    v = str[i] + v2
                }
            } else if (str[i] === str[k]) {
                let v1 =  dp(i+1, j, k+1), v2 = dp(i+1, j)

                if (v1.length < v2.length) {
                    v = str[i] + v1
                } else {
                    v = str[i] + v2
                }
            } else {
                v = dp(i+1, j, k)
            }
        } else if (j < str1.length) {
            if (str[i] === str[j]) {
                let v1 = dp(i+1, j+1, k), v2 = dp(i+1, j)
                if (v1.length < v2.length) {
                    v = str[i] + v1
                } else {
                    v = str[i] + v2
                }
            } else {
                v = dp(i+1, j, k)
            }
        } else if (k < str2.length) {
            if (str[i] === str[k]) {
                let v1 =  dp(i+1, j, k+1), v2 = dp(i+1, j)

                if (v1.length < v2.length) {
                    v = str[i] + v1
                } else {
                    v = str[i] + v2
                }
            } else {
                v = dp(i+1, j, k)
            }
        }
        if (!v.endsWith("INVALID")) {
            if (shortest === undefined) {
                shortest = v
                console.log(v)
            } else if (shortest.length > v.length) {
                shortest = v;
                console.log(v)
            }
        }
        return memo[i][j][k] = v
    }
    dp(0, 0, 0)

    return shortest
};
console.log(shortestCommonSupersequence(str1 = "abac", str2 = "cab"))