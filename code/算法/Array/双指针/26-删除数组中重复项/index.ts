function removeDuplicates(nums: number[]): number {
  let p1: number = 0;
  let p2: number = 1;

  while (p2 < nums.length) {
    if (nums[p1] !== nums[p2]) {
      p1++;
      nums[p1] = nums[p2];
    }
    p2++;
  }

  return p1 + 1;
}

export {};
