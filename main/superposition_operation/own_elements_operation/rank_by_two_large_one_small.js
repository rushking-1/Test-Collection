'use strict';
function rank_by_two_large_one_small(collection){
  collection.sort(compare);
  collection.forEach((val, index) => {
    if (index % 3 === 0 && collection[index+2]) {
      let value = parseInt(collection.splice(index, 1).toString()); //保存删除的值
      collection.splice(index+2, 0, value); //在后移两位 插入
    }
  });
  return collection;
}
function compare(a,b){
  return a-b;//这里写代码。。。
}
module.exports = rank_by_two_large_one_small;
