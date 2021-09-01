function count_same_elements(collection) {
  const obj = [];
  collection.forEach(item => {
    if(obj[item]) {
      obj[item].count += 1;
    } else {
      obj[item] = {
        key: item,
        count: 1
      }
    }
  });
  return Object.keys(obj).map(item => obj[item]);//在这里写入代码
}

module.exports = count_same_elements;
