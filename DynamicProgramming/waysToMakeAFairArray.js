/**
 * Dp array of one array....might need 2D array
 * 1 Element is false
 * 
 * State var: i for idx of nums
 * Base case: out of bounds or nums === 1 return 0 
 * Recurrence Relation:
 *  dp(i)
 * let val
 *    if dp(i-1) + dp(i+1) % 2 === 0 
 * dp(i-1)[0] + dp(i+1)[0] === dp(i+1)[1] + dp(i-1)[1]
 *       return val = i
 *      else
 *       return val = 0
 * 
 * dp(i) = Math.max(val, dp(i+1))
 */


 /**
  * Maybe I can store two values for every state the odd value and the even value
  * At every state compare the nums[i-1] 
  */