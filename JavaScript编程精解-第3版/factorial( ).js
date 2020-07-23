// factorial: 阶乘
function factorial(n) {
  if (n == 1) {
    return 1;
  } else {
    return factorial(n - 1) * n;
  }
}
console.log(factorial(3));
