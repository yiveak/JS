/* 
编写一个循环，调用 7 次 console.log 函数，打印出如下的三角形：
#
##
###
####
#####
######
#######
*/

// 1.
function printTriangle(n) {
  let line = "#";
  for (let i = 0; i < n; i++) {
    console.log(line);
    line += "#";
  }
}
printTriangle(7);

// 原答案
for (let line = "#"; line.length < 8; line += "#") console.log(line);
