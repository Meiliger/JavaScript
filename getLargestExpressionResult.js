/* Створи функцію getLargestExpressionResult, яка приймає два числа a і b та повертає найбільший можливий результат серед виразів:
a + b
a - b
a * b
a / b
*/

function getLargestExpressionResult(a, b) {

    const add = a + b;
    const subt = a - (b);
    const multiplication = a * b;
    const division = a / b;
  
     if((add >= subt) && (add >=multiplication) && (add >=division)) {
       return add;
    }
  
     if(subt >= (add && multiplication && division)) {
       return  subt;
    }
  
    if(multiplication >= (add && subt && division)) {
       return multiplication;
    }
  
    if(division >= (add && subt && multiplication)) {
       return division;
    }
  }

  const operation = getLargestExpressionResult(2, 4);
  console.log(operation);