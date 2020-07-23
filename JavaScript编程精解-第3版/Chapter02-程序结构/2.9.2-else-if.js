/*
 * 如果有2条以上的分支路径可选，则可以将多个if/else对“链接”在一起，或者说else-if语句
 */

// 猜数游戏

// 生成一个随机数
// Math.random()返回的是一个0到1之间的随机小数
// Math.ceil()向上取整
let randomNum = Math.ceil(Math.random() * 10);

let num = Number(prompt("Please pick a number from 0 to 10"));

if (!Number.isNaN(num)) {
  if (num < 10) {
  }
} else {
  console.log("Please enter a number");
}
