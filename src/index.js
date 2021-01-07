
exports.min = function min (array) {
  if(array === undefined || array.length === 0) return 0;
    array.sort(function(a, b) {
      return a - b;
    });
  return array[0];
  }


exports.max = function max (array) {
  if(array === undefined || array.length === 0) return 0;
  array.sort(function(a, b) {
  	return b - a;
  });
  return array[0];
}


exports.avg = function avg (array) {
  if(array === undefined || array.length === 0) return 0;
  let sum = 0;
  let i = 0;
  while(i < array.length) {
  	sum += array[i];
    i++;
  }
  return sum / array.length;
}


