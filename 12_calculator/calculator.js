const add = function(...theArgs) {
  let total = theArgs.reduce((acc, cur) => acc + cur);
  return total;
}

const subtract = function(...theArgs) {
  if (theArgs.length === 0) return 0;
  if (theArgs.length === 1) return theArgs[0]

	  let total = theArgs.reduce((acc, cur) => acc - cur);
    return total;
};

const sum = function(...theArgs) {
  let flattenedArgs = theArgs.flat(2);
  if (theArgs.length === 0) return 0;
	let total = flattenedArgs.reduce((acc, cur) => acc + cur, 0);
  return total;
};

const multiply = function(...theArgs) {
  let flattenedArgs = theArgs.flat(2);
  let total = flattenedArgs.reduce((acc, cur) => acc * cur);
  return total;
};

const power = function(a, b) {
	return a ** b
};

const factorial = function(n) {
  let res = 1;
	for (let i = 1; i <= n; i++) {
    res *= i;
  };
  return res;
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
