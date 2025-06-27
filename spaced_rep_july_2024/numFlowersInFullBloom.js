/**
 * @param {number[][]} flowers
 * @param {number[]} people
 * @return {number[]}
 */
var fullBloomFlowers = function(flowers, people) {
    let max = people.length

    for (let mx of people) {
        max = Math.max(max, mx)
    }
    let memo = [...new Array(max+1)]

    const dp = (i) => {
        if (memo[i] !== undefined) return memo[i]
        if (i >= memo.length) return
        let v = people[i]
        dp(i+1)
        if (memo[v] === undefined) {

            memo[v] = 0
            for (let [mi, mx] of flowers) {
                if (v >= mi && v <= mx) {
                    memo[v]++
                }
            }
        }
        return memo[v]
    }
    dp(0)
    for (let i = 0; i < people.length; i++) {
        people[i] = memo[people[i]]
    }
    return people
};
console.log(fullBloomFlowers( flowers =  [[19,33],[34,41],[45,50],[47,47],[23,34],[20,28],[18,18],[31,46],[50,50],[27,39],[23,32],[48,48],[1,17],[1,12],[19,24],[12,40],[47,49],[22,29],[42,47],[32,46],[40,42],[16,24],[23,46],[7,16],[5,8],[2,29],[14,25],[7,44],[41,47],[45,48],[6,8],[10,45],[14,26],[44,46],[2,9],[40,41]], 
    [32,16,44,47,35,23,48,32,22,26,19,21,11,6,21,38,15,33,40,41,4,12,29,13,48,17,24,5,33,21,32,34,28,12,33,10,13,28,22,38,3,38,44,26,6,25,12,47,14,6,49,37,6,13,9,35,19,14,37,7,12,12,46,9,11,37,29,1,28,47,3,33]))