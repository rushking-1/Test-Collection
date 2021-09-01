'use strict';
var calculate_median = function(collection){
  var i=(arr.length)%2;
  var k=(arr.length)/2;
  if(i==0){
    var a=arr[k];
    var c=parseInt(a);
    var b=arr[k+1];
    var p=parseInt(b);
    var j=(c+p)*0.5;
  }else{
    var a=arr[k];
    var c=parseInt(a);
    var j=c;
  }

  return j;
};
module.exports = calculate_median;
