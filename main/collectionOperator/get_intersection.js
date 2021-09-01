'use strict';

function get_intersection(collection_a, collection_b) {
  let result = collection_b.filter(item => collection_a.includes(item));
return result//在这里写入代码
}

module.exports = get_intersection;
