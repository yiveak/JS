/*
 * 调用自身的函数称为递归函数。
 * 缺点：在典型的JavaScript实现中，递归的速度大约是循环版本的三分之一。而且通过简单循环运行通常比多次调用函数成本低。
 * 如果问题需要探索或处理几个“分支”，而每个分支可能会再次扩展到更多分支，可以考虑使用递归。
 */

function power(base, exponent) {
  if (exponent == 0) {
    return 1;
  } else {
    return base * power(base, exponent - 1);
  }
}
console.log(power(2, 3));

// 阶乘
function factorial(n) {
  if (n == 1) return 1;
  return factorial(n - 1) * n;
}
console.log(factorial(5));

// 从数字1开始，重复加5或乘以3，可以生成一个由无数的数字组成的集合。对于给定一个数字，要找到产生这个数字的一系列这样的加法和乘法。
function findSolution(target) {
  function find(current, history) {
    if (current == target) {
      return history;
    } else if (current > target) {
      return null;
    } else {
      return (
        find(current + 5, `(${history}+5)`) ||
        find(current * 3, `(${history}*3)`)
      );
    }
  }
  return find(1, "1");
}
console.log(findSolution(24));
console.log(findSolution(13));
