/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let len = nums.length;
  for (let i = 0; i < len; ) {
    if (nums[i] === val) {
      nums[i] = nums[len - 1];
      len--;
    } else {
      i++;
    }
  }
  return len;
};
