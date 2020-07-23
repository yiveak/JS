/*
 * 能够引用封闭作用域中局部绑定的特定实例的功能被称为闭包（closure）。
 * 引用其周围局部作用域的绑定的一个函数称为一个闭包。
 * 函数每次调用都会重新创建局部绑定，并且不同的调用不能在其他调用的局部绑定上进行操作。
 * 函数调用时，函数体会看到创建它的环境，而不是调用它的环境。
 * 一个好的思路模型是：将函数值视为同时包含其函数体内的代码和创建它们的环境。
 */

// * 函数每次调用都会重新创建局部绑定，并且不同的调用不能在其他调用的局部绑定上进行操作。
function wrapValue(n) {
  let local = n;
  return () => local;
}
let wrap1 = wrapValue(1);
let wrap2 = wrapValue(2);
console.log(wrap1()); // 1
console.log(wrap2()); // 2

// 乘以任意数量的函数
function multiplier(factor) {
  return (number) => number * factor;
}
let twice = multiplier(2);
console.log(twice(5)); // 10

console.log(multiplier(3)(3));
