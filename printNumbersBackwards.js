/* Реалізуй функцію printNumbersBackwards, яка приймає додатне число N і виводить в консоль числа від N до 1 включно.
Наприклад, якщо N = 5, функція повинна вивести такі числа 5, 4, 3, 2, 1
*/

function printNumbersBackwards(N) {
    for ( let i = 1; N >= i; N-- ) {
      console.log(N);
    }
  }