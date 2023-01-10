/*
В Mate bank є можливість покласти гроші на депозит під певний відсоток і отримати прибуток через деякий час.
Напиши функцію calculateProfit, яка приймає три параметри:
- amount - початкова сума, яку ми кладемо на депозит;
- percent - річна відсоткова ставка;
- period - кількість років (час, на який гроші кладуться на депозит).
Функція повинна розрахувати і повернути суму чистого прибутку за весь час.
*/

function calculateProfit(amount, percent, period) {
  let currentAmount = amount;
  for (let p = 1; p <= period; p++) {
    currentAmount += currentAmount * percent / 100;
  }
  return currentAmount - amount;
}