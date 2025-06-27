class Solution {
    func merge(_ nums1: inout [Int], _ m: Int, _ nums2: [Int], _ n: Int) {
        var i = m-1; 
        var j: Int = n-1
        var idx = nums1.count - 1

        while i >= 0 || j >= 0 {
            if j < 0 {
                nums1[idx] = nums1[i];
                i -= 1;
            } else if i < 0 {
                nums1[idx] = nums2[j];
                j -= 1;
            } else if nums1[i] >= nums2[j] {
                nums1[idx] = nums1[i];
                i -= 1;
            } else if nums2[j] >= nums1[i] {
                nums1[idx] = nums2[j];
                j -= 1;
            }
            idx -= 1;
        }
    }
}

// Test cases with the fixed algorithm:
var sol = Solution()

var arr1 = [0]
sol.merge(&arr1, 0, [1], 1)
print("Merged Array 1: \(arr1)") // Expected: [1, 2, 2, 3, 5, 6]

// var arr2 = [4,5,6,0,0,0]
// sol.merge(&arr2, 3, [1,2,3], 3)
// print("Merged Array 2: \(arr2)") // Expected: [1, 2, 3, 4, 5, 6]

// var arr3 = [1,0,0,0]
// sol.merge(&arr3, 1, [2,3,4], 3)
// print("Merged Array 3: \(arr3)") // Expected: [1, 2, 3, 4]

// var arr4 = [0,0,0,0,0]
// sol.merge(&arr4, 0, [1,2,3,4,5], 5)
// print("Merged Array 4: \(arr4)") // Expected: [1, 2, 3, 4, 5]

// var arr5 = [1]
// sol.merge(&arr5, 1, [], 0)
// print("Merged Array 5: \(arr5)") // Expected: [1]