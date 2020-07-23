/* 
棋盘：
编写一个程序，创建一个字符串，用于表示 8×8 的网格，并使用换行符分隔行。网格中的每个位置可以是空格或字符 "#" 。
这些字符组成了一张棋盘。将字符串传递给 console.log 将会输出以下结果：
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
当程序可以产生这样的输出后，请定义绑定 size=8 ，并修改程序，使程序可以处理任意尺寸
（长宽由 size 确定）的棋盘，并输出给定宽度和高度的网格。
*/

// 8*8棋盘
/* for (let i = 0; i < 8; i++) {
  // 打印偶数行的棋盘格式
  if (i % 2 == 0) {
    // console.log(" # # # #");
    let line = " #";
    for (let j = 0; j < 2; j++) {
      line += line;
    }
    console.log(line);
  } else {
    // 打印奇数数行的棋盘格式
    // console.log("# # # # ");
    let line = "# ";
    for (let j = 0; j < 2; j++) {
      line += line;
    }
    console.log(line);
  }
} */

// 提取公共部分，且封装成一个函数
function printLine(line, size) {
  for (let i = 0; line.length < size; i++) {
    line += line;
  }
  // return line;
  console.log(line);
}

function printChessBoard(size) {
  for (let i = 0; i < size; i++) {
    if (i % 2 == 0) {
      printLine(" #", size);
    } else {
      printLine("# ", size);
    }
  }
}
// bug
printChessBoard(9);

console.log("\n");
// 原答案
let size = 9;
let board = "";
for (let i = 0; i < size; i++) {
  for (let j = 0; j < size; j++) {
    if ((i + j) % 2 == 0) {
      board += " ";
    } else {
      board += "#";
    }
  }
  board += "\n";
}
console.log(board);
