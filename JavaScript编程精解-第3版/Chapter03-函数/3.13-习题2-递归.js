/* 
我们已经看到可以用%2来检查某个数是否可被2整除，从而判定数字是偶数还是奇数。
下面是另一种定义正整数是偶数还是奇数的方法：
● 0是偶数。
● 1是奇数。
● 对于任何其他数字N，其奇偶性与N -2相同。
定义与此描述相对应的递归函数isEven。此函数应接收单个参数（正整数）并返回布尔值。
用50和75测试它。看看它在-1上的表现。以及为什么？你能想出解决这个问题的方法吗？
*/

function isEven(n) {
  if (n < 0) n = -n;
  if (n == 0) {
    return true;
  } else if (n == 1) {
    return false;
  } else {
    return isEven(n - 2);
  }
}
console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));
