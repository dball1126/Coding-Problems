var merge = function(a) {
  let result = []
  if (a.length <= 1) return a;
  a.sort((a,b)=> a[0] - b[0])
  let s = a[0][0], e = a[0][1]

  for (let i = 0; i < a.length; i++) {
      if (s === undefined) {
          s = a[i][0]
          e = a[i][1]
      } else {
          if (a[i][0] <= e) {
              e = Math.max(a[i][1], e)
          } else {
              result.push([s,e])
              s = a[i][0]
              e = a[i][1]
          }
      }
    }
    if (s !== undefined) {
        result.push([s, e])
    }
    return result
};