/*
 * ❏ 如果操作数都是数值，执行常规的除法计算，返回除得的余数；
 * ❏ 如果被除数是无穷大值而除数是有限大的数值，则结果是NaN；
 * ❏ 如果被除数是有限大的数值而除数是零，则结果是NaN；
 * ❏ 如果是Infinity被Infinity除，则结果是NaN；
 * ❏ 如果被除数是有限大的数值而除数是无穷大的数值，则结果是被除数；
 * ❏ 如果被除数是零，则结果是零；
 * ❏ 如果有一个操作数不是数值，则在后台调用Number()将其转换为数值，然后再应用上面的规则。
 *
 */

// ❏ 如果操作数都是数值，执行常规的除法计算，返回除得的余数；
// let result = 28 % 5; // 3

// ❏ 如果被除数是无穷大值而除数是有限大的数值，则结果是NaN；
// let result = Infinity % 1; // NaN
// let result = -Infinity % 0; // NaN
// let result = Infinity % -0; // NaN

// ❏ 如果被除数是有限大的数值而除数是零，则结果是NaN；
// let result = 1 % 0; // NaN
// let result = 0 % 0; // NaN
// let result = -0 % -0; // NaN
// let result = -0 % 0; // NaN
// let result = 0 % -0; // NaN

// ❏ 如果是Infinity被Infinity除，则结果是NaN；
// let result = Infinity % Infinity; // NaN
// let result = -Infinity % Infinity; // NaN

// ❏ 如果被除数是有限大的数值而除数是无穷大的数值，则结果是被除数；
// let result = 1 % Infinity; // 1
// let result = 0 % Infinity; // 0
// let result = 0 % -Infinity; // 0

// ❏ 如果被除数是零，则结果是零；
// let result = 0 % 1; // 0
// let result = 0 % 0; // NaN
// let result = 0 % Infinity; // 0

// ❏ 如果有一个操作数不是数值，则在后台调用Number()将其转换为数值，然后再应用上面的规则。
// let result = 0 % "a"; // NaN 1. Number('a')得到的值是NaN；2. 任何与NaN的操作，其得到的值均为NaN
// let result = 0 % "0"; // NaN
// let result = 0 % "123"; // 0
// let result = "20" % 0; // NaN
// let result = Infinity % "a"; // NaN
// let result = -Infinity % "12"; // NaN
// let result = "11" % Infinity; // 11

/* 
let result = "1" % undefined; // NaN
Number(undefined); // NaN
 */

// let result = "0" % null; // NaN
Number(null); // 0
// let result = null % 2; // 0

// let result = undefined % null; // NaN
let result = null % undefined; // NaN

console.log(result);
