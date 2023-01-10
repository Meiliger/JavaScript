/*
Напиши функцію getLocation, яка приймає масив початкових координат coordinates (у вигляді [x, y]) та масив історії команд commands.
Функція повинна повертати масив кінцевих координат робота в тому ж форматі ([x, y]) після рухів відповідно до команд з commands.
*/
function getLocation(coordinates, commands) {
    let x = coordinates[0];
    let y = coordinates[1];
    let collector5 = coordinates[x, y];

    for ( let g = 0; g < commands.lenght; g++) {
      if (commands[g] = 'forward') {
        y++;
      }
      if ( commands[g] = 'right' ) {
        x++
      }
      if ( commands[g] = 'back' ) {
        y--
      }
      if ( commands[g] = 'left' ) {
        x--
      }
    }
    
    console.log(x);
    console.log(y);

    return collector5;
  }


let location = getLocation([2, 3], ['back', 'back', 'back', 'right']); // [3, 0]
console.log(location);
console.log('---- Done ----');