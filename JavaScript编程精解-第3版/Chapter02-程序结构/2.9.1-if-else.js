/*
 * 条件分支语句：if-else
 */

// 需求：输入一个数值，求这个数值的平方根，保留2位小数

// 因为prompt()返回的结果是一个字符串，所以要进行类型转换，即通过Number()转换成数值
let num = Number(prompt("Pick a number"));

// 判断是否输入有效的数值
// Number.isNaN()判断传入的参数是否是NaN，如果参数是非数值或者是非有效数字的字符串，则结果为true；
// 反之，如果参数是数值或者有效数字的字符串，那么结果为false。
if (!Number.isNaN(num)) {
  console.log(`square root of ${num} is ${Math.sqrt(num).toFixed(2)}.`);
} else {
  // 如果传入的参数通过Number()转换的结果是NaN，那么输出提示信息
  console.log("Please enter a number.");
}
