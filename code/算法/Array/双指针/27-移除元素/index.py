class Solution(object):
    def removeElement(self, nums, val):
        """
        :type nums: List[int]
        :type val: int
        :rtype: int
        """
        length = len(nums)
        i= 0
        while i < length:
            if nums[i] == val:
                nums[i] = nums[length-1]
                length -= 1
            else:
                i += 1
        return length
            
