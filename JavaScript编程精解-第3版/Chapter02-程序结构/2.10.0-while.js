// 输出[0, 50]之间的偶数
let num = 0;
while (num < 50) {
  console.log(num);
  num += 2;
}
// 输出[0, n]之间的偶数
function getEven(n) {
  let x = 0;
  while (x < n) {
    console.log(x);
    x += 2;
  }
}
getEven(10);

// 输出前n个偶数
function getEven(n) {
  let count = 0;
  let even = 0;
  while (count < n) {
    console.log(even);
    even += 2;
    count++;
  }
}
getEven(5);

// 输出[n, m]之间的偶数
function getEven(n, m) {
  let x = n;
  while (x <= m) {
    if (x % 2 === 0) {
      console.log(x);
    }
    x++;
  }
}
getEven(0, 50);
