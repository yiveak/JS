/*
 * for关键字后面的圆括号中，必须包含2个分号
 * 第1部分：初始化循环变量
 * 第2部分：检查循环是否继续的表达式
 * 第3部分：每次迭代后更新循环的状态
 */

//
for (let num = 0; num <= 10; num += 2) {
  console.log(num);
}

//
let result = 1;
for (let counter = 0; counter < 10; counter++) {
  result *= 2;
}
console.log(result);
