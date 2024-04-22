impl Solution {
    pub fn remove_element(nums: &mut Vec<i32>, val: i32) -> i32 {
     let mut length = nums.len() as i32;
     let mut i = 0;
     while i < length {
         if nums[i as usize] == val {
             nums[i as usize] = nums[(length - 1) as usize];
             length -= 1;
         } else {
             i += 1;
         }
     }
     length
 }
 }