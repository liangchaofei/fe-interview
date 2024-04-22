function removeElement(nums: number[], val: number): number {
  let len: number = nums.length;
  for (let i = 0; i < len; ) {
    if (nums[i] === val) {
      nums[i] = nums[len - 1];
      len--;
    } else {
      i++;
    }
  }
  return len;
}

export {};
