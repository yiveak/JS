/*
 * (声明)定义函数 3种方式
 * 1. 使用function关键词声明的函数表达式 匿名函数 分号结尾
 * 2. 直接使用function关键词声明函数 是一个语句 不必分号结尾
 * 3. 箭头函数 =>
 */

// * 1. 使用function关键词声明(定义)的函数表达式
// 求一个数值的平方
const square = function (x) {
  return x * x;
};
console.log(square(11));

// 求一个数的指定次幂
const power = function (base, exponent) {
  let result = 1;
  for (let i = 0; i < exponent; i++) {
    result *= base;
  }
  return result;
};
console.log(power(2, 10));

//  * 2. 直接使用function关键词声明函数 是一个语句 不必分号结尾
/*
 * 即使函数是在使用它的代码下面定义的，前面的代码也可以工作。
 * 函数声明不是常规的从上到下控制流程的一部分。它们在概念上被移到了它们的作用域的顶部，可以由此作用域内的所有代码使用。
 */
console.log(sum(3, 6));
function sum(x, y) {
  return x + y;
}
console.log(sum(2, 3));

//  * 3. 箭头函数 =>
// 箭头函数完整式
const sub = (x, y) => {
  return x - y;
};
console.log(sub(8, 1));

// 当箭头函数无参数时，保留圆括号，同时如果函数体内就一个语句，那么可以省略外部的花括号
const foo = () => console.log("Hello");
foo();

// 当箭头函数只有一个参数时，可以省略外部的圆括号。另外如果函数体是单个表达式，则该函数将返回这个表达式的值。
const double = (x) => 2 * x;
console.log(double(2));
