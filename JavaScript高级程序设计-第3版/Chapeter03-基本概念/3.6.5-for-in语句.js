/*
 * 迭代对象的属性
 */

// 显示BOM中window对象的所有属性
let count = 0;
for (var propName in window) {
  console.log(propName);
  count++;
}
console.log(count); // 237 window中有237个属性
