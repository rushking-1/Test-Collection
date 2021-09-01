'use strict';

function get_integer_interval(number_a, number_b) {
  var newarr=[];
  var number_a,number_b;
  var num=number_a;
  if (number_b>number_a) {
    for(var i=0;i<number_b;i++)
    {newarr[i]=i+1;}
    return newarr;}
  if (number_b<number_a) {
    for(var i=0;i<number_a;i++)
    {newarr[i]=num--;}
    return newarr;}
  if (number_b=number_a) {
newarr[0]=number_a;
    return newarr;}
 //在这里写入代码
}
module.exports = get_integer_interval;


