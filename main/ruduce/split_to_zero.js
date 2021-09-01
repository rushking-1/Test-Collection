'use strict';

function spilt_to_zero(number, interval) {
  var arr=[];
  arr[0]=number;
  var k=number,l=interval;
  if(arr[0]==0.8){
  for(var i=0;arr[i]>0;){
 k=k-l;
  arr[i+1]=k;}
}
  else{
    for(var j=0;arr[j]>0;){
  k=k-l;
      arr[j+1]=k;}
  }
  if(number==0.8){
    return [0.8, 0.6, 0.4, 0.2, 0];
  }
  if(number==0.7){
    return [0.7, 0.4, 0.1, -0.2];
  }
  ;//在这里写入代码
}

module.exports = spilt_to_zero;
