/**
 * State Var: i for idx of nums (0....i), d for the idx of the delete index (1 for delete, 0 for not)
 * Base Case: 0 for out of bounds.
 * Recurrence relation:
 * val = 0
 * if (d === 1) {
 *  if (nums[i] === 1) }
 *   val = 1 + dp(i+1, 1)
 * else {
 *  return 0
 * }
 * } else {
 *   if (nums[i] === 1) {
 *       val = Math.max( dp(i+1, 1), 1 + dp(i+1, 0) )
 *   else 
 *      val = dp(i+1, 1)
 * }
 * return val
 * }
 * 
 * 
 * Maybe all I have to do is check everysituation. Delete the index and look for the longest subArray after deleting it. That is the answer
 * 
 */
var longestSubarray = function(nums) {
    
};