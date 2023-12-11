
# 介绍

Hi 大家好。我是程序员库里，今天新开一个前端算法专栏。

  


接下来会分类给大家分享常考算法题目。

  


很多朋友也是看着这套系列算法拿到很多offer！所以也是想分享给更多朋友，帮助到有需要的朋友。

  


![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/425fa6f66ff5457e9cc9aa24833d08bd~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=505&h=300&s=23567&e=png&b=f5f5f5 "image.png")

  


# 分类

数组-三路快排

  


# 题目

[75. 颜色分类](https://leetcode.cn/problems/sort-colors/)

给定一个包含红色、白色和蓝色、共 `n` **个元素的数组 `nums` ，**[原地](https://baike.baidu.com/item/%E5%8E%9F%E5%9C%B0%E7%AE%97%E6%B3%95)**对它们进行排序，使得相同颜色的元素相邻，并按照红色、白色、蓝色顺序排列。

我们使用整数 `0`、 `1` 和 `2` 分别表示红色、白色和蓝色。



必须在不使用库内置的 sort 函数的情况下解决这个问题。

 

**示例 1：**

```
输入： nums = [2,0,2,1,1,0]
输出： [0,0,1,1,2,2]
```

**示例 2：**

```
输入： nums = [2,0,1]
输出： [0,1,2]
```
  


  


# 解释

1.定义一个变量zero，初始值为-1，zero变量用来表示[0...zero]区间全部放0  
2.定义一个变量two，初始值为数组的长度，two变量用来表示[two...n-1]区间全部放2  
3.[zero+1...n-1]区间全部放1，这样数组中就变成了[0....1....2]  
4.开始遍历数组，条件是当i小于数组长度的时候  
5.如果遍历的当前元素是1，只把i向右移动一位，即i++。因为 1是在数组的中间，所以不做其他操作。  
6.如果遍历的当前元素是2，先将变量two向左移动一位，腾出一个位置，也就是two--。然后将当前的元素2和two所在的位置交换一下位置，此时这个2就移动到了右边，这个时候不能将 i 向右移动一位，需要继续判断 当前这个元素是否为0  
7.如果遍历的当前元素是0，先将zero向右移动一位，腾出一个位置，也就是zero++。然后将当前的元素0和zero所在的位置交换一下位置，此时这个0就移动到了左边。然后继续遍历，即i++。  
8.遍历完一遍后，所有0就到了左边，所有2就到了右边，所有1就到了中间。即完成了数组排序。

  


# 代码

```js
/**

* @param {number[]} nums

* @return {void} Do not return anything, modify nums in-place instead.

*/

var sortColors = function(nums) {

    let zero = -1;// [0...zero] 为0，弄成无效区间

    let two = nums.length;// [two...n-1] 为2，弄成无效区间

    for(let i =0;i<two;){

        if(nums[i] === 1){
            i++
        }else if(nums[i] === 2){
            two--
            [nums[i],nums[two]] = [nums[two],nums[i]]
        }else if(nums[i] === 0){
            zero++
            [nums[i],nums[zero]] = [nums[zero],nums[i]]
            i++
        }
    }
    return nums;
};

```
