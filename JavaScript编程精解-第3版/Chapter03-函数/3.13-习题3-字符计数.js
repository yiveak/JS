/* 
你可以通过编写"string"[N]从字符串中获取第N个字符或字母。返回的值将是仅包含一个字符的字符串（例如，"b"）。
第一个字符的位置为0，这导致最后一个字符的位置在string.length-1。
换句话说，包含两个字符的字符串长度为2，其字符的位置为0和1。
编写一个函数countBs，它将一个字符串作为唯一参数，并返回一个数字，表示字符串中有多少个大写"B"字符。
接下来，编写一个名为countChar的函数，其行为类似于countBs，除了它需要第二个参数来指示要计数的字符（而不是仅计算大写的"B"字符）。
使用这个新函数重写countBs。
*/

// 函数countBs，它将一个字符串作为唯一参数，并返回一个数字，表示字符串中有多少个大写"B"字符。
function countBs(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] == "B") count++;
  }
  return count;
}

console.log(countBs("abbc"));
console.log(countBs("aBBc"));
console.log(countBs("ac"));

// countChar的函数，其行为类似于countBs，除了它需要第二个参数来指示要计数的字符（而不是仅计算大写的"B"字符）。
function countChar(str, ch) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] == ch) {
      count++;
    }
  }
  return count;
}
console.log(countChar("abckeififdd", "m"));
