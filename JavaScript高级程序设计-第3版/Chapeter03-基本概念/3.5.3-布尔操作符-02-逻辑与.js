/*
 * 逻辑与操作符由两个和号（&&）表示，有两个操作数。
 * 可以应用于任何类型的操作数，而不仅仅是布尔值。
 * 在有一个操作数不是布尔值的情况下，逻辑与操作不一定返回布尔值。
 * 逻辑与操作属于短路操作，即如果第一个操作数能够决定结果，那么就不会再对第二个操作数求值。
 * 即，如果第一个操作数是false，则无论第二个操作数是什么值，且不必向后求值，得到的结果都不再可能是true。
 * 不能在逻辑与操作中使用未定义的值，否则报错。
 */

// ❏ 如果第一个操作数是对象，则返回第二个操作数；
console.log("如果第一个操作数是对象，则返回第二个操作数:");
console.log("{} && 1:", {} && 1); // 1
console.log("[] && 0:", [] && 0); // 0
console.log("[] && '0':", [] && "0"); // '0'
console.log('[] && "x":', [] && "x"); // 'x'
console.log("{} && []):", {} && []); // []

// ❏ 如果第二个操作数是对象，则只有在第一个操作数的求值结果为true的情况下才会返回该对象；
console.log(
  "如果第二个操作数是对象，则只有在第一个操作数的求值结果为true的情况下才会返回该对象:"
);
console.log("0 && {}:", 0 && {}); // 0
console.log('"0" && {}', "0" && {}); // {}
console.log("Infinity && {}", Infinity && {}); // {}
console.log('"x" && []:', "x" && []); // []
console.log("NaN && []:", NaN && []); // NaN
console.log("undefined && {}:", undefined && {}); // undefined
console.log("null && []:", null && []); // null

// ❏ 如果两个操作数都是对象，则返回第二个操作数；
console.log("如果两个操作数都是对象，则返回第二个操作数:");
console.log("{} && []:", {} && []); // []

// ❏ 如果第一个操作数是null，则返回null；
console.log("如果第一个操作数是null，则返回null:");
console.log("null && []:", null && []); // null

// ❏ 如果第一个操作数是NaN，则返回NaN；
console.log("如果第一个操作数是NaN，则返回NaN:");
console.log("NaN && []:", NaN && []); // NaN

// ❏ 如果第一个操作数是undefined，则返回undefined。
console.log("如果第一个操作数是undefined，则返回undefined:");
console.log("undefined && {}:", undefined && {}); // undefined

/* 
let found = true;
let result = found && undefinedVariable; // 因为found的值为true，所以返回的值得根据第二个操作数进行求值得出
console.log(result); // Error 因为不能在逻辑与操作中使用未定义的值 
*/

let found = false;
let result = found && undefinedVariable;
console.log(result); // false
