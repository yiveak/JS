/*
 * break跳出封闭循环
 */

// 找到一个大于或等于20并能被7整除的第一个数值
for (let num = 20; ; num++) {
  if (num % 7 == 0) {
    console.log(num);
    break;
  }
}
