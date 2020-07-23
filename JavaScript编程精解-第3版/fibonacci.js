// Fibonacci 计算斐波那契数列
function fibonacci(n) {
  if (n == 0) return 0;
  if (n == 1) return 1;
  return fibonacci(n - 2) + fibonacci(n - 1);
}
console.log(fibonacci(8));
console.log(fibonacci(6));
