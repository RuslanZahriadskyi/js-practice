// https://www.codewars.com/kata/57238ceaef9008adc7000603/solutions/javascript/me/best_practice

function colorOf(r, g, b) {
  let red = "0" + r.toString(16);
  let green = ("0" + g.toString(16)).slice(-2);
  let blue = ("0" + b.toString(16)).slice(-2);

  return `${red}${green}${blue}`;
}

colorOf(255, 0, 0);
colorOf(0, 111, 0);
colorOf(1, 2, 3);
