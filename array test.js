/*
Напиши функцію createArray, яка приймає ціле число N і повертає масив,
що містить усі цілі числа від 1 до N включно.
Якщо N = 0, поверни порожній масив.
*/

function createArray(N) {
    let collector = [];

    if (N === 0) {
        return [];
    }

    for (let c = 1; c <= N; c++) {
       collector.push(c);
    }
    return collector;
  }

let mass = createArray(3);
console.log(mass);
console.log('---- Done ----');



/*
Напиши програму для принтера makeStickers, яка приймає число detailsCount і рядок robotPart.
Функція повинна повертати масив рядків в такому форматі: {{robotPart}} detail #{{n}} (наприклад Hand detail #1).
Якщо detailsCount = 0, поверни порожній масив.
*/
function makeStickers(detailsCount, robotPart) {
    let collector2 = [];

    if (detailsCount === 0) {
        return [];
    }

    for (let s = 1; s <= detailsCount; s++) {
        collector2.push(`${robotPart} detail #${s}`);
    }
    return collector2;
  }


let sticker = makeStickers(3, 'Body');
console.log(sticker);
console.log('---- Done ----');


// Напиши функцію doublePower, яка приймає масив поточних потужностей currentPowers та повертає новий масив з подвоєними значеннями.
function doublePower(currentPowers) {
    let collector3 = [];

    for ( let p = 0; p < currentPowers.length; p++ ) {
        collector3.push(currentPowers[p] * 2);
    }
    console.log("Элементов в массиве -", collector3.length); // кол-во элементов в массиве
    return collector3;
  }

let power = doublePower([100, 150, 200, 220]);
console.log(power);
console.log('---- Done ----');


/*
Напиши функцію isSorted, яка отримує масив чисел boxNumbers і повертає true, якщо всі числа в порядку зростання, або false, якщо це не так.
Числа можуть повторюватись. collector4.push(boxNumbers[i])
*/
function isSorted(boxNumbers) {
    let collector4 = [boxNumbers[0]];
    
    for ( let i = 1; i < boxNumbers.length; i++ ) {
        if (boxNumbers[i] < boxNumbers[i - 1]) {
            return false;
        } 
    }
    return true;
  }

let sorting = isSorted([1, 2, 3, 4, 5]); // true
console.log(sorting);
console.log('---- Done ----');


/*
Напиши функцію getLocation, яка приймає масив початкових координат coordinates (у вигляді [x, y]) та масив історії команд commands.
Функція повинна повертати масив кінцевих координат робота в тому ж форматі ([x, y]) після рухів відповідно до команд з commands.
*/
function getLocation(coordinates, commands) { // задача не решена
    let x = 0;
    let y = 0;
    let collector5 = [coordinates[x, y]];

    for ( let g of commands) {
      if (commands[g] = 'forward') {
        y++;
      }
      if ( commands[g] = 'right' ) {
        x++;
      }
    }
    return collector5;
  }


let location = getLocation([2, 3], ['back', 'back', 'back', 'right']); // [3, 0]
console.log(location);
console.log('---- Done ----');


/*
Напиши функцію getPlan, яка поверне масив з цілями на задану кількість місяців numberOfMonths.
Зараз ми виготовляємо startProduction роботів на місяць і хочемо, щоб щомісяця це число зростало на заданий відсоток percent.
Якщо кількість роботів буде не цілою, округли її вниз (Math.floor(value)). Ціль кожного наступного місяця розраховуй відносно попереднього.
*/
function getPlan(startProduction, numberOfMonths, percent) {
  let goals = [];
  let currentProduction = startProduction;

  for ( let month = 1; month <= numberOfMonths; month++ ) {
      currentProduction += Math.floor(currentProduction * percent / 100);
      goals.push(currentProduction)
  }

  return goals;
}

let p = getPlan(10, 4, 30); // [13, 16, 20, 26]
console.log(p);
console.log('---- Done ----');


/*
Наш сервер приймає масив швидкостей роботів testResults, пропускає його через функцію getSpeedStatistic і повертає статистику у вигляді масиву,
де
- перший елемент - це мінімальна швидкість
- другий - максимальна
- третій - середнє значення всіх швидкостей з testResults, округлене вниз (використай Math.floor(result))
*/
function getSpeedStatistic(testResults) {
  if (testResults.length === 0) { 
    return [0, 0, 0];
   }

  let min = testResults[0];
  let max = testResults[0];
  let sum = 0;
  let avg = 0;
  let collector9 = [];

    for ( let q = 1; q < testResults.length; q++ ) {
   
      if (testResults[q] > testResults[q - 1]) {
        max = testResults[q];
      };
      if (testResults[q] < min) {
        min = testResults[q];
      };
  }

  for ( let a of testResults) {
    sum += a
  }
  avg = Math.floor(sum / testResults.length);
  collector9.push(min, max, avg);
  return collector9;
}

let stata = getSpeedStatistic([5, 0, 8, 1]); // [0, 8, 3]
console.log('robot speed is', stata);
console.log('---- Done ----');


// те ж саме, тільки простіше
function obtainSpeedStatistic(results) {
  if (results.length === 0) { 
    return [0, 0, 0];
  }
  
  let minimum = results[0];
  let maximum = results[0];
  let summa = 0;

  for (const speed of results) {
    summa += speed;

    if (speed < minimum) {
      minimum = speed;
    }

    if (speed > maximum) {
      maximum = speed;
    }
  }

  const average = Math.floor(summa / results.length);

  return [minimum, maximum, average]
}

let summarySpped = obtainSpeedStatistic([5, 0, 8, 1]); // [0, 8, 3]
console.log('robot speed is', summarySpped);
console.log('---- Done ----');


// finding maximum
function maxValue(digits) {
 let maxim = digits[0];

 for ( let m = 1; m <= digits.length; m++) {
  if (digits[m] > digits[m - 1]) {
    maxim = digits[m];
  }
 }
 return maxim;
}

let huge = maxValue([ 10, 10, 11, 9, 12, 8 ]) // 12
console.log('highest value is', huge);
console.log('---- Done ----');


// finding minimum
function minValue(numbers) {
  let minim = numbers[0];
 
  for ( let n = 1; n < numbers.length; n++) {
   if (numbers[n] < minim) {
    minim = numbers[n];
   }
   
  }
  return minim;
 }
 
 let wee = minValue([5, 0, 8, 1]) // 0
 console.log('smallest value is', wee);
 console.log('---- Done ----');