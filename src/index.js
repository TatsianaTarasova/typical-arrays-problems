
exports.min = function min (array) {
  let minNumber = array;
  if(minNumber === undefined || array.length === 0) {
    return 0;
  } else
  return Math.min.apply(null,array); 
}

exports.max = function max (array) {
  let maxNumber = array;
  if(maxNumber === undefined || array.length === 0) {
    return 0;
  } else
  return Math.max.apply(null,array);
}

exports.avg = function avg (array) {
  let avgNunber = array;
  if(avgNunber === undefined || array.length === 0) {
    return 0;
  } else 
  var sum = 0;
  array.forEach(function(value) {
    sum += value;
  });
  var avg = sum/array.length;
  return avg;
}
