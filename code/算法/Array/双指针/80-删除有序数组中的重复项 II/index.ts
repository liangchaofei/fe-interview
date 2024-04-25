function removeDuplicates(nums: number[]): number {
  if (nums.length < 3) return nums.length;
  let p1: number = 2;
  let p2: number = 2;
  while (p2 < nums.length) {
    if (nums[p1 - 2] !== nums[p2]) {
      nums[p1] = nums[p2];
      p1++;
    }
    p2++;
  }
  return p1;
}

export {};
