
# 介绍

Hi 大家好。我是程序员库里，今天新开一个前端算法专栏。

  


接下来会分类给大家分享常考算法题目。

  


很多朋友也是看着这套系列算法拿到很多offer！所以也是想分享给更多朋友，帮助到有需要的朋友。

  


![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/425fa6f66ff5457e9cc9aa24833d08bd~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=505&h=300&s=23567&e=png&b=f5f5f5 "image.png")

  


# 分类

数组-三路快排

  


# 题目

[215. 数组中的第K个最大元素](https://leetcode.cn/problems/kth-largest-element-in-an-array/)

给定整数数组 `nums` 和整数 `k`，请返回数组中第 `k` 个最大的元素。

请注意，你需要找的是数组排序后的第 `k` 个最大的元素，而不是第 `k` 个不同的元素。

你必须设计并实现时间复杂度为 `O(n)` 的算法解决此问题。

 

**示例 1:**

**输入:** `[3,2,1,5,6,4],` k = 2

**输出:** 5

  


**示例 2:**

**输入:** ` [3,2,3,1,2,4,5,5,6],  `k = 4

**输出:** 4

  


  


# 解释

1.  首先定义一个变量len表示数组的长度，在外层遍历 k 次。
1.  定义变量max，初始值是数组的第一项，表示默认当前第一个值最大
1.  定义变量index，初始值0，表示当前数组中最大值的索引
1.  在内循环从第2个值开始遍历，比较max的值和当前遍历的值
1.  如果max小于当前遍历的值，就把当前的值赋值给max，同时将当前值的索引赋值给index
1.  遍历完第一次后，max表示当前最大的元素，然后把当前最大的值从数组中删除
1.  继续从外层循环遍历，重复上述操作
1.  遍历k次后，将当前第k大值赋值给max，最后返回max

  


# 代码

```
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    var len = nums.length;
    for(var i = 0;i<k;i++){
        var max = nums[0];
        var index = 0;
        for(var j = 1;j<=len-1;j++){
            if(max < nums[j]){
                max = nums[j]
                index = j
            }
        }
        nums.splice(index,1)
    }
    return max;
};
```
