from typing import List

class Solution:
    def maxSubArray(self, nums: List[int]) -> int:

        maxValue = nums[0]
        curr = nums[0]

        for num in nums[1:]:
            curr = max(curr + num, num)
            maxValue = max(maxValue, curr)

        return maxValue
    

solution_instance = Solution()
nums = [-2,1]


print(solution_instance.maxSubArray(nums))