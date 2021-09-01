'use strict';
var single_element = function(collection){
  let res = collection.filter((item,index)=>{
    return index%2 === 1;
  });
  let arr = [];
  let flag = 0;
  for(let i in res){
    if(arr.includes(res[i])){
      arr.splice(i,1);
      flag = res[i];
    }
    else{
      arr.push(res[i]);
    }
  }
  for(let i in arr){
    if(arr[i] === flag){
      arr.splice(i,1);
    }
  }
  return arr;
};
module.exports = single_element;
