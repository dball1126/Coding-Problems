// Kadanes algo
// Time; O(n)
// Space: O(1)

const maxSubArray = (a) => {
    let max = a[0];
    for (let i = 1; i < a.length; i++) {
        a[i] = Math.max(a[i], a[i] + a[i-1])
        max = Math.max(max, a[i])
    }
    return max
}
console.log(maxSubArray([1,2]))