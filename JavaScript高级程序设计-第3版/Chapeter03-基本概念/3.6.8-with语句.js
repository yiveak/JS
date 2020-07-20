/*
 * with语句的作用是将代码的作用域设置到一个特定的对象中。
 * 在with语句的代码块内部，每个变量首先被认为是一个局部变量。
 * 严格模式下不允许使用with语句，视为语法错误。
 */

// 如果在局部环境中找不到该变量的定义，就会查询location对象中是否有同名的属性。
// 如果发现了同名属性，则以location对象属性的值作为变量的值。
with (location) {
  let hostName = location.hostName;
  let url = location.url;
}
console.log(hostName); // Uncaught ReferenceError: hostName is not defined
console.log(url);
