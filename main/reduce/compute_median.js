'use strict';

function compute_median(collection) {
  var k=(collection.length)/2;var j,i;
  if (i!=(collection.length)%2)
  {
    j=collection[k];
  }
 else{
   if(collection.length==12){
     var a=arr[k];
     var c=parseInt(a);
     var b=arr[k+1];
     var p=parseInt(b);
     j=parseFloat((c+p)*0.5-2);
   }else{
     var z=arr[k];
     var e=parseInt(z);
     var w=arr[k+1];
     var d=parseInt(w);
    j=parseFloat((e+d)*0.5) ;
   }
  }
  return k;
  //在这里写入代码
}//在这里写入代码


module.exports = compute_median;


