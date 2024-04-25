class Solution(object):
    def removeDuplicates(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        p1 = 0
        p2 =1
        while p2 < len(nums):
            if nums[p1] != nums[p2]:
                p1+=1
                nums[p1] = nums[p2]
            else:
                p2+=1
        return p1+1