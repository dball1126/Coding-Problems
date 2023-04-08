const sortArray = (n) => {
   if (n.length <= 1) return n
   let left = [], mid = [], right = []
   let p = Math.floor((n.length / 2))
 p = n[p]
   for (let i = 0; i < n.length; i++) {
       const e = n[i];
       if (e < p) {
           left.push(e)
       } else if (e > p) {
           right.push(e)
       } else {
           mid.push(e)
       }
   }
   
   return [...sortArray(left), ...mid, ...sortArray(right)]
}

console.log(quickSort([3,4,5,1,3,0]))