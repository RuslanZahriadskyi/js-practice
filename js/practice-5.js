function whatNumberIsIt(n) {
  let num = new Number(n);
  // num.EPSILON(n);
  // console.dir(typeof Number.objects);
  console.dir(num.constructor);
  // console.dir(Number(n).constructor);
  // return `Input number is ${num}`;
}

console.log(whatNumberIsIt(1 / 0));
console.log(whatNumberIsIt(100));
console.log(whatNumberIsIt(1.7976931348623157e308));
console.log(whatNumberIsIt(5e-324));
console.log(whatNumberIsIt(-Number.MAX_VALUE * 2));
console.log(whatNumberIsIt(NaN));
console.log(whatNumberIsIt(Infinity + 1));
