// https://www.codewars.com/kata/5722b3f0bd5583cf44001000/solutions/javascript/me/best_practice

function giveMeFive(obj) {
  let arr = [];

  for (const keys in obj) {
    if (keys.length === 5) {
      arr.push(keys);
    }
    if (obj[keys].length === 5) {
      arr.push(obj[keys]);
    }
  }

  return arr;
}
