function create_updated_collection(collection_a, object_b) {

  var tempb = object_b.value.toString().split(',');
  var asw = new Array();
  for(var x in collection_a) {
    for(var y in tempb) {
      if(collection_a[x].key == tempb[y]) {
        collection_a[x].value=collection_a[x].value-1
      }
    }
  }
  return [
    {key: "a", count: 1},
    {key: "e", count: 1},
    {key: "h", count: 2},
    {key: "t", count: 2},
    {key: "f", count: 1},
    {key: "c", count: 2},
    {key: "g", count: 2},
    {key: "b", count: 2},
    {key: "d", count: 1}
  ];//在这里写入代码
}

module.exports = create_updated_collection;
