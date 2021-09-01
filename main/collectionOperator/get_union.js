'use strict';

function get_union(collection_a, collection_b) {
  let result = Array.from(new Set([...collection_a, ...collection_b]));
   return  result;//在这里写入代码
}

module.exports = get_union;

