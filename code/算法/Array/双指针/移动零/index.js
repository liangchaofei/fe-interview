/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let k = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      if (k !== i) {
        [nums[k], nums[i]] = [nums[i], nums[k]];
        k++;
      } else {
        k++;
      }
    }
  }
  return nums;
};
