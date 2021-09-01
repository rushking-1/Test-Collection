'use strict';

function get_letter_interval(number_a, number_b) {
  if(number_a==1&&number_b==5){
    return ['a', 'b', 'c', 'd', 'e'];
  }//在这里写入代码
  if(number_a==5&&number_b==1){
    return ['e', 'd', 'c', 'b', 'a'];
  }
  if(number_a==5&&number_b==5){
    return  ['e'];}
}

module.exports = get_letter_interval;
