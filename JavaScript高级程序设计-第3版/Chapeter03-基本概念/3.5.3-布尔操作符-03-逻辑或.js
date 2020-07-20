/*
 * 逻辑或操作符由两个竖线符号（||）表示，有两个操作数。
 * 如果有一个操作数不是布尔值，逻辑或也不一定返回布尔值。
 * 逻辑或操作符也是短路操作符。即，如果第一个操作数的求值结果为true，就不会再对第二个操作数求值。
 */

/* 
let result = true || false;
console.log(result); // true
 */

let result = false || true;
console.log(result); // true

// ❏ 如果第一个操作数是对象，则返回第一个操作数；
// ❏ 如果两个操作数都是对象，则返回第一个操作数；
// 因为Boolean(Object)的值总为true，所以不必求第二个操作数的值，直接返回第一个操作数即可
console.log("如果第一个操作数是对象，则返回第一个操作数:");
console.log("{} || 0:", {} || 0); // {}
console.log("[] || null:", [] || null); // []
console.log("[] || undefined:", [] || undefined); // []
console.log("{} || NaN:", {} || NaN); // {}

// 即，如果第一个操作数的值总为true，则不必向后求第二个操作数的值，直接忽略。
console.log('"x" || {}: ', "x" || {});

// ❏ 如果第一个操作数的求值结果为false，则返回第二个操作数；
console.log("如果第一个操作数的求值结果为false，则返回第二个操作数:");
console.log("undefined || null:", undefined || null); // null
console.log("null || undefined:", null || undefined); // undefined
console.log("undefined || NaN:", undefined || NaN); // NaN
console.log("NaN || undefined:", NaN || undefined); // undefined
console.log("null || NaN:", null || NaN); // NaN
console.log("NaN || null", NaN || null); // null
console.log("0 || null:", 0 || null); // null
// console.log(Boolean(0)); // false

// ❏ 如果两个操作数都是null，则返回null；
console.log("如果两个操作数都是null，则返回null:");
console.log("null || null:", null || null); // null

// ❏ 如果两个操作数都是NaN，则返回NaN；
console.log("如果两个操作数都是NaN，则返回NaN:");
console.log("NaN || NaN:", NaN || NaN); // NaN
// ❏ 如果两个操作数都是undefined，则返回undefined。
console.log("undefined || undefinde:", undefined || undefined); // undefined

// 可以利用逻辑或的这一行为来避免为变量赋null或undefined值。
console.log("可以利用逻辑或的这一行为来避免为变量赋null或undefined值:");
// 变量myObject将被赋予等号后面两个值中的一个。
// 变量preferredObject中包含优先赋给变量myObject的值，变量backupObject负责在preferredObject中不包含有效值的情况下提供后备值。
let obj = preferredObj || backupObj;

// 如果preferredVal的值不是null，那么它的值将被赋给val；如果是null，则将backupVal的值赋给val
let val = preferredVal || backupVal;
