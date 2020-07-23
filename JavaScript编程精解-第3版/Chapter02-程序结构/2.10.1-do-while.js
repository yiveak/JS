// 强制输入用户名，直到输入的是非空的字符串
let username;
do {
  username = prompt("Please enter your name");
} while (!username); // !运算符将在取反值之前，让值先进行布尔类型转换，除了""空字符串之外的所有字符串布尔转换结果都为true。
console.log(username);
