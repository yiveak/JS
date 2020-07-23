/*
 * 程序将从与提供给switch的值对应的标签处开始执行
 * 如果未找到匹配值，则在default处开始执行。
 * 如果某个标签里无break;语句，那么可以跨标签执行，直至遇到下一个break;语句为止。
 */
switch (prompt("What is the weather like?")) {
  case "rainy":
    console.log("Remember to bring a umbrella.");
    break;
  case "sunny":
    console.log("Dress lightly.");
    break;
  case "cloudy":
    console.log("Go outside.");
    break;
  default:
    console.log("Unknown weather type!");
    break;
}
