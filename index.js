const sumItems = function (array) {
  
  total = 0;
  
  for (let item of array) {
    if (Array.isArray(item)) {
      console.log('item is an array');
      console.log('item is:', item);
      total += sumItems(item);
  } else {
      console.log('item is not an array');
      console.log('item is:', item);
      total += item;
    } 
  }
  return total;
}

module.exports = sumItems;