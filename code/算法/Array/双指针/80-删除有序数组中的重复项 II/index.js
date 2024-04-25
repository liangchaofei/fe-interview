/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  if (nums.length < 3) return nums.length;

  let p1 = 2;
  let p2 = 2;
  while (p2 < nums.length) {
    if (nums[p1 - 2] !== nums[p2]) {
      nums[p1] = nums[p2];
      p1++;
    }
    p2++;
  }
  return p1;
};
