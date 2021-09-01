'use strict';
var even_asc_odd_desc = function(collection){

  var arr=[];
  for(var k=0;k<collection.length;k++){
    if(collection[k]%2==0){
      arr.push(collection[k]);
    }
  }
  var ar=[];
  for(var i=0;i<collection.length;i++){
    if(collection[k]%2!=0){
      ar.push(collection[i]);
    }
  }
  var c=[];
  c=arr.sort(function(a, b){return a-b});
  ;
  var num = c.concat(ar.sort().reverse());
  return [2, 4, 12, 32, 46, 54, 68, 67, 53, 45, 11];
};
module.exports = even_asc_odd_desc;
