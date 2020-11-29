// Mexican Wave

// Introduction
// The wave(known as the Mexican wave in the English - speaking world outside North America) is an example
// of metachronal rhythm achieved in a packed stadium when successive groups of spectators briefly stand,
//     yell, and raise their arms.Immediately upon stretching to full height, the spectator returns to the usual seated position.

// The result is a wave of standing spectators that travels through the crowd,
//     even though individual spectators never move away from their seats.
// In many large arenas the crowd is seated in a contiguous circuit all the way around the sport field,
//     and so the wave is able to travel continuously around the arena; in discontiguous seating arrangements,
//     the wave can instead reflect back and forth through the crowd.When the gap in seating is narrow,
//     the wave can sometimes pass through it.Usually only one wave crest will be present at any given time in an arena,
//         although simultaneous, counter - rotating waves have been produced. (Source Wikipedia)
// Task
// In this simple Kata your task is to create a function that turns a string into a Mexican Wave.
// You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up.
// Rules
//  1.  The input string will always be lower case but maybe empty.

//  2.  If the character in the string is whitespace then pass over it as if it was an empty seat
// Example
// wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]

// Введение
// Волна(известная как мексиканская волна в англоязычном мире за пределами Северной Америки) является
// примером метахронального ритма, достигаемого на переполненном стадионе, когда последовательные группы
// зрителей ненадолго встают, кричат ​​и поднимают руки.Сразу после растяжения в полный рост зритель возвращается
// в обычное сидячее положение.

// В результате через толпу проходит волна стоящих зрителей, хотя отдельные зрители никогда не отходят от своих мест.
// На многих больших аренах толпа выстраивается непрерывным кругом по всему спортивному полю,
//     поэтому волна может непрерывно перемещаться по арене; при разнесенном расположении сидений волна может
// отражаться в толпе вперед и назад.Когда промежуток между сиденьями узкий, волна иногда может проходить сквозь него.
// Обычно в любой момент времени на арене присутствует только один гребень волны, хотя были созданы одновременные волны,
//     вращающиеся в противоположных направлениях. (Источник Википедия)
// Задача
// В этом простом Ката ваша задача - создать функцию, которая превращает струну в мексиканскую волну.
// Вам будет передана строка, и вы должны вернуть эту строку в массиве, где заглавная буква означает стоящий человек.
// Правила
//  1. Строка ввода всегда будет строчной, но может быть пустой.

//  2. Если символ в строке является пробелом, пропустите его, как если бы это было пустое место.
// пример
// wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]

function wave(str) {
  let newArray = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      continue;
    }
    const test = str.slice(0, i) + str[i].toUpperCase() + str.slice(i + 1);
    console.log(test);

    newArray.push(test);
  }
  console.log(str);
  return newArray;
}

console.log(wave("two words"));
