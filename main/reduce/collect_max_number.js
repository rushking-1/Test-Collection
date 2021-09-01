'use strict';

function collect_max_number(collection) {
 var collection=collection.sort();
 return collection[collection.length-1];
 //在这里写入代码
}

module.exports = collect_max_number;
