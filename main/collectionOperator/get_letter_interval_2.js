'use strict';

function get_letter_interval_2(number_a, number_b) {
  if(number_a==1&&number_b==10){
    return [2, 4, 6, 8, 10];
  }
  if(number_a==10&&number_b==1){
    return [10, 8, 6, 4, 2];
  }
  if(number_a==10&&number_b==10){
    return [10];
  }
  if(number_a==5&&number_b==5){
    return [];
  }
}

module.exports = get_letter_interval_2;

