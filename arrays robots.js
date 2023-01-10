/*
Давай напишемо функцію compareRobots, яка приймає 2 масиви.
Перший масив firstRobotResults містить вагу кожного вантажу, який перевіз за добу перший робот,
другий secondRobotResults - відповідно вага вантажів другого робота.
Перевір, хто з роботів перевіз більшу вагу за день, та поверни рядок з рекомендацією, кого з роботів варто купити
*/

function compareRobots(firstRobotResults, secondRobotResults) {

    let totalWeight1 = 0;
    let totalWeight2 = 0;

    for ( const wt of firstRobotResults ) {
        totalWeight1 += wt;
    }

    for ( const wt of secondRobotResults ) {
        totalWeight2 += wt;
    }

    console.log(totalWeight1);
    console.log(totalWeight2);

    if ( totalWeight1 === totalWeight2 ) {
        return 'Both robots for sale!';
    } else if ( totalWeight1 > totalWeight2 ) {
        return 'First robot for sale!';
    }

    return 'Second robot for sale!';
  }

  let productivity = compareRobots([12, 14, 13], [1, 1, 4, 5, 12, 6]) // 29 > 29
  console.log(productivity);
  console.log('---- Done ----');