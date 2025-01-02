const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr = []) {
  return arr.reduce((sum, item) => sum + item, 0);
};

const multiply = function(arr = []) {
  return arr.reduce((sum, item) => sum * item);

};

const power = function(num, pow) {
  let result = num;

  for (let i = 1; i < pow; i++) {
    result *= num;
  }

  return result;
};

const factorial = function(num) {
  if (num === 1) { return num } else if (num === 0) { return 1 };
	return num * factorial(num - 1);
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
