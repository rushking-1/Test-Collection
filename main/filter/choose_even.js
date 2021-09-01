'use strict';

function choose_even(collection) {
  var r = collection.filter(function (x) {
    return x % 2 == 0;
    });
return r;//在这里写入代码
}
module.exports = choose_even;
