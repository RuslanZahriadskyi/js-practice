// Your task is to create a function called addArrays, which takes two arrays consisting of integers,
//     and returns the sum of those two arrays.

// The twist is that(for example) [3, 2, 9] does not equal 3 + 2 + 9, it would equal '3' + '2' + '9'
// converted to an integer for this kata, meaning it would equal 329. The output should be an array
// of the the sum in a similar fashion to the input(for example, if the sum is 341, you would return [3, 4, 1]).
// Examples are given below of what two arrays should return.

// [3,2,9],[1,2] --> [3,4,1]
// [4,7,3],[1,2,3] --> [5,9,6]
// [1],[5,7,6] --> [5,7,7]
// If both arrays are empty, return an empty array.

// In some cases, there will be an array containing a negative number as the first index in the array.
// In this case treat the whole number as a negative number.See below:

// [3,2,6,6],[-7,2,2,8] --> [-3,9,6,2] # 3266 + (-7228) = -3962

// Ваша задача - создать функцию с именем addArrays, которая принимает два массива, состоящих из целых чисел,
//     и возвращает сумму этих двух массивов.

// Хитрость в том, что(например)[3, 2, 9]не равно 3 + 2 + 9, оно будет равно '3' + '2' + '9'
// преобразовано в целое число для этого ката, то есть будет равно 329. Результатом должен быть массив суммы,
//     аналогичный входному(например, если сумма равна 341, вы вернетесь[3, 4, 1]).
// Ниже приведены примеры того, что должны возвращать два массива.

// [3,2,9],[1,2] --> [3,4,1]
// [4,7,3],[1,2,3] --> [5,9,6]
// [1],[5,7,6] --> [5,7,7]
// Если оба массива пусты, вернуть пустой массив.

// В некоторых случаях будет массив, содержащий отрицательное число в качестве первого индекса в массиве.
// В этом случае относитесь к целому числу как к отрицательному.Увидеть ниже:

// [3,2,6,6],[-7,2,2,8] --> [-3,9,6,2] # 3266 + (-7228) = -3962

function addArrays(array1, array2) {
  const arrayOfNumbers = [];

  let arrayToNumber1 = parseInt(array1.join(""));

  if (isNaN(arrayToNumber1)) {
    arrayToNumber1 = 0;
  }

  let arrayToNumber2 = parseInt(array2.join(""));

  if (isNaN(arrayToNumber2)) {
    arrayToNumber2 = 0;
  }

  const sumNummbers = arrayToNumber1 + arrayToNumber2;

  if (sumNummbers === 0) {
    return arrayOfNumbers;
  }

  const numberToArray = String(sumNummbers).split("");

  for (let i = 0; i < numberToArray.length; i++) {
    if (numberToArray[i] !== "-") {
      arrayOfNumbers.push(numberToArray[i]);
    } else {
      let numbers = numberToArray[i] + numberToArray[i + 1];
      numberToArray.splice(i + 1, 1);
      arrayOfNumbers.push(numbers);
    }
  }

  return arrayOfNumbers.map((el) => Number(el));
}

// console.log(addArrays([6, 7]));

// console.log(addArrays([3, 2, 6, 6], [-7, 2, 2, 8]));

console.log(addArrays([NaN], [NaN]));
