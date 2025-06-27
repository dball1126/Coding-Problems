var nums = [3,4,2,1,2]

let nums1 = nums.sorted()

print(nums1)

let nums2 = nums.sorted {(lhs: Int, rhs: Int) -> Bool in return lhs > rhs }
print(nums2)

let nums3 = nums.sorted {(lhs: Int, rhs: Int) -> Bool in return rhs > lhs }
print(nums3)

// in place sorting
var nums5 = [3,5,2,4,6,7,3,2]
nums5.sort()
print(nums5) 

// in place descending sort
nums5.sort{$0 > $1}
print(nums5) 


var nums10 = [[1,2],[0,3]]

nums10.sort{$0[0] < $1[0]}
print(nums10)