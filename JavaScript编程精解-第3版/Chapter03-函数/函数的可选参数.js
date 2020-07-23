/*
 * 如果传递太多参数，则会忽略额外的参数。
 * 如果传递的参数太少，则缺少的参数将被赋值为undefined。
 * 好处：此行为可用于允许使用不同数量的参数调用的函数。
 * 缺点：如果给函数传递了错误数量的参数，编译器并不会报错。
 */

function square(x) {
  return x * x;
}
console.log(square(2, true, "Hello"));

// * 好处：此行为可用于允许使用不同数量的参数调用的函数。
// 1. 下面的minus函数通过对一个或两个参数进行操作来模仿-运算符：
function minus(a, b) {
  /* if (b === undefined) return -a;
  return a - b; */
  return b === undefined ? -a : a - b;
}
console.log(minus(5));
console.log(minus(5, 1));
console.log(minus(1, 5));

// 2. 下面的power使其第二个参数可选。如果没有提供第二个参数或传递给它未定义的值，它将默认为2，并且此函数表现与square相同。
function power(base, exponent = 2) {
  let result = 1;
  for (let i = 0; i < exponent; i++) {
    result *= base;
  }
  return result;
}
console.log(power(2, 3));
console.log(power(3));
