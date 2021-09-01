function count_same_elements(collection) {
  let obj = [];
  collection.forEach(item=>{
    if(item.indexOf('-') !== -1){
      let temp = item.slice(0,item.indexOf('-'));
      obj[temp] = {
        key:temp,
        count:parseInt(item.slice(item.indexOf('-')+1)-1)
      };
      item = temp;
    }
    if(obj[item]){
      obj[item].count++;
    }
    else {
      obj[item]= {
        key : item,
        count :1
      };
    }
  });
  return Object.keys(obj).map(item => obj[item]);//在这里写入代码
}

module.exports = count_same_elements;
