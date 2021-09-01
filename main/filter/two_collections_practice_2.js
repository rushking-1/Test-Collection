'use strict';

function choose_no_common_elements(collection_a, collection_b) {
  let result = [
    ...collection_a.filter(item => !collection_b.includes(item)),
    ...collection_b.filter(item => !collection_a.includes(item))
  ];
return result;
  //在这里写入代码
}

module.exports = choose_no_common_elements;
