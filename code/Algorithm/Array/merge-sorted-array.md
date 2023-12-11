# 介绍

Hi 大家好。我是程序员库里，今天新开一个前端算法专栏。

  


接下来会分类给大家分享常考算法题目。

  


很多朋友也是看着这套系列算法拿到很多offer！所以也是想分享给更多朋友，帮助到有需要的朋友。

  


![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/425fa6f66ff5457e9cc9aa24833d08bd~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=505&h=300&s=23567&e=png&b=f5f5f5 "image.png")

  


# 分类

数组-三路快排

  


# 题目

[88. 合并两个有序数组](https://leetcode.cn/problems/merge-sorted-array/)

给你两个按 **非递减顺序** 排列的整数数组 `nums1` **和 `nums2`，另有两个整数 `m` 和 `n` ，分别表示 `nums1` 和 `nums2` 中的元素数目。

请你 **合并** `nums2` **到 `nums1` 中，使合并后的数组同样按 **非递减顺序** 排列。

**注意：** 最终，合并后数组不应由函数返回，而是存储在数组 `nums1` 中。为了应对这种情况，`nums1` 的初始长度为 `m + n`，其中前 `m` 个元素表示应合并的元素，后 `n` 个元素为 `0` ，应忽略。`nums2` 的长度为 `n` 。

 

**示例 1：**

```
输入： nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
输出： [1,2,2,3,5,6]
解释： 需要合并 [1,2,3] 和 [2,5,6] 。
合并结果是 [1,2,2,3,5,6] ，其中斜体加粗标注的为 nums1 中的元素。
```

**示例 2：**

```
输入： nums1 = [1], m = 1, nums2 = [], n = 0
输出： [1]
解释： 需要合并 [1] 和 [] 。
合并结果是 [1] 。
```

**示例 3：**

```
输入： nums1 = [0], m = 0, nums2 = [1], n = 1
输出： [1]
解释： 需要合并的数组是 [] 和 [1] 。
合并结果是 [1] 。
注意，因为 m = 0 ，所以 nums1 中没有元素。nums1 中仅存的 0 仅仅是为了确保合并结果可以顺利存放到 nums1 中。
```

# 解释

我们总共需要创建三个指针，两个指针用于指向 nums1 和 nums2 的初始化元素数量的末位，也就是分别指向 m-1和 n-1的位置，还有一个指针，我们指向 nums1 数组末位即可。

  



![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6488e363fac14326a8e4ac21115c3ccb~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=760&h=440&s=88177&e=png&b=fefefe)

  




![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1763f3f37044453db54a6aff79dc5062~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=760&h=440&s=102565&e=png&b=fefefe)

  




![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ac904c4d3c9f453683b372ee5f0e1947~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=760&h=440&s=74208&e=png&b=fefefe)

  




![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8d27edce53454ac3b5c146e303dc161b~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=760&h=440&s=102716&e=png&b=fefefe)

  




![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/dc5d0424d1c14eb785482204e11c91d8~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=760&h=440&s=74506&e=png&b=fefefe)

  




![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9ccde86a03f6442a880f6ada2a3aa90f~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=760&h=440&s=102969&e=png&b=fefefe)

  



![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e0b26c7a433342eeaebbbaf5c9b4bad2~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=760&h=440&s=74651&e=png&b=fefefe)

  




![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d738ed9f35834f0e9b22fdd12a1a9d34~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=760&h=440&s=103403&e=png&b=fefefe)

  




![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9d38bea026c34ec9be92e8fd314ba09f~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=760&h=440&s=74454&e=png&b=fefefe)

  




![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0b24a65aac8c452e902f966a82d00cf8~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=760&h=440&s=102904&e=png&b=fefefe)

  



![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3cd40432af704aa1bf536a19e33bbb4e~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=760&h=440&s=106337&e=png&b=fdfdfd)

  




![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/deb6df5a63564b848ed6d69a226a0c04~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=760&h=440&s=74113&e=png&b=fdfdfd)

  




![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3ba99ec1f9574bcd894bb331ae718105~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=760&h=440&s=95834&e=png&b=fefefe)

# 代码

```js
/**

* @param {number[]} nums1

* @param {number} m

* @param {number[]} nums2

* @param {number} n

* @return {void} Do not return anything, modify nums1 in-place instead.

*/

var merge = function(nums1, m, nums2, n) {

    let i = m - 1, j = n - 1, k = m + n - 1;

    while (i >= 0 || j >= 0) {

        if(i < 0) nums1[k--] = nums2[j--];

        else if(j < 0) nums1[k--] = nums1[i--];

        else if(nums1[i] < nums2[j]) nums1[k--] = nums2[j--];

        else nums1[k--] = nums1[i--];

    }

    return nums1;

};

```
