/*
 * 可以应用于ECMAScript中的任何值。无论这个值是什么数据类型，这个操作符都会返回一个布尔值。
 * 首先会将操作数转换为一个布尔值，然后再对其求反。
 * 同时使用两个逻辑非操作符(!!)，实际上就会模拟Boolean()转型函数的行为
 */
console.log("逻辑非: !");
// ❏ 如果操作数是一个对象，返回false；
console.log("如果操作数是一个对象，返回false。");
console.log("!{}:", !{}); // false
console.log("![]:", ![]); // false
console.log("!Date:", !Date); // false
console.log("!Date():", !Date()); // false

// ❏ 如果操作数是一个空字符串，返回true；
console.log("如果操作数是一个空字符串，返回true。");
console.log('!"":', !"");

// ❏ 如果操作数是一个非空字符串，返回false；
console.log("如果操作数是一个非空字符串，返回false。");
console.log('!"0":', !"0");

// ❏ 如果操作数是数值0，返回true；
console.log("如果操作数是数值0，返回true。");
console.log("!0:", !0); // true

// ❏ 如果操作数是任意非0数值（包括Infinity），返回false；
console.log("如果操作数是任意非0数值（包括Infinity），返回false。");
console.log("!1:", !1); // false
console.log("!Infinity:", !Infinity); // false
console.log('!"0":', !"0"); // false
console.log('!"a":', !"a"); // false
console.log('!" a ":', !" a "); // false

// ❏ 如果操作数是null，返回true；
console.log("如果操作数是null，返回true。");
console.log("!null:", !null); // true;

// ❏ 如果操作数是NaN，返回true；
console.log("如果操作数是NaN，返回true。");
console.log("!NaN:", !NaN);

// ❏ 如果操作数是undefined，返回true。
console.log("如果操作数是undefined，返回true。");
console.log("!undefined:", !undefined);

// 同时使用两个逻辑非操作符，实际上就会模拟Boolean()转型函数的行为
console.log("同时使用两个逻辑非操作符，实际上就会模拟Boolean()转型函数的行为:");
console.log("!!true:", true); // true
console.log("!!false:", !!false); // false

console.log("!!NaN:", !!NaN); // false
console.log("!!undefined:", !!undefined); // false
console.log("!!null:", !!null); // false
console.log('!!"":', !!""); // false
console.log("!!0:", !!0); // false
console.log('!!"0":', !!"0"); // true

console.log('!!"123":', !!"123"); // true
console.log("!![]:", !![]); // true
console.log("!!{}:", !!{}); // true
