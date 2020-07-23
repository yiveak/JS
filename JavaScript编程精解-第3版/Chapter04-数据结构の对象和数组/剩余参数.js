// 实现：Math.max计算给定的所有参数的最大值。
// * 调用此类函数时，剩余参数被绑定到包含所有后续参数的数组中。
function max(...numbers) {
  let result = -Infinity;
  for (let number of numbers) {
    if (number > result) result = number;
  }
  return result;
}
console.log(max(3, 16, -9, 63, 42, -11, 20));

let numbers = [11, 20, -4, 5, 72, 89, 10, -100];
// * 将数组“展开”到函数调用中，将其元素作为单独的参数传递。
console.log(max(...numbers));
