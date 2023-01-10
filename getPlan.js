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