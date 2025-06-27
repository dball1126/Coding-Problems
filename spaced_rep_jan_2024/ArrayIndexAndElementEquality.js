// Binary Search
// Time: O(log(n))
// Space: O(1)
function indexEqualsValueSearch(arr) {

    let l = 0, r = arr.length-1, index = Infinity
    
    while (l <= r) {
      let m = Math.floor((l + r) / 2)
      if (arr[m] === m) {
        index = Math.min(index, m)
        r = m-1
      } else if (arr[m] > m) {
        r = m-1
      } else {
        l = m + 1
      }
    }
    return index === Infinity ? -1 : index
  }
  
  
console.log(indexEqualsValueSearch( [-8,0,2,5]))