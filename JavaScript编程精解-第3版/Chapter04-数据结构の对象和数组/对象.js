/*
 * 类型对象的值是属性的任意集合。键值对
 * 创建对象
 * 方式1. 字面量
 * 方式2. 构造函数
 * 访问(获取)对象的属性 . []
 * 对于不是有效绑定名称或有效数字的属性名，必须用引号将其括起来。
 * 读取不存在的属性将返回undefined。
 * delete运算符，当应用于对象属性时，将从对象中删除该命名属性。必须注意的是：该属性通过in检测将返回false。
 * 当应用于字符串和对象时，二元运算符in会确定此对象是否具有该名称的属性。
 * 找出对象具有哪些属性，使用Object.keys函数，它返回一个字符串数组，其中列出对象的所有属性名。
 * Object.assign函数从一个对象把其所有属性复制到另一个对象。
 */

// * 方式1. 字面量
const obj = {
  name: "John English",
  age: 30,
  gender: "Male",
  // 对于不是有效绑定名称或有效数字的属性名，必须用引号将其括起来。
  "favorite food": "toast",
};

// * 访问(获取)对象的属性 . []
console.log(obj.name);
console.log(obj["favorite food"]);

// * 读取不存在的属性将返回undefined。
console.log(obj.job);
// * 可以使用=运算符为属性表达式赋值。如果属性已经存在，它将替换属性的值，如果不存在，则在对象上创建新属性。
obj.job = "Agent";
console.log(obj);

// * delete运算符，当应用于对象属性时，将从对象中删除该命名属性。必须注意的是：该属性通过in检测将返回false。
delete obj.gender;
console.log(obj.gender); // undefined
console.log("gender" in obj); // false
console.log(obj); // no gender anymore

// * 找出对象具有哪些属性，使用Object.keys函数，它返回一个字符串数组，其中列出对象的所有属性名。
console.log(Object.keys(obj)); // [ 'name', 'age', 'favorite food', 'job' ]

// * Object.assign函数从一个对象把其所有属性复制到另一个对象。
let who = {
  hi: function () {
    console.log("Hello");
  },
};
Object.assign(who, obj);
console.log(who);
