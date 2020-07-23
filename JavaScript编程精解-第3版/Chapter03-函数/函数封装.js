// * 我们试图找出一个单一的概念，而不是把程序整个重复的部分都提取出来。
/* 
编写一个打印两个数字的程序：农场上奶牛和鸡的数量，每个数字后面分别跟着Cows（奶牛）、Chickens（鸡）、Pigs（猪）等等
在这两个数字之前填充零，使得它们总是三位数。
形如：
007 Cows
100 Chickens
090 Pigs
*/

// 格式化数字
function zeroPad(num, width) {
  let str = String(num);
  while (str.length < width) {
    str = "0" + str;
  }
  return str;
}

function printFarmInventory(cows, chickens, pigs) {
  console.log(`${zeroPad(cows, 3)} Cows`);
  console.log(`${zeroPad(chickens, 3)} Chickens`);
  console.log(`${zeroPad(pigs, 3)} Pigs`);
}

printFarmInventory(7, 100, 90);
