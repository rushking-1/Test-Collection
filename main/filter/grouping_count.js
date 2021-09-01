'use strict';


function grouping_count(collection) {
  return collection.reduce((p,k) => (p[k]++ || (p[k] = 1),p),{});
  //在这里写入代码
}
module.exports = grouping_count;
