impl Solution {
    pub fn remove_duplicates(nums: &mut Vec<i32>) -> i32 {
        if nums.len() < 3 {
            return nums.len() as i32;
        }

        let mut p1 = 2;
        let mut p2 = 2;

        while p2 < nums.len() {
            if nums[p1-2] != nums[p2]{
                nums[p1] = nums[p2];
                p1 += 1;
            }
            p2 += 1;
        }

        return p1 as i32;
    }
}