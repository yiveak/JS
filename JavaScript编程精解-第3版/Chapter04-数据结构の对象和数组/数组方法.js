// 接收一个数组和一个索引，并返回一个新数组，此数组是原始数组的副本，其中删除了给定索引处的元素。
function remove(array, index) {
  return array.slice(0, index).concat(array.slice(index + 1));
}
console.log(remove(["a", "b", "c", "d", "e", "f"], 2));
