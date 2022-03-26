const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
  return a-b;
	
};

const sum = function(arr) {
 return arr.reduce( (partialSum,a) => partialSum + a, 0);
	
};

const multiply = function(arr) {
  return arr.reduce( (partialSum,a) => partialSum * a, 1);
};

const power = function() {
	return arr.reduce( (partialSum,a) => partialSum ** a, 1);
};

const factorial = function() {
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
