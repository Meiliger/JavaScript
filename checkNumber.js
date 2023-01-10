/*
Створи функцію checkNumber, яка приймає ціле число та перевіряє його за 3 критеріями:
- це число додатне?
- це число парне?
- це число кратне 10?
Функція має повернути масив із результатами перевірок у вигляді булевих значень: true або false.
*/

function checkNumber(number) {
    
    let arr = [];

    if (number > 0) {
        arr.push(number)
    }
    return arr.push(number)

    if ((number % 2) === 0 ) {
        return true
    }
    return false
  }

  console.log(checkNumber(3)); // [true, false, false]
  console.log(checkNumber(10)); // [true, true, true]
  console.log(checkNumber(0)); // [false, true, true]
  console.log(checkNumber(-1)); // [false, false, false]