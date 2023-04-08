/**
 * sort, two-pointer
 * Time O(n*2)
 * Space O(1)
 */
 var threeSum = function(n) {
    n.sort((a,b) => a-b)
    const result = [];

    for (let i = 0; i < n.length-2; i++) {
        let [s, e] = [i+1, n.length-1]
        while (s < e) {
            if (n[i] + n[s] + n[e] === 0) {
                result.push([n[i], n[s], n[e]])
            }

            if (n[i] + n[s] + n[e] <= 0) {
                while (n[s+1] !== undefined && n[s+1] === n[s]) s++;
                s++;
            } else {
                while (n[e-1] !== undefined && n[e] === n[e-1]) e--;
                e--;
            }
        }    
        while (n[i+1] !== undefined && n[i] === n[i+1]) i++;
    }
    return result;
 }

 console.log(threeSum([-2,-1,0,1,2]))