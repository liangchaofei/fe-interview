impl Solution {
    pub fn remove_duplicates(nums: &mut Vec<i32>) -> i32 {
        let mut p1 = 0 as i32;
        let mut p2 = 1 as i32;

        while p2 < nums.len() as i32{
            if nums[p1 as usize] != nums[p2 as usize]{
                p1+=1;
                nums[p1 as usize] = nums[p2 as usize];
            }
            p2+=1;
        }

        return p1 + 1;
    }
}