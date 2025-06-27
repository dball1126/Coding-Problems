/**
 * @param {string} order
 * @param {string} s
 * @return {string}
 */
// Time and Space: O(n + m)
var customSortString = function(order, s) {
    let orderMap = new Map();

    for (let i = 0; i < order.length; i++) { // O(n)
        let c = order[i]
        orderMap.set(c, [])
    }
    orderMap.set("any", [])

    for (let c of s) { // O(m)
        if (orderMap.has(c)) {
            orderMap.get(c).push(c)
        } else {
            orderMap.get("any").push(c)
        }
    }
    let result = ""
    for (let c of order) { //O(n + m)
        result += orderMap.get(c).join("")
    }
    return result + orderMap.get("any").join("")
};
console.log(customSortString(rder = "cba", s = "abcd"))