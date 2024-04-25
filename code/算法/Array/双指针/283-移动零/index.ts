/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes<T>(nums: T[]): T[] {
  let k: number = 0;
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
}

export {};
