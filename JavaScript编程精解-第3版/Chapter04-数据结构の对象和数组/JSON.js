/*
 * JSON 序列化格式 序列化数据 JavaScript Object Notation
 * 被广泛用作Web上的数据存储和通信格式。
 * 所有属性名称都必须用双引号括起来，并且只允许使用简单的数据表达式——没有函数调用、绑定或涉及实际计算的任何内容。
 * JSON中不允许注释。
 * JSON.stringify()函数：返回JSON编码的字符串
 * JSON.parse()函数：将字符串转换为JSON编码的值
 */
let string = JSON.stringify({
  id: 7,
  name: "John English",
  age: 35,
  job: "Agent",
});

// * 注意：输出内容里的属性名被双引号包裹了
console.log(string); // '{"id":7,"name":"John English","age":35,"job":"Agent"}'
console.log(typeof string); // string

// * 输出内容里的属性名无双引号被包裹
console.log(JSON.parse(string)); // { id: 7, name: 'John English', age: 35, job: 'Agent' }
console.log(typeof JSON.parse(string)); // object
