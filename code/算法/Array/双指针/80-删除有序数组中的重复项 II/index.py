class Solution(object):
    def removeDuplicates(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        if len(nums) < 3:
            return len(nums)

        p1 = 2
        p2 = 2
        while p2 < len(nums):
            if nums[p1-2] != nums[p2]:
                nums[p1] = nums[p2]
                p1+=1
            p2+=1
        return p1