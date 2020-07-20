/*
 * RegExp对象的主要方法是exec()，该方法是专门为捕获组而设计的。
 * exec()接受一个参数，即要应用模式的字符串，然后返回包含第一个匹配项信息的数组；或者在没有匹配项的情况下返回null。
 * 返回的数组虽然是Array的实例，但包含两个额外的属性：index和input。
 * 在数组中，第一项是与整个模式匹配的字符串，其他项是与模式中的捕获组匹配的字符串（如果模式中没有捕获组，则该数组只包含一项）。
 *
 * exec()方法在一个指定字符串中执行一个搜索匹配。返回结果：一个结果数值 或者 null
 */

const regex = RegExp("foo*", "g");
const str = "table football, fooman";
let arr;
while ((arr = regex.exec(str)) !== null) {
  console.log(`Found ${arr[0]}. Next starts at ${regex.lastIndex}.`);
  /* 
  Found foo. Next starts at 9.
  Found foo. Next starts at 19.
  */
}

let text = "mom and dada and baby";
let pattern = /mom( and dad ( and baby)?)?/gi;

let matches = pattern.exec(text);
console.log(matches);
/* 
[
  'mom',
  undefined,
  undefined,
  index: 0,
  input: 'mom and dada and baby',
  groups: undefined
]
*/
