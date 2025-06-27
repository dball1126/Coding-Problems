/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
   this.map = new Map()
   this.nums = []
   for (let i = 0; i < nums.length; i++) {
    if (!this.map.has(nums[i])) this.map.set(nums[i], [])
    this.map.get(nums[i]).push(i)
    this.nums.push(nums[i])
   } 
};

/** 
 * @param {number} target
 * @return {number}
 */
Solution.prototype.pick = function(target) {
    let arr = this.map.get(target)
    let n = arr.length
    let randomIdx = Math.floor(Math.random() * n)
    let idx = arr[randomIdx]
    return idx
};

// [1,2,3,3,3]
/**
  1: [0]
  2: [1]
  3: [2,3,4]

  randomIdx = 2
  idx = 4
  this.nums[4] = 3
 * 
 */