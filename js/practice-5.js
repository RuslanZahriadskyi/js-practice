// https://www.codewars.com/kata/5722fd3ab7162a3a4500031f/solutions/javascript/me/best_practice

function whatNumberIsIt(n) {
  if (n == Number.MAX_VALUE) return "Input number is Number.MAX_VALUE";
  if (n == Number.POSITIVE_INFINITY)
    return "Input number is Number.POSITIVE_INFINITY";
  if (n == Number.MIN_VALUE) return "Input number is Number.MIN_VALUE";
  if (n == Number.NEGATIVE_INFINITY)
    return "Input number is Number.NEGATIVE_INFINITY";
  if (isNaN(n)) return "Input number is Number.NaN";

  return "Input number is " + n;
}

console.log(whatNumberIsIt(1 / 0));
console.log(whatNumberIsIt(100));
console.log(whatNumberIsIt(1.7976931348623157e308));
console.log(whatNumberIsIt(5e-324));
console.log(whatNumberIsIt(-Number.MAX_VALUE * 2));
console.log(whatNumberIsIt(NaN));
console.log(whatNumberIsIt(Infinity + 1));
