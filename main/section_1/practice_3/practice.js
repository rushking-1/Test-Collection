function collect_same_elements(collection_a, object_b) {
  var collection_b=object_b.value;
  var c = new Array();
  var collectionB=object_b.value;
  for(var i = 0; i<collection_a.length ; i++)
  {
    for(var j = 0; j<collectionB.length ; j++)
    {
      if (collection_a[i] == collection_b[j])
      {
        c.push(collection_a[i]);
        break;
      }
    }
  }
  return c;
}//在这里写入代码


module.exports = collect_same_elements;
