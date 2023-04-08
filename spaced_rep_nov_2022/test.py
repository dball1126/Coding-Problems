class Solution:
    def numOfWays(self, nums: List[int]) -> int:
        res = self.helper(nums)
		print(res)
        return (len(res)-1% (10**9+7))
        
    def helper(self, nums):
        res = []
        if not len(nums):
            return [[]]
        
        root = nums[0]
        left = [v for v in nums if v < root]
        right = [v for v in nums if v > root]
        left_res = self.helper(left)
        right_res = self.helper(right)
        for left_arr in left_res:
            for right_arr in right_res:
                res += self.weave(left_arr, right_arr, [root], array=[])

        return res
    
    def weave(self, first, second, prefix, array = []):
            
        if not first and not second:
            return [prefix]
        
        if not first:
            array.append(prefix+second)
            return array
        if not second:
            array.append(prefix+first)
            return array
        
        prefix.append(first[0])
        array = self.weave(first[1:], second, prefix, array)
        prefix.pop()
        prefix.append(second[0])
        array  = self.weave(first, second[1:], prefix, array)
        prefix.pop()
        return array