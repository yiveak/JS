/* 
1. 遍历对象的通常方式：for/in循环
2. ECMAScript 5定义了两个用以枚举属性名称的函数：Object.keys()、Object.getOwnPropertyNames()
Object.keys()，返回一个由可枚举的自有属性组成的数组(形式是数组，但typeof是object)
Object.getOwnPropertyNames()，返回一个由所有的自有属性组成的数组(形式是数组，但typeof是object)
*/


/* ==================================================================================================== */

// 1. for/in循环
// 遍历对象中所有可枚举的属性（包括自有属性和继承的属性），把属性名称赋值给循环变量。
// 对象继承的内置方法不可枚举的，但在代码中给对象添加的属性都是可枚举的。
let obj = {
    x: 1,
    y: 2,
    z: 3
};
// propertyIsEnumerable()是hasOwnProperty()的增强版，只有检测到是自有属性且这个属性的可枚举性（enumerable attribute）为true时它才返回true
console.log(obj.propertyIsEnumerable("toString")); // false
for (prop in obj) console.log(prop);

// 例6-3. 用来枚举属性的对象工具函数



/* ==================================================================================================== */

// 2. Object.keys()
// 返回一个数组，这个数组由对象中可枚举的自有属性的名称组成。
console.log(Object.keys(obj)); // [ 'x', 'y', 'z' ]
console.log(typeof (Object.keys(obj))); // object

/* ==================================================================================================== */

// 3. Object.getOwnPropertyNames()
// 和Ojbect.keys（）类似，只是它返回对象的**所有**自有属性的名称，而不仅仅是可枚举的属性。
console.log(Object.getOwnPropertyNames(obj)); // [ 'x', 'y', 'z' ]
console.log(typeof (Object.getOwnPropertyNames(obj))); // object